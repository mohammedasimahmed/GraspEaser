import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "langchain/document";

export const splitText = async (content: string) => {
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 100,
    });

    const text_split = await textSplitter.splitText(content);
    const chunksArray:Document[] = await textSplitter.createDocuments(text_split);
    
    return chunksArray;
};