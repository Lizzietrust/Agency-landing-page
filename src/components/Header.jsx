import React, { useState } from 'react'
import logo from '../assets/eGENCY.png'
import image from '../assets/Saly-3.png'
import hamburger from '../assets/hamburger.jpg'
import close from '../assets/close.png'

const Header = () => {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu)
    };

    const hideMenu = () => {
        setMenu(!menu)
    };

  return (
    <div className='w-full bg-[#FFA50280] px-[7%] pt-10 max-[768px]:pb-12'>
        <div className="flex items-center justify-between">
            <img src={logo} alt="logo" />

            <ul className='flex items-end gap-8 text-[14px] text-[#373F41] font-semibold max-[768px]:hidden'>
                <li><a href="#" className='text-[#3C64B1]'>About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>

            <div className='flex items-center gap-6 max-[768px]:hidden'>
                <button className='text-[14px] text-[#3C64B1] font-semibold'>Sign In</button>
                <button className='w-[91px] h-[42px] rounded-md bg-[#F73C6B] text-[14px] font-semibold text-white'>Sign Up</button>
            </div>

            {   !menu &&
                <img src={hamburger} alt="" className='w-10 h-10 hidden max-[768px]:block'
                    onClick={showMenu} 
                />
            }

            {   menu &&
                <img src={close} alt="" className='w-10 h-10 hidden max-[768px]:block object-cover'
                    onClick={hideMenu}
                />
            }
        </div>

        {   menu &&
            <div className='hidden max-[768px]:block fixed h-screen mobile-bg  w-full -mx-[7%]'>
                <div className='bg-[#FFF] h-full px-[7%] py-12'>
                    <ul className='flex items-center flex-col gap-10 text-2xl text-[#373F41] font-semibold mb-20'>
                        <li><a href="#" className='text-[#3C64B1]'>About</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>

                    <div className='flex flex-col items-center gap-6 '>
                        <button className='text-2xl text-[#3C64B1] font-semibold mb-8'>Sign In</button>
                        <button className='w-full h-16 rounded-md bg-[#F73C6B] text-2xl font-semibold text-white'>Sign Up</button>
                    </div>
                </div>
            </div>
        }

        <div className='flex items-center gap-14 mt-12'>
            <img src={image} alt="" className='max-[768px]:hidden' />

            <div className='w-[40%] max-[768px]:w-full'>
                <h1 className='text-[52px] leading-[56px] text-[#373F41] font-bold mb-8 max-[768px]:mb-10'>
                    We scratch, build and play together
                </h1>

                <p className='leading-[22px] text-[#737B7D] mb-10 max-[768px]:mb-12'>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
                </p>

                <button className='w-[111px] max-[768px]:w-full h-[42px] max-[768px]:h-14 max-[768px]:mb-12 border border-[#F73C6B] text-[14px] text-[#F73C6B] font-semibold'>
                    Contact us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
