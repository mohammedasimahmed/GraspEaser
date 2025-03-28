import { atom } from "jotai";
import React from "react";

export const possibleWordCounts = [50, 100, 200, 300, 400, 500];
export const wordCountAtom = atom<number>(1);

export type InputTypes = "url" | "text" | "video" | "image" | "document";
export const InputTypesArray: InputTypes[] = [
  "url",
  "text",
  "video",
  "image",
  "document",
];
export const inputTypeAtom = atom<InputTypes>("url");
export interface UserInputProps<Type> {
  value: Type;
  setValue: React.Dispatch<React.SetStateAction<Type>>;
}

export type FeedState = "basic" | "detailed" | "simple";
export const FeedStateAtom = atom<FeedState>("basic");

export type ResponseState = {
  loading: boolean;
  recieved: boolean;
  content: string;
};

export type displayState = string[];

export const responseStateAtom = atom<ResponseState>({
  loading: false,
  recieved: false,
  content: "",
});

export const displayAtom = atom<displayState>([]);

export const usernameAtom = atom<string>("");
