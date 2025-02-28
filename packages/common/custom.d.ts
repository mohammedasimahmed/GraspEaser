import {
  UserChat,
  UserFormInput,
  UserInputBaseData,
  UserTextInputData,
  UserURLInputData,
} from "./request";

declare namespace Express {
  export interface Request {
    user?: UserFormInput;
  }
}

export interface URLRequest extends Express.Request {
  body: UserURLInputData;
}

export interface TextRequest extends Express.Request {
  body: UserTextInputData;
}

export interface UserFormRequest extends Express.Request {
  body: UserFormInput
}

export interface ChatRequest extends Express.Request {
  body: UserChat
}

export interface AuthenticateRequest extends Express.Request {
  headers?: { authorization?: string }
}