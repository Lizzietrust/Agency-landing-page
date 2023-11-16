import React from 'react'
import logo from '../assets/eGENCY.png'
import image from '../assets/Saly-3.png'

const Header = () => {
  return (
    <div className='w-full bg-[#FFA50280] px-[7%] pt-10'>
        <div className="flex items-center justify-between">
            <img src={logo} alt="logo" />

            <ul className='flex items-end gap-8 text-[14px] text-[#373F41] font-semibold'>
                <li><a href="#" className='text-[#3C64B1]'>About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>

            <div className='flex items-center gap-6'>
                <button className='text-[14px] text-[#3C64B1] font-semibold'>Sign In</button>
                <button className='w-[91px] h-[42px] rounded-md bg-[#F73C6B] text-[14px] font-semibold text-white'>Sign Up</button>
            </div>
        </div>

        <div className='flex items-center gap-14 mt-12'>
            <img src={image} alt="" />

            <div className='w-[40%]'>
                <h1 className='text-[52px] leading-[56px] text-[#373F41] font-bold mb-8'>
                    We scratch, build and play together
                </h1>

                <p className='leading-[22px] text-[#737B7D] mb-10'>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
                </p>

                <button className='w-[111px] h-[42px] border border-[#F73C6B] text-[14px] text-[#F73C6B] font-semibold'>
                    Contact us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
