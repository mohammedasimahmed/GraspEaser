"use client"
import React, { useState } from 'react'
import { displayAtom, FeedStateAtom, inputTypeAtom, InputTypes, possibleWordCounts, responseStateAtom, UserInputProps, usernameAtom, wordCountAtom } from "@/atoms/user-input";
import { useAtom } from 'jotai';
import env from '@/config/env';
import Button from './button';
import TextInputContainer from './text-input-container';
import UrlInputContainer from './url-input-container';
import FileInputContainer from "./file-input-container";
import { getAccessToken } from '@/lib/getAccessToken';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/lib/logoutUser';

const InputContainerMap: Record<
    InputTypes,
    (props: UserInputProps<string> | UserInputProps<File>) => React.JSX.Element
> = {
    url: ({ value, setValue }) => <UrlInputContainer value={value as string} setValue={setValue as React.Dispatch<React.SetStateAction<string>>} />,
    text: ({ value, setValue }) => <TextInputContainer value={value as string} setValue={setValue as React.Dispatch<React.SetStateAction<string>>} />,
    video: ({ value, setValue }) => <FileInputContainer value={value as File} setValue={setValue as React.Dispatch<React.SetStateAction<File>>} />,
    image: ({ value, setValue }) => <FileInputContainer value={value as File} setValue={setValue as React.Dispatch<React.SetStateAction<File>>} />,
    document: ({ value, setValue }) => <FileInputContainer value={value as File} setValue={setValue as React.Dispatch<React.SetStateAction<File>>} />,
};

const classifyMap: Record<InputTypes, string> = {
    "url": "url",
    "text": "text",
    "video": "file",
    "image": "file",
    "document": "file"
}

const UserInputContainer = ({ type }: { type: InputTypes }) => {
    const [url, setUrl] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [video, setVideo] = useState<File>(new File([], ""));
    const [image, setImage] = useState<File>(new File([], ""));
    const [document, setDocument] = useState<File>(new File([], ""));
    const [inputType] = useAtom(inputTypeAtom);
    const [wordCountIndex] = useAtom(wordCountAtom);
    const wordCount = possibleWordCounts[wordCountIndex];
    const [feedState] = useAtom(FeedStateAtom)
    const [, setResponseState] = useAtom(responseStateAtom)
    const [, setUsername] = useAtom(usernameAtom);
    const [, setDisplay] = useAtom(displayAtom);
    const dispatchSetUsername: React.Dispatch<React.SetStateAction<string>> = (value) => {
        setUsername(value);
    };
    const router = useRouter();

    const inputMap: Record<InputTypes, UserInputProps<string> | UserInputProps<File>> = {
        url: { value: url, setValue: setUrl },
        text: { value: text, setValue: setText },
        video: { value: video, setValue: setVideo },
        image: { value: image, setValue: setImage },
        document: { value: document, setValue: setDocument },
    };

    function handleLogoutAndRedirect() {
        logoutUser({ setUsername: dispatchSetUsername });
        setResponseState({
            loading: false,
            recieved: false,
            content: "",
        })
        router.push("/signin");
    }

    async function simplifyContent() {
        setResponseState({
            loading: true,
            recieved: false,
            content: "",
        })

        let requestBody: FormData | string;
        const accessToken = sessionStorage.getItem("accessToken");
        if (!accessToken) {
            handleLogoutAndRedirect();
            return;
        }
        const headers: HeadersInit = {
            authorization: `Bearer ${accessToken}`
        };
        if (classifyMap[type] === "file") {
            const formData = new FormData();
            formData.append("file", inputMap[type].value);
            formData.append("options", JSON.stringify({
                word_limit: wordCount,
                input_type: type,
                detail_type: feedState
            }));

            requestBody = formData;
        } else {
            requestBody = JSON.stringify({
                [type]: inputMap[type].value,
                options: {
                    word_limit: wordCount,
                    input_type: inputType,
                    detail_type: feedState
                }
            });

            headers["Content-Type"] = "application/json";
        }

        const response = await fetch(`${env.BACKEND_URL}/api/v1/${classifyMap[type]}`, {
            method: "POST",
            headers,
            body: requestBody
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData?.invalidToken || errorData?.tokenError) {
                console.log(errorData.message);
                handleLogoutAndRedirect();
                return;
            }
            if (errorData?.tokenExpired) {
                console.log(errorData.message);
                const accessToken = await getAccessToken({ setUsername: dispatchSetUsername });
                if (accessToken) {
                    simplifyContent();
                }
                else {
                    handleLogoutAndRedirect();
                }
            }

            throw new Error(errorData.message || 'Something went wrong');
        }

        console.log(response)

        const result = await response.json();
        console.log(result)
        console.log(result.content_simplified);
        setResponseState({
            loading: false,
            recieved: true,
            content: result.content_simplified,
        })
        setDisplay((prevDisplay) => [...prevDisplay, result.content_simplified]);
    }

    return (
        <div className="flex flex-col">
            {InputContainerMap[type](inputMap[type])}
            <span className="mt-6 mx-auto">
                <Button variant="submit" onClick={simplifyContent}>Simplify!</Button>
            </span>
        </div>
    );
};

export default UserInputContainer;