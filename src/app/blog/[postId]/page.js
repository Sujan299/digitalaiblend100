import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from '../../.../../../../public/Img2.png'

// export default function BlogPost({params,}){
//     return(
//         <h1>Hello    {params.postId}</h1>
//     )
// }


export default function BlogPost() {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-7xl font-semibold my-4'>Title of My vlog</h1>
            <div className='flex justify-center items-center gap-1'>
                <Image src={img} className='h-10 w-10 rounded-full bg-slate-400'/>
                <Link href='#'>Sujan Chaudhary</Link>
                <span> | 2023/10/23</span>
            </div>
            <Image src={img} className='w-full my-2'/>
            <p className='my-4 text-2xl'>
                class centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside theclass centers the child elements vertically within the flex container. This will center the text both horizontally and vertically within the flex container. Adjust the content inside the
            </p>

        </div>
    )
}
