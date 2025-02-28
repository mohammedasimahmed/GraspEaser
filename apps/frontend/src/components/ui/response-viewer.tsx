"use client"
import React from 'react'
import LoadingText from './loading-text';
import { displayAtom, responseStateAtom } from '@/atoms/user-input';
import { useAtom, useAtomValue } from 'jotai';

const ResponseViewer = () => {
  const responseState = useAtomValue(responseStateAtom);
  const { loading, recieved } = responseState;
  const [display] = useAtom(displayAtom);
  if (loading) {
    return <><LoadingText /></>
  }

  if (recieved) {
    return (
      <div>
        {
          display.map((value, idx) => {
            return (
              <div className="w-full" key={idx}>
                <div className={`w-full ${idx % 2 === 0 ? "text-left" : "text-right"}`}>{idx % 2 === 0 ? "AI ASSISTANT" : "HUMAN"}</div>
                <div className={`w-full px-8 text-slate-800 ${idx % 2 === 0 ? "text-left" : "text-right"}`}>{value}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className='text-lg font-medium text-gray-400 max-w-md w-max lg:mb-20 text-center'>Ask me to simplify something !</div>
  )
}

export default ResponseViewer;