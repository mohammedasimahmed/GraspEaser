"use client";
import { responseStateAtom } from '@/atoms/user-input';
import { useAtomValue } from 'jotai';
import React from 'react'
import LoadingText from './loading-text';

const ResponseViewer = () => {

  const responseState = useAtomValue(responseStateAtom);
  const { loading, recieved, content } = responseState;

  if(loading) {
    return <><LoadingText/></>
  }

  if(recieved) {
    return <div className='px-8 text-slate-800'>{content}</div>
  }
  
  return (
    <div className='text-lg font-medium text-gray-400 max-w-md w-max lg:mb-20 text-center'>Ask me to simplify something !</div>
  )
}

export default ResponseViewer;