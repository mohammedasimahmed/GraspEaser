import React from 'react'
import { InputTypes } from "@/atoms/user-input";
import UrlInputContainer from "./url-input-container";
import FileInputContainer from "./file-input-container";
import Button from './button';
import TextInputContainer from './text-input-container';

const InputContainerMap: Record<InputTypes, React.JSX.Element> = {
    'url': <UrlInputContainer />,
    'text': <TextInputContainer />,
    'file': <FileInputContainer />
};

const UserInputContainer = ({ type }: { type: InputTypes }) => {
    return (
        <div className='flex flex-col'>
            {InputContainerMap[type]}
            <span className='mt-6 mx-auto'>
                <Button variant='submit'>Simplify !</Button>
            </span>
        </div>
    )
}
export default UserInputContainer;