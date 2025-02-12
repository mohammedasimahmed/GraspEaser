"use client";
import React from "react";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
    const router = useRouter();
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
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
                    />
                </div>
                <div className="w-full p-2 flex justify-center items-center">
                    <Button type="submit">Sign up</Button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-sm font-light text-center flex">
                        Already have an account?{" "}
                        <p
                            onClick={() => router.push("/signin")}
                            className="cursor-pointer underline ml-1"
                        >
                            Sign in
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUpForm;
