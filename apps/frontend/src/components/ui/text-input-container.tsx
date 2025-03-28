import { UserInputProps } from "@/atoms/user-input";
import React from "react";

const TextInputContainer: React.FC<UserInputProps<string>> = ({
  value,
  setValue,
}) => {
  return (
    <div className="mx-auto w-full flex-col flex items-center justify-center">
      <textarea
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(event.target.value)
        }
        placeholder="Enter text to simplify"
        className="w-full outline-none rounded-md px-3 py-1 min-h-[16rem]"
      ></textarea>
    </div>
  );
};

export default TextInputContainer;
