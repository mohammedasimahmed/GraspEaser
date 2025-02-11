import { atom } from "jotai";

export const possibleWordCounts = [50, 100, 200, 300, 400, 500];
export const wordCountAtom = atom<number>(1);

export type InputTypes = "url" | "text";
export const inputTypeAtom = atom<InputTypes>("url");

export type ResponseState = {
  loading: boolean;
  recieved: boolean;
  content: string;
};

export const responseStateAtom = atom<ResponseState>({
  loading: true,
  recieved: false,
  content: "",
});
