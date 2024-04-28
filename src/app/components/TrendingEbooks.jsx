import React from 'react'
import Image from 'next/image'
import Img from '../../../public/quote.png'
const TrendingEbooks = () => {
    return (
        <div className='flex flex-col justify-center items-center flex-wrap'>
            <h2 className='text-2xl font-semibold'>Most Trending Ebooks</h2>
            <div className='cards flex flex-wrap justify-center sm:justify-between items-center gap-6'>
                {
                    cardDetails.map((e, index) => {
                        return (
                            <div className="card mt-8 mb-5 flex flex-col justify-center items-center flex-wrap" key={index}>
                                <Image src={e.img} className='h-80 w-auto rounded-md' />
                                <h1 className='text-2xl font-semibold'>{e.Title}</h1>
                                <div className='mt-2'>
                                    <button type='' className=' px-7 bg-blue-400 py-3 rounded-sm'>Purchase</button>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default TrendingEbooks
const cardDetails = [{
    Title: 'Atomic Habits',
    Desc: 'Description',
    img: Img
},
{
    Title: 'Atomic Habits',
    Desc: 'Description',
    img: Img
}, {
    Title: 'Atomic Habits',
    Desc: 'Description',
    img: Img
}, {
    Title: 'Atomic Habits',
    Desc: 'Description',
    img: Img
},

]