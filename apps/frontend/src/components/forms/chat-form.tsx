"use client"
import React, { useRef } from 'react'
import Button from '../ui/button'
import env from '@/config/env'
import { logoutUser } from '@/lib/logoutUser'
import { useAtom } from 'jotai'
import { displayAtom, usernameAtom } from '@/atoms/user-input'
import { useRouter } from 'next/navigation'
import { getAccessToken } from '@/lib/getAccessToken'

const ChatForm = () => {
    const chatRef = useRef<HTMLInputElement | null>(null);
    const [, setUsername] = useAtom(usernameAtom);
    const [, setDisplay] = useAtom(displayAtom);
    const router = useRouter();
    const dispatchSetUsername: React.Dispatch<React.SetStateAction<string>> = (value) => {
        setUsername(value);
    };
    async function handleLogoutAndRedirect() {
        setDisplay([])
        await logoutUser({ setUsername: dispatchSetUsername });
        router.push("/signin");
    }
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const prompt = chatRef.current?.value as string;
        setDisplay((prevDisplay) => [...prevDisplay, prompt]);
        if (chatRef.current) {
            chatRef.current.value = "";
        }
        try {
            const accessToken = sessionStorage.getItem("accessToken");
            if (!accessToken) {
                handleLogoutAndRedirect();
                return;
            }
            const headers: HeadersInit = {
                "Content-Type": "application/json",
                "authorization": `Bearer ${accessToken}`
            };
            console.log(prompt)
            const response = await fetch(`${env.BACKEND_URL}/api/v1/chat`, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    prompt: prompt
                }),
                credentials: "include"
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
                        handleSubmit(event);
                    }
                    else {
                        handleLogoutAndRedirect();
                    }
                }

                throw new Error(errorData.message || 'Something went wrong');
            }

            const result = await response.json();
            setDisplay((prevDisplay) => [...prevDisplay, result.ai_response]);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)} className='w-full flex mt-2'>
            <input ref={chatRef} placeholder='Ask queries related to your input' className="bg-gray-50 border border-gray-300 rounded-lg flex-1 p-1 pl-2 mr-1" />
            <Button variant='primary'>submit</Button>
        </form>
    )
}

export default ChatForm;
