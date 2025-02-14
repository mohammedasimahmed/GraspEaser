import { Request, Response, NextFunction } from "express";
import { ApiError } from "../lib/errors/api_error";
import { ErrorResponse } from "@repo/common/response";
import { HttpStatusCode } from "../enums/http_status_code";

export const error_handler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json(new ErrorResponse(err.message));
    return;
  }

  console.error(err.stack);
  res
    .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    .json(new ErrorResponse("Unexpected error occurred"));
};
