import React from 'react'
import { assets } from '../assets/assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-30 ' >
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-white' >Steps to remove background  <br/> images in seconds </h1>
      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-between'>
         
         <div className=' flex items-start gap-4 bg-zinc-100 drop-shadow-md p-7 pb-10 rounded-3xl hover:scale-105 transition-all duration-500'>
            <img className='max-w-9 mt-2' src={assets.upload_icon} alt="" />
            <div>
                <p className='text-xl font-medium' >Upload image</p>
                <p className='text-sm text-neutral-500' >Lorem ipsum dolor, sit amet consectetur </p>
            </div>
         </div>

         <div className=' flex items-start gap-4 bg-zinc-100 border drop-shadow-md p-7 pb-10 rounded-3xl hover:scale-105 transition-all duration-500'>
            <img className='max-w-9 mt-2' src={assets.remove_bg_icon} alt="" />
            <div>
                <p className='text-xl font-medium' >Remove background </p>
                <p className='text-sm text-neutral-500' >Lorem ipsum dolor, sit amet consectetur </p>
            </div>
         </div>

         <div className=' flex items-start gap-4 bg-zinc-100 border drop-shadow-md p-7 pb-10 rounded-3xl hover:scale-105 transition-all duration-500'>
            <img className='max-w-9 mt-2' src={assets.download_icon} alt="" />
            <div>
                <p className='text-xl font-medium' >Download image</p>
                <p className='text-sm text-neutral-500' >Lorem ipsum dolor, sit amet consectetur </p>
            </div>
         </div>

      </div>
    </div>
  )
}

export default Steps
