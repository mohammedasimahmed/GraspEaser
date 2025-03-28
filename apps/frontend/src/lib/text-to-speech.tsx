"use client";
import Button from "@/components/ui/button";
import React, { useState, useEffect } from "react";

type TextToSpeechProps = {
  text: string;
};

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null,
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);

    setUtterance(utter);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    if (!utterance) {
      return;
    }
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);
    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto shadow-lg p-3 mt-2 rounded-xl">
      <div className="w-full text-center font-semibold text-lg">
        Text to Speech
      </div>
      <div className="flex justify-center w-full mt-2">
        <div className="mr-2">
          <Button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</Button>
        </div>
        <div className="mr-2">
          <Button onClick={handlePause}>Pause</Button>
        </div>
        <div>
          <Button onClick={handleStop}>Stop</Button>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
