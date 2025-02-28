"use client"
import React, { useState } from 'react'
import Button from './button'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { displayAtom, usernameAtom } from '@/atoms/user-input'
import { logoutUser } from '@/lib/logoutUser'

const Navbar = () => {
    const [isNavbarOpen, setisNavbarOpen] = useState(false);
    const [username, setUsername] = useAtom(usernameAtom);
    const [, setDisplay] = useAtom(displayAtom);

    const toggleNavbar = () => {
        setisNavbarOpen(!isNavbarOpen);
    }

    const handleLogout = async () => {
        const dispatchSetUsername: React.Dispatch<React.SetStateAction<string>> = (value) => {
            setUsername(value);
        };
        setDisplay([]);
        await logoutUser({ setUsername: dispatchSetUsername });
    }

    return (
        <>
            <nav className="w-full fixed top-0 z-20 backdrop-blur-2xl px-6 py-3">
                <div className="w-full flex items-center justify-between">
                    <Link href="/">
                        <div className="text-2xl lg:text-3xl font-semibold">
                            GraspEaser
                        </div>
                    </Link>
                    {/* Desktop View */}
                    <div className="hidden md:flex flex-1 gap-6 mx-3 justify-center items-center">
                        <Link href="/" className="mr-2 text-lg">Home</Link>
                        <Link href="/about" className="mr-2 text-lg">About</Link>
                        <Link href="/easer" className="text-lg">Easer</Link>
                    </div>
                    <div className="hidden md:flex">
                        {
                            username ?
                                <>
                                    <div className='mr-2 flex justify-center items-center text-xl'>{username}</div>
                                    <Button variant='secondary' onClick={handleLogout}>Logout</Button>
                                </>
                                :
                                <>
                                    <Link href="/signin" className='mr-2'>
                                        <Button variant='secondary'>
                                            Sign in
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button variant='secondary'>
                                            Sign up
                                        </Button>
                                    </Link>
                                </>
                        }
                    </div>
                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden flex items-center">
                        <Button onClick={toggleNavbar} className="text-3xl">
                            {isNavbarOpen ? <div>x</div> : <div>≡</div>}
                        </Button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isNavbarOpen && (
                    <div className="md:hidden text-black flex flex-col items-center py-3 mt-3">
                        <Link href="/" className="mb-2 text-xl" onClick={toggleNavbar}>Home</Link>
                        <Link href="/about" className="mb-2 text-xl" onClick={toggleNavbar}>About</Link>
                        <Link href="/easer" className="mb-2 text-xl" onClick={toggleNavbar}>Easer</Link>
                        {
                            username ?
                                <>
                                    <div>{username}</div>
                                    <Button variant='secondary' onClick={handleLogout}>Logout</Button>
                                </>
                                :
                                <>
                                    <Link href="/signin" className='mb-2 scale-105' onClick={toggleNavbar}>
                                        <Button>Sign in</Button>
                                    </Link>
                                    <Link href="/signup" onClick={toggleNavbar}>
                                        <Button>Sign up</Button>
                                    </Link>
                                </>
                        }
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
