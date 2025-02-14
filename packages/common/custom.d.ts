import {
  UserInputBaseData,
  UserTextInputData,
  UserURLInputData,
} from "./request";

declare namespace Express {
  export interface Request {
    user?: string;
  }
}

export interface URLRequest extends Express.Request {
  body: UserURLInputData;
}

export interface TextRequest extends Express.Request {
  body: UserTextInputData;
}
