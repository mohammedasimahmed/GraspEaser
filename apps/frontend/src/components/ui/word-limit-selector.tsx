"use client";

import { possibleWordCounts, wordCountAtom } from "@/atoms/user-input";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

const WordCountSelector = () => {
  const [wordCountIndex, setWordCountIndex] = useAtom(wordCountAtom);
  const wordCount = possibleWordCounts[wordCountIndex];

  return (
    <div className="mx-auto my-6 w-max flex items-center">
      <span className="mr-4">Word Count</span>
      <span className="flex w-max gap-1 items-center rounded-md border-[1.5px] bg-slate-50">
        <span
          onClick={() => setWordCountIndex((wordCountIndex + 5) % 6)}
          className="w-8 py-2 h-full border-r-[1.5px] hover:bg-violet-100"
        >
          <Image
            className="w-4 mx-auto"
            src={"/arrow-left.svg"}
            width={100}
            height={100}
            alt="<"
          />
        </span>
        <span className="cursor-pointer w-10 text-center rounded-lg text-black">
          {wordCount}
        </span>
        <span
          onClick={() => setWordCountIndex((wordCountIndex + 1) % 6)}
          className="w-8 border-l-[1.5px] h-full py-2 hover:bg-violet-100"
        >
          <Image
            className="w-4 mx-auto"
            src={"/arrow-right.svg"}
            width={100}
            height={100}
            alt=">"
          />
        </span>
      </span>
    </div>
  );
};

export default WordCountSelector;
