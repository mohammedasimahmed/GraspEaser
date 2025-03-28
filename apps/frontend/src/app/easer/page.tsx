import ResponseTypeHandler from "@/components/sections/input-handler";
import InputTypeSelector from "@/components/ui/input-type-selector";
import ResponseContainer from "@/components/ui/response-container";
import WordCountSelector from "@/components/ui/word-limit-selector";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex p-6 pt-16 lg:px-10 lg:pb-10">
      <div className="w-full h-full rounded-3xl p-4 lg:p-8 flex flex-col items-center lg:items-start overflow-scroll lg:flex-row py-6 gap-2 bg-slate-50 shadow-lg mx-auto max-w-7xl">
        <div className="input_container max-w-[32rem] min-w-[16rem] w-full lg:min-w-[30rem]">
          <ResponseTypeHandler />
          <WordCountSelector />
          <InputTypeSelector />
        </div>
        <ResponseContainer />
      </div>
    </div>
  );
};

export default page;
