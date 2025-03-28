import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { TaskType } from "@google/generative-ai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { userMemoryStoreMap } from "./user_map";

export const vectorSaveAndSearch = async (
  chunksArray: any,
  prompt: string,
  username: string,
) => {
  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "text-embedding-004",
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "Document title",
    apiKey: process.env.API_KEY,
  });

  const vectorStore = await MemoryVectorStore.fromDocuments(
    chunksArray,
    embeddings,
  );
  userMemoryStoreMap.set(username, vectorStore);

  const searches = await userMemoryStoreMap
    .get(username)
    ?.similaritySearch(prompt);
  return searches;
};
