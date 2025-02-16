"use client";
import { inputTypeAtom } from '@/atoms/user-input';
import { useAtom } from 'jotai';
import React from 'react'
import InputContainer from './user-input-container';

const InputTypeSelector = () => {

  const [inputType, setInputType] = useAtom(inputTypeAtom);

  return (
    <div className='flex-col flex items-center justify-center w-full'>
      <div className='mx-auto flex gap-4 font-medium justify-center items-center'>
        {inputType === 'url' ?
          <span className='rounded-t-md px-2 py-1 bg-slate-100  text-black cursor-pointer'>URL</span> :
          <span className=' border-gray-400 px-2 py-1 text-gray-400 cursor-pointer' onClick={() => setInputType('url')}>URL</span>
        }
        {inputType === 'text' ?
          <span className='rounded-t-md px-2 py-1 bg-slate-100  text-black cursor-pointer'>Text</span> :
          <span className=' text-gray-400 px-2 py-1 border-gray-400 cursor-pointer' onClick={() => setInputType('text')}>Text</span>
        }
        {inputType === 'file' ?
          <span className='rounded-t-md px-2 py-1 bg-slate-100  text-black cursor-pointer'>File</span> :
          <span className=' text-gray-400 px-2 py-1 border-gray-400 cursor-pointer' onClick={() => setInputType('file')}>File</span>
        }
      </div>
      <div className='bg-slate-100 py-8 px-6 w-full rounded-xl'>
        <InputContainer type={inputType} />
      </div>
    </div>
  )
}

export default InputTypeSelector;

