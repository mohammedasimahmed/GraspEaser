import SignUpForm from '@/components/forms/sign-up-form'
import React from 'react'

const page = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center justify-center px-6 py-8 w-full sm:w-[600px] ">
                <div className="w-full rounded-lg shadow-xl">
                    <div className="p-8">
                        <h1 className="text-2xl font-bold mb-2 text-center">
                            Sign up for your account
                        </h1>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
