"use client";
import React, { useRef } from "react";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import env from "@/config/env";

const SignUpForm = () => {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await fetch(`${env.BACKEND_URL}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Something went wrong during signup",
        );
      }

      const result = await response.json();
      console.log(result);
      console.log(result.message);
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
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
