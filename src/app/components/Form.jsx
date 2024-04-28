import React from 'react'

const Form = () => {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <h2 className='text-5xl font-bold mb-4'>Contact Sujan-</h2>
                <form action="#" method='post' className='flex flex-col sm:w-2/3 w-full gap-4'>
                    <input type="text" placeholder='Name' name='name' autoComplete='off' required className='border border-slate-700 px-2 py-2 rounded-sm' />
                    <input type="email" placeholder='Email' name='email' autoComplete='off' required className='border border-slate-700 px-2 py-2 rounded-sm' />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='message' className='border border-slate-700 px-2 py-2 rounded-sm'></textarea>
                    <button type='submit' className='bg-blue-400 p-2 rounded-sm'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Form