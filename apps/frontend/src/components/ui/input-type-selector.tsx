"use client";
import { inputTypeAtom, InputTypes } from '@/atoms/user-input';
import { useAtom } from 'jotai';
import React, { useState } from 'react'
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

const FileInputContainer = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setFile(event.dataTransfer.files[0]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="input-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          {file && <p className="text-sm text-gray-600 mt-2">File: {file.name}</p>}
        </div>
        <input
          id="input-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  )
}

const InputContainerMap: Record<InputTypes, React.JSX.Element> = {
  'url': <UrlInputContainer />,
  'text': <TextInputContainer />,
  'file': <FileInputContainer />
};

const InputContainer = ({ type }: { type: InputTypes }) => {
  return (
    <div className='flex flex-col'>
      {InputContainerMap[type]}
      <span className='mt-6 mx-auto'>
        <Button variant='submit'>Simplify !</Button>
      </span>
    </div>
  )
}