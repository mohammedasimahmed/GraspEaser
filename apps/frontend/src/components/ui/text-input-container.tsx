import React from 'react'

const TextInputContainer = () => {
    return <div className='mx-auto w-full flex-col flex items-center justify-center'>
        <textarea placeholder='Enter text to simplify' className='w-full outline-none rounded-md px-3 py-1 min-h-[16rem]'></textarea>
    </div>
}

export default TextInputContainer;