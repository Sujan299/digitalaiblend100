'use client'
import {Roboto} from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import { MdOutlineMenu } from "react-icons/md";
import { useState } from 'react'
import { ImCross } from "react-icons/im";
import { useTheme } from 'next-themes'
const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
  })
const Navbar = () => {
    const [clickMenu, setClickMenu] = useState(false)
    function handleClick() {
        if (clickMenu === false) {
            setClickMenu(true)
        } else {
            setClickMenu(false)
        }
    }
    const { theme, setTheme } = useTheme();
    return (
        clickMenu ? <nav className='flex flex-col w-full'>
            <div className={`flex justify-between items-center h-14 sm:px-7 px-10 rounded-sm ${theme === 'light' ? 'bg-slate-300' : 'bg-slate-800'}`}>
                <h1><Link href='/'>DAB</Link></h1>
                <MdOutlineMenu className='flex sm:hidden' onClick={handleClick} />
            </div>
            <ul className='gap-4 sm:gap-10 mt-2 flex flex-col flex-wrap justify-between sm:px-7 px-10'>
                <li className='hover:text-blue-400 rounded-sm flex justify-between'><Link href='/blog' onClick={handleClick}>Blog</Link><ImCross onClick={handleClick} /></li>
                <li className='hover:text-blue-400 rounded-sm'><Link href='/blog/something' onClick={handleClick}>Start a Blog</Link></li>
                <li className='hover:text-blue-400 rounded-sm'><Link href='/about' onClick={handleClick}>About</Link></li>
                <li className='hover:text-blue-400 rounded-sm'><Link href='/contact' onClick={handleClick}>Contact</Link></li>
            </ul>
        </nav> : <nav className={`flex justify-between h-14 items-center  sm:px-7 px-10 rounded-sm ${theme === 'light' ? 'bg-slate-300' : 'bg-slate-800'} ${roboto.className}`}>
            <h1><Link href='/'>DAB</Link></h1>
            <ul className='sm:flex gap-10 hidden'>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/blog/something'>Start a Blog</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
            <MdOutlineMenu className='flex sm:hidden' onClick={handleClick} />
        </nav>
    )
}

export default Navbar