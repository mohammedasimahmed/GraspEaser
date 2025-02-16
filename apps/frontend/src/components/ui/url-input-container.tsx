import { UserInputProps } from '@/atoms/user-input';
import React from 'react'

const UrlInputContainer:React.FC<UserInputProps<string>> = ({value, setValue}) => {
    return <div className='mx-auto w-full flex-col flex items-center justify-center'>
        <input value={value} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)} type='url' placeholder='Enter url of the webpage to simplify' className='w-full outline-none rounded-md px-3 py-1'></input>
    </div>
}

export default UrlInputContainer;