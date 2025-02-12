"use client"
import React, { useState } from 'react'
import Button from './button'
import Link from 'next/link'

const Navbar = () => {
    const [isNavbarOpen, setisNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setisNavbarOpen(!isNavbarOpen);
    }

    return (
        <>
            <nav className="w-screen fixed z-20 backdrop-blur-[3px] px-5 py-3">
                <div className="w-full flex items-center justify-between">
                    <Link href="/">
                        <div className="text-4xl font-semibold">
                            GraspEaser
                        </div>
                    </Link>
                    {/* Desktop View */}
                    <div className="hidden md:flex flex-1 mx-3 justify-center items-center">
                        <Link href="/" className="mr-2 text-xl">Home</Link>
                        <Link href="/team" className="mr-2 text-xl">Team</Link>
                        <Link href="/easer" className="text-xl">Easer</Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link href="/signin" className='mr-2'>
                            <Button>
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button>
                                Sign up
                            </Button>
                        </Link>
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
                        <Link href="/team" className="mb-2 text-xl" onClick={toggleNavbar}>Team</Link>
                        <Link href="/easer" className="mb-2 text-xl" onClick={toggleNavbar}>Easer</Link>
                        <Link href="/signin" className='mb-2 scale-105' onClick={toggleNavbar}>
                            <Button>Sign in</Button>
                        </Link>
                        <Link href="/signup" onClick={toggleNavbar}>
                            <Button>Sign up</Button>
                        </Link>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
