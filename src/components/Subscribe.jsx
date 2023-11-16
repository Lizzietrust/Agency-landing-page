import React from 'react';
import image from '../assets/Saly-6.png';
import sub from '../assets/Subscribe us.png';

const Subscribe = () => {
  return (
    <div className='w-full h-[453px] bg-[#FF475780] px-[7%] flex items-center relative'>
        <div className='w-1/2 max-[768px]:w-full'>
            <h2 className='text-[37px] leading-[56px] text-[#4F4F4F] font-bold mb-6 max-[768px]:mb-10 max-[768px]:text-center'>
                Grow your business with better Shipping organizations
            </h2>

            <form className='flex items-center gap-5'>
                <input type="text" name="" id="" placeholder='Write your mail address'
                    className='w-[282px] h-[42px] bg-white rounded-[11px] outline-none p-4 text-[14px] placeholder-[#737B7D]'
                />

                <button className='w-[104px] h-[42px] rounded-xl bg-[#F73C6B] text-[14px] text-white font-semibold'>
                    Subscribe
                </button>
            </form>
        </div>

        <img src={sub} alt="" className='absolute -top-6 right-[35%] z-50 max-[768px]:hidden' />
        <img src={image} alt="" className='-translate-y-12 max-[768px]:hidden' />
    </div>
  )
}

export default Subscribe
