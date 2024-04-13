'use client';

import Link from 'next/link';
import { NavLinks } from '@/components/common';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

    
export function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname(); 
    const home = pathname == '/' ? true : false

    return (
        <>
        <nav>
            {/*Default navbar */}
            <div className = {`${home ? 'hidden' : 'hidden md:flex'}  w-screen bg-sf_white h-20  items-center justify-center shadow absolute z-50`}>
                <div className = 'max-w-7xl w-4/5 h-20 flex justify-between' >
                    <Link href='/' className = 'self-center' >
                        <h3 className = 'text-sf_green'>Sufletul Familiei</h3>
                    </Link>
                    <div className = 'text-sf_green flex space-x-10 self-center font-medium '>
                        <NavLinks/>
                    </div>
                    
                </div>
            </div>
            {/*Homepage navbar */}
            <div className = {`${home ? 'hidden md:flex' : 'hidden'} w-screen h-20 items-center justify-center font-medium absolute z-50`}>
                <div className = 'max-w-7xl w-4/5 h-20 flex justify-end' >
                    <div className = 'text-sf_white flex space-x-10 self-center '>
                        <NavLinks/>
                    </div>
                    
                </div>
            </div>
            {/*Mobile navbar */}
            <div className = {` fixed flex md:hidden w-screen bg-sf_white h-16  items-center justify-center shadow z-50`}>
                <div className = 'max-w-7xl w-5/6 h-20 flex justify-between' >
                    <Link href='/' className = 'self-center z-30' onClick= {() => setIsOpen(false)}>
                        <h3 className = 'text-sf_green text-[20px]'>Sufletul Familiei</h3>
                    </Link>
                    <div className = 'text-sf_green flex space-x-10 self-center '>
                        <div className="relative flex items-center justify-center">
                            <button
                                className="block lg:hidden text-sf_green focus:outline-none z-40"
                                onClick={toggleMenu}
                            >
                                <svg
                                className="h-6 w-6 transition-transform duration-300 transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >

                                {isOpen ? (
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                            <div className="absolute h-screen w-screen inset-0 bg-sf_white z-30 flex items-center justify-center">
                            {/* Your menu items go here*/ }
                                <div className='flex items-center justify-center text-center '>
                                    <div className = 'text-sf_green text-5xl leading-loose'>
                                        <NavLinks
                                            onLinkClick = {() => setIsOpen(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </nav>
        </>
    )
    
}