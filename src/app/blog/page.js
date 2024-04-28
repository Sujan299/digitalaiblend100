import React from 'react'
import Image from 'next/image'
import Img from '../.../../../../public/Img2.png'

const Posts = () => {
    return (
        <div className='cards flex flex-wrap'>
            {
                cardDetails.map((e, index) => {
                    return (
                        <div className="card my-5" key={index}>
                            <Image src={e.img} className='sm:h-80 w-auto h-auto rounded-md' />
                            <h1 className='sm:text-3xl text-xl font-semibold'>{e.Title}</h1>
                            <div className='flex mt-4 justify-between'>
                                <div className=''>
                                    <h3>Author: Sujan Chaudhary</h3>
                                    <h3>Date: 2023/2/20</h3>
                                </div>
                                <button type='' className=' px-7 bg-blue-400 py-3 rounded-sm'>Explore</button>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Posts

const cardDetails = [{
    Title: 'How to create an website',
    Desc: 'Description',
    img: Img
},
{
    Title: 'How to create an website',
    Desc: 'Description',
    img: Img
}, {
    Title: 'How to create an website',
    Desc: 'Description',
    img: Img
}, {
    Title: 'How to create an website',
    Desc: 'Description',
    img: Img
},

]