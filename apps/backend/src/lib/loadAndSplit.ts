import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "langchain/document";

export const loadAndSplit = async (file_path: string, type: string) => {
  const loader =
    type === "pdf" ? new PDFLoader(file_path) : new DocxLoader(file_path);
  const file = await loader.load();

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0,
  });

  const chunksArray: Document[] = await textSplitter.splitDocuments(file);
  console.log(chunksArray.length);
  return chunksArray;
};
