"use client"
import React from 'react'
import ResponseViewer from './response-viewer'
import TextToSpeech from '@/lib/text-to-speech'
import { useAtomValue } from 'jotai';
import { responseStateAtom } from '@/atoms/user-input';

const ResponseContainer = () => {
    const responseState = useAtomValue(responseStateAtom);
    const { content } = responseState;
    return (
        <>
            <div className='response_container border-t-[2px] w-full h-full flex flex-col lg:border-t-0 mt-6 lg:mt-0 lg:border-l-[2px] lg:ml-6 p-4 lg:p-6'>
                <h1 className='text-center mx-auto text-2xl font-bold'>GraspEaser</h1>
                <div className='rounded-xl flex overflow-scroll justify-center items-center bg-white min-h-[10rem] min-w-[15rem] border h-full mt-10 px-2 py-4'>
                    <ResponseViewer />
                </div>
                {
                    content && <TextToSpeech text={content} />
                }
            </div>
        </>
    )
}

export default ResponseContainer
