"use client";
import { displayAtom, inputTypeAtom, InputTypes, InputTypesArray } from '@/atoms/user-input';
import { useAtom } from 'jotai';
import React from 'react'
import InputContainer from './user-input-container';

const InputTypeSelector = () => {
  const [inputType, setInputType] = useAtom(inputTypeAtom);
  const [, setDisplay] = useAtom(displayAtom);
  
  function changeInputType(value: InputTypes) {
    setInputType(value)
    setDisplay([]);
  }

  return (
    <div className='flex-col flex items-center justify-center w-full'>
      <div className='mx-auto flex flex-wrap gap-4 font-medium justify-center items-center'>
        {
          InputTypesArray.map((value: InputTypes, index: number) => {
            const input_type: string = value === "url" ? value.toUpperCase() : value[0].toUpperCase() + value.slice(1);
            return (
              <div key={index}>
                {inputType === value ?
                  <span className='rounded-t-md px-2 py-1 bg-slate-100  text-black cursor-pointer'>{input_type}</span> :
                  <span className=' border-gray-400 px-2 py-1 text-gray-400 cursor-pointer' onClick={() => changeInputType(value)}>{input_type}</span>
                }
              </div>
            )
          })
        }
      </div>
      <div className='bg-slate-100 py-8 px-6 w-full rounded-xl'>
        <InputContainer type={inputType} />
      </div>
    </div>
  )
}

export default InputTypeSelector;

