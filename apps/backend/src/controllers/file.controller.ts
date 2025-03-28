import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "../enums/http_status_code";
import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
import env from "../config/env";
import { google_llm_model, remove_temp_file } from "../lib/gen_ai";
import { generate_prompt } from "../lib/prompts";
import { inputFileSchema } from "@repo/common/zod/input_file";
import { ApiError } from "../lib/errors/api_error";
import { loadAndSplit } from "../lib/loadAndSplit";
import { generate_output } from "../lib/generate_output";
import { isPdfOrDocx } from "../lib/is_pdf_or_docx";
import { UserFormInput } from "@repo/common/request";

const fileManager = new GoogleAIFileManager(env.API_KEY);

interface FileRequest extends Request {
  user?: UserFormInput;
}

export async function file_handler(
  req: FileRequest,
  res: Response,
  next: NextFunction,
) {
  const file = req.file;
  const data = req.body;
  const options = await JSON.parse(data.options);
  const validate = inputFileSchema.safeParse({ file, options });
  const username = req.user?.username;
  if (!validate.success) {
    const wrongTypeError = new ApiError(
      "Server received data with wrong data type",
      HttpStatusCode.BAD_REQUEST,
    );
    next(wrongTypeError);
    return;
  }

  if (!file || !file.path || !file.filename) {
    const noFileError = new ApiError(
      "No file provided in input!",
      HttpStatusCode.BAD_REQUEST,
    );
    next(noFileError);
    return;
  }

  const type = isPdfOrDocx(file?.path);

  if (type !== "other") {
    try {
      const chunksArray = await loadAndSplit(file?.path, type);
      const result = await generate_output(
        chunksArray,
        username as string,
        options,
      );

      res.status(HttpStatusCode.OK).json({
        content_simplified: result,
      });
    } catch (error) {
      next(error);
    }
    return;
  }

  try {
    const fileResult = await fileManager.uploadFile(file?.path, {
      displayName: file.filename,
      mimeType: file.mimetype,
    });

    console.log(fileResult);

    try {
      // remove file from temporary .uploads folder.
      await remove_temp_file(file.path);
    } catch (err) {
      console.log("Error removing the temporary file.");
      console.error(err);
      next(err);
      return;
    }

    try {
      let processed = false;
      while (!processed) {
        const file = await fileManager.getFile(fileResult.file.name);
        processed = file.state === FileState.ACTIVE ? true : false;
        console.log(file);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error fetching the file status.");
        console.error(err.stack);
        console.error(err);
        next(err);
      }
      return;
    }

    try {
      const result = await google_llm_model.generateContent([
        generate_prompt(options),
        {
          fileData: {
            fileUri: fileResult.file.uri,
            mimeType: fileResult.file.mimeType,
          },
        },
      ]);
      res.status(HttpStatusCode.OK).json({
        content_simplified: result.response.text(),
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error getting response from llm");
        console.error(err.stack);
        console.error(err);
        next(err);
      }
      return;
    }
  } catch (err) {
    console.log("Unable to upload the file to google server");
    console.error(err);
    next(err);
  }
}
