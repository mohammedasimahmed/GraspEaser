"use client";
import React from "react";
import ResponseViewer from "./response-viewer";
// import TextToSpeech from '@/lib/text-to-speech'
import { useAtom } from "jotai";
import { displayAtom, inputTypeAtom } from "@/atoms/user-input";
import ChatForm from "../forms/chat-form";

const ResponseContainer = () => {
  const [inputType] = useAtom(inputTypeAtom);
  const [display] = useAtom(displayAtom);
  return (
    <>
      <div className="response_container border-t-[2px] w-full h-full flex flex-col lg:border-t-0 mt-6 lg:mt-0 lg:border-l-[2px] lg:ml-6 p-4 lg:p-6">
        hi
        <h1 className="text-center mx-auto text-2xl font-bold">GraspEaser</h1>
        <div className="rounded-xl flex overflow-y-scroll justify-center bg-white min-h-[10rem] min-w-[15rem] border h-full mt-10 px-2 py-4">
          <ResponseViewer />
        </div>
        {display.length > 0 &&
          inputType !== "image" &&
          inputType !== "video" && <ChatForm />}
      </div>
    </>
  );
};

export default ResponseContainer;
