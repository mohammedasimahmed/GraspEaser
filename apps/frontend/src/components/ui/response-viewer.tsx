"use client";
import { responseStateAtom } from '@/atoms/user-input';
import { useAtom } from 'jotai';
import React from 'react'
import LoadingText from './loading-text';

const ResponseViewer = () => {

  const [responseState, setResponseState] = useAtom(responseStateAtom);
  const { loading, recieved, content } = responseState;

  if(loading) {
    return <><LoadingText/></>
  }

  if(recieved) {
    return <>{content}</>
  }
  
  return (
    <div className='text-lg font-medium text-gray-400 max-w-md w-max lg:mb-20 text-center'>Ask me to simplify something !</div>
  )
}

export default ResponseViewer