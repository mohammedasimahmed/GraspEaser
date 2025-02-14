export type DetailTypes = "detailed" | "simple" | "basic";
export type InputTypes = "text" | "url" | "video" | "image" | "document";

export interface UserInputDataOptions {
  word_limit: number;
  input_type: InputTypes;
  detail_type: DetailTypes;
}

export interface UserInputBaseData {
  options: UserInputDataOptions;
}

export interface UserTextInputData extends UserInputBaseData {
  text: string;
}

export interface UserURLInputData extends UserInputBaseData {
  url: string;
}
