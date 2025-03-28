"use client";
import React from "react";
import LoadingText from "./loading-text";
import { displayAtom, responseStateAtom } from "@/atoms/user-input";
import { useAtom, useAtomValue } from "jotai";
import Markdown from "markdown-to-jsx";
import CodeBlock from "./markdown/codeblock";

const ResponseViewer = () => {
  const responseState = useAtomValue(responseStateAtom);
  const { loading, recieved } = responseState;
  const [display] = useAtom(displayAtom);
  if (loading) {
    return (
      <>
        <LoadingText />
      </>
    );
  }

  if (recieved) {
    console.log(display);

    return (
      <div>
        {display.map((value, idx) => {
          return (
            <div className="w-full py-3 px-2" key={idx}>
              <div
                className={`w-full font-bold ${idx % 2 === 0 ? "text-left" : "text-right"}`}
              >
                {idx % 2 === 0 ? "AI ASSISTANT" : "HUMAN"}
              </div>
              <div
                className={`w-full px-8 text-slate-800 ${idx % 2 === 0 ? "text-left" : "text-right"}`}
              >
                <MarkdownConverter content={value} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="text-lg font-medium text-gray-400 max-w-md w-max lg:mb-20 text-center">
      Ask me to simplify something !
    </div>
  );
};

const MarkdownConverter = ({ content }: { content: string }) => {
  return (
    <Markdown
      options={{
        wrapper: "div",
        disableParsingRawHTML: true,
        overrides: {
          // For code blocks inside <pre>
          code: {
            props: {
              className: "inline-code",
            },
          },
          pre: {
            component: CodeBlock,
          },
          ol: {
            props: {
              className: "code-element",
            }
          },
          li: {
            props: {
              className: "code-element",
            }
          },
          ul: {
            props: {
              className: "code-element",
            }
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default ResponseViewer;
