import React from 'react';
import arrow from '../assets/bue-arrow.png';
import { boxes } from '../constant';

const Design = () => {
  return (
    <div className='px-[7%] pt-12 pb-16'>
        <div className='flex justify-between'>
            <h1 className='text-[52px] leading-[57px] text-[#23242A] font-bold'>
                The best design for your <br />studio website
            </h1>

            <a href="#" className='flex gap-4 mt-4 text-[21px] text-[#E5E5E5] underline cursor-pointer'>
                Experienced team
                <img src={arrow} alt="" className='w-[30px] h-[30px] ' />
            </a>
        </div>

        <div className="flex mt-12 gap-8">
            {
                boxes.map((item) => (
                    <div key={item.id} className='w-[33.33%] h-[398px] box-shadow rounded-xl'>
                        <div className='p-8 h-[328px]'>
                            <h2 className='text-[44px] text-[#23242A] font-bold mb-4'>{item.text}</h2>
                            <p className='leading-[21px] text-[#23242A] font-semibold'>{item.paragraph}</p>
                        </div>

                        <div className='h-[69px] rounded-bl-xl rounded-br-xl pl-8 flex items-center text-[21px] font-semibold' style={{background: item.color}}>
                            {item.desc}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Design
