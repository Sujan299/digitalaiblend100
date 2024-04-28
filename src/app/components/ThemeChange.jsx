'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const ThemeChange = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='' onClick={() => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }} >
      {theme === 'light' ? <div className='bg-slate-300 p-2 rounded-md'><FaMoon /></div> : <div className='bg-slate-800 p-2 rounded-md'><IoIosSunny/></div>}
    </div>
  )
}

export default ThemeChange;