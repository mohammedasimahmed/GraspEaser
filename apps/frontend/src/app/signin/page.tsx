"use client"
import Button from '@/components/ui/button';
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  const router = useRouter()

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center justify-center px-6 py-8 w-full sm:w-[600px] ">
        <div className="w-full rounded-lg shadow-xl">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-2 text-center">
              Sign in to your account
            </h1>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className='mb-2'>
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Your Username</label>
                <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3" placeholder="Enter Your Username" />
              </div>
              <div className='mb-2'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3" placeholder="Enter Your Email" />
              </div>
              <div className='mb-2'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3" />
              </div>
              <div className='w-full p-2 flex justify-center items-center'>
                <Button>Sign in</Button>
              </div>
              <div className='flex justify-center items-center'>
                <div className="text-sm font-light text-center flex">
                  Dont have an account yet? <p onClick={() => router.push("/signup")} className="cursor-pointer underline ml-1"> Sign up</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
