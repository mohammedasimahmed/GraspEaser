"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import env from "@/config/env";

const SignInForm = () => {
    const router = useRouter();
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const response = await fetch(`${env.BACKEND_URL}/api/v1/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: usernameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            })
        });

        const result = await response.json();
        console.log(result)
    }
    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="mb-2">
                    <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your Username
                    </label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
                        placeholder="Enter Your Username"
                        ref={usernameRef}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
                        placeholder="Enter Your Email"
                        ref={emailRef}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
                        ref={passwordRef}
                    />
                </div>
                <div className="w-full p-2 flex justify-center items-center">
                    <Button type="submit">Sign in</Button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-sm font-light text-center flex">
                        Dont have an account yet?{" "}
                        <p
                            onClick={() => router.push("/signup")}
                            className="cursor-pointer underline ml-1"
                        >
                            {" "}
                            Sign up
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignInForm;
