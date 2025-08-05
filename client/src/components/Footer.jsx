import React from 'react'
import { assets } from '../assets/assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44  '>
      <img width={150} className='w-5 h-15 bg-slate-200 rounded-3xl ' src={assets.logo} alt="" />
      <p className='flex-1 boarder-1 border-gray-400 pl-4 text-sm text-white max-sm:hidden' >Copyright @namratajais-dot | All right reserved </p>
      <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
