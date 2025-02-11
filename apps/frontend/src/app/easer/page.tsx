import ResponseTypeHandler from '@/components/sections/input-handler';
import InputTypeSelector from '@/components/ui/input-type-selector';
import ResponseViewer from '@/components/ui/response-viewer';
import WordCountSelector from '@/components/ui/word-limit-selector';
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen bg-gray-200 flex p-6 lg:p-10'>
      <div className='w-full h-full rounded-3xl p-4 lg:p-8 flex flex-col items-center lg:items-start overflow-scroll lg:flex-row py-6 gap-2 bg-slate-50 shadow-lg mx-auto max-w-7xl'>
        <div className='input_container max-w-[32rem] min-w-[16rem] w-full lg:min-w-[30rem]'>
          <ResponseTypeHandler/>
          <WordCountSelector/>
          <InputTypeSelector/>
        </div>
        <div className='response_container border-t-[2px] w-full h-full flex flex-col lg:border-t-0 mt-6 lg:mt-0 lg:border-l-[2px] lg:ml-6 p-4 lg:p-6'>
          <h1 className='text-center mx-auto text-2xl font-bold'>GraspEaser</h1>
          <div className='rounded-xl flex justify-center items-center bg-white min-h-[10rem] min-w-[15rem] border h-full mt-10 px-2 py-4'>
            <ResponseViewer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;