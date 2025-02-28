"use client"
import { usernameAtom } from '@/atoms/user-input';
import { getAccessToken } from '@/lib/getAccessToken';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'

const LoginOnStart = () => {
    const [, setUsername] = useAtom(usernameAtom);
    const dispatchSetUsername: React.Dispatch<React.SetStateAction<string>> = (value) => {
        setUsername(value);
    };
    useEffect(() => {
        getAccessToken({ setUsername: dispatchSetUsername })
    }, [dispatchSetUsername])

    return <></>
}

export default LoginOnStart
