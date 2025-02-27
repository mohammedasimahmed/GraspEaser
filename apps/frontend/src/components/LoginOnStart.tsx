"use client"
import { usernameAtom } from '@/atoms/user-input';
import env from '@/config/env';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'

const LoginOnStart = () => {
    const [, setUsername] = useAtom(usernameAtom);
    async function getAccessToken() {
        try {
            const response = await fetch(`${env.BACKEND_URL}/api/v1/auth/refresh`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (response.ok) {
                const result = await response.json();
                const { username, accessToken } = result;
                sessionStorage.setItem("accessToken", accessToken);
                setUsername(username);
                return;
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getAccessToken()
    }, [])

    return <></>
}

export default LoginOnStart
