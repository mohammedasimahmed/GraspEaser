"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const loadingSentences = [
  "Thinking ...",
  "Simplifying ...",
  "Trying to understand ",
];

const delay = 2000;

const LoadingText = () => {
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSentenceIndex((index) => (index + 1) % loadingSentences.length);
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="text-xl font-medium text-gray-500 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={sentenceIndex}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          {loadingSentences[sentenceIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LoadingText;
