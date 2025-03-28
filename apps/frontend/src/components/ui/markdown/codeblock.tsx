"use client";
import React, { useRef, useState } from "react";

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const codeBlockRef = useRef<HTMLPreElement>(null);

  return (
    <div className="code-block">
      <CopyButton codeRef={codeBlockRef} />
      <pre className="" ref={codeBlockRef}>
        {children}
      </pre>
    </div>
  );
};

interface CopyButtonProps {
  codeRef: React.RefObject<HTMLPreElement | null>;
}

const CopyButton: React.FC<CopyButtonProps> = ({ codeRef }) => {
  const [copied, setCopied] = useState(false);

  const getTextContent = () => ( codeRef.current?.textContent ? codeRef.current?.textContent : "");

  const copyTextToClipboard = async (textContent: string) => {
    console.log("The text content is", textContent);
    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.log(err);
      console.log("could not copy");
    }
  };

  const displayTitle = copied ? "Copied !" : "Copy";

  return (
    <button
      className="mb-4 hover:bg-slate-900 bg-slate-700 text-slate-200 font-bold border border-white rounded-xl px-2 py-1"
      onClick={() => copyTextToClipboard(getTextContent())}
    >
      {displayTitle}
    </button>
  );
};

export default CodeBlock;
/**
 *
 */
