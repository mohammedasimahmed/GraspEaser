"use client";
import { inputTypeAtom, InputTypes } from '@/atoms/user-input';
import { useAtom } from 'jotai';
import React from 'react'
import Button from './button';

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
      </div>
      <div className='bg-slate-100 py-8 px-6 w-full rounded-xl'>
        <InputContainer type={inputType}/>
      </div>
    </div>
  )
}

export default InputTypeSelector;

const UrlInputContainer = () => {
  return <div className='mx-auto w-full flex-col flex items-center justify-center'>
    <input type='url' placeholder='Enter url of the webpage to simplify' className='w-full outline-none rounded-md px-3 py-1'></input>
  </div>
}

const TextInputContainer = () => {
  return <div className='mx-auto w-full flex-col flex items-center justify-center'>
          <textarea placeholder='Enter text to simplify' className='w-full outline-none rounded-md px-3 py-1 min-h-[16rem]'></textarea>
        </div>
}

const InputContainerMap: Record<InputTypes, React.JSX.Element> = {
  'url': <UrlInputContainer/>,
  'text': <TextInputContainer/>,
};

const InputContainer = ({ type } : { type: InputTypes }) => {
  return(
    <div className='flex flex-col'>
      {InputContainerMap[type]}
      <span className='mt-6 mx-auto'>
        <Button variant='submit'>Simplify !</Button>
      </span>
    </div>
  )
}