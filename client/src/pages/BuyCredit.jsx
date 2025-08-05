import React from 'react';
import { assets , plans } from '../assets/assets/assets';

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-10 mb-6 bg-slate-500'>
      <button className='border text-white border-gray-400 px-10 py-2 rounded-full mb-6' >Our Plans</button>
      <h1 className='text-center  text-3xl text-opacity-80 md:text-3xl lg:text-4xl mt-2 font-bold text-white' >Choose the plan that's right for you</h1>

        <div className='flex flex-wrap  justify-center gap-6 text-left' >
          {plans.map((item,index)=>(
          <div className='text-black bg-white drop-shadow-sm border rounded-lg mt-5 py-5 px-8  hover:scale-105 transition-all-duration-700 ' key={index} >
                <img className='w-40  rounded-full ' src={assets.logo}  alt="" />
               <p className='font-semibold' >{item.id} </p>
               <p className='text-sm'>{item.desc}</p>
               <p className='mt-6'>
                <span className='text-3xl font-medium' >${item.price}</span> {item.credits} credits
                </p>
                <button className='w-full bg-slate-700 text-white mt-8 text-sm rounded-md py-2.5 min-w-52' >Purchase</button>
            </div>
         ))}

        </div>
    </div>
  )
};

export default BuyCredit;
