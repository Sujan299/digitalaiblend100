'use client'
import React from 'react'
import Image from 'next/image'
import Img1 from '../../../public/vercel.svg'
import { CiSearch, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import Link from 'next/link'
import { useTheme } from 'next-themes'
const Footer = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={` sm:px-7 px-10 rounded-sm ${theme === 'light' ? 'bg-slate-300' : 'bg-slate-800'}`}>
            <div className='flex flex-wrap py-6'>
                <div className='sm:w-1/2 w-auto flex flex-col items-center justify-center'>
                    <Image src={Img1} className='h-32 w-32 bg-white rounded-full' />
                    <p className='text-center my-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nobis eius adipisci recusandae aliquam, quia quod sed cumque quisquam est amet molestias perferendis quo vel asperiores laborum at iste quae!</p>
                    <div>
                        <div className='my-2 flex text-2xl gap-6'>
                            <Link href=''><CiFacebook /></Link>
                            <Link href=''><CiInstagram /></Link>
                            <Link href=''><CiTwitter /></Link>
                        </div>

                        <div className='text-xl w-auto h-auto flex'><span><input type='search' className='rounded-sm w-full'></input></span><span><button className='px-5'>
                            <CiSearch />
                        </button></span></div>
                    </div>
                </div>
                <div className='sm:w-1/2 w-auto flex flex-col items-center justify-center mx-auto'>
                    <h1 className='text-2xl my-2'>Top posts</h1>
                    <div>This is content</div>
                    <div>This is content</div>
                    <div>This is content</div>
                    <div>This is content</div>
                </div>
            </div><hr className='mt-5' />
            <div className='flex flex-wrap justify-center pb-4'>

                <span><Link href=''>Privacy & Policy |</Link></span>
                <span><Link href=''> Privacy & Policy |</Link></span>
                <span><Link href=''> Privacy & Policy |</Link></span>
                <span><Link href=''> Privacy & Policy</Link></span>
            </div>
        </div>
    )
}

export default Footer