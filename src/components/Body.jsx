import React from 'react'
import image1 from '../assets/1 1.png'
import image2 from '../assets/doodle-3 1.png'
import image3 from '../assets/doodle-4 1.png'
import image4 from '../assets/Saly-5.png'
import image5 from '../assets/Saly-22.png'
import image6 from '../assets/doodle-2 1.png'
import { elements } from '../constant'

const Body = () => {
  return (
    <div>
        <div className='bg-white px-[7%] pt-36 pb-24 flex mob-reverse gap-20 relative'>
            <img src={image2} alt="" className='absolute top-0 left-0' />

            <div className="flex flex-col gap-8 w-[555px] max-[768px]:w-full">
                <div className='w-full h-[135px] rounded-[15px] bg-[#4F55DD] shadow-blue py-8  px-6'>
                     <p className='leading-[22px] text-white'>
                        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                     </p>
                </div>

                <div className='w-full h-[135px] rounded-[15px] bg-[#fff] shadow-white py-8 px-6'>
                     <p className='leading-[22px] text-[#282828]'>
                        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                     </p>
                </div>

                <div className='w-full h-[135px] rounded-[15px] bg-[#fff] shadow-white py-8 px-6'>
                     <p className='leading-[22px] text-[#282828]'>
                        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                     </p>
                </div>
            </div>
            
            <div className='w-1/2 max-[768px]:w-full'>
                <img src={image1} alt="" className='object-cover' />
            </div>
        </div>

        <div>
            <div className='bg-[#2ED57380] px-[7%] py-12 flex max-[768px]:block gap-20 relative'>
                <img src={image3} alt="" className='absolute left-0 top-4' />
                <div className='w-[50%] max-[768px]:w-full max-[768px]:mb-10'>
                    <h1 className='text-[44px] leading-[58px] text-[#4F4F4F] font-bold max-[768px]:text-center'>
                        Simplify your online shipping for free this month!
                    </h1>
                </div>

                <div className='w-[50%] flex items-end justify-end max-[768px]:block max-[768px]:w-full'>
                    <h1 className='text-[44px] leading-[58px] text-[#4F4F4F] font-bold w-[80%] max-[768px]:w-full max-[768px]:text-center'>
                        Grow your business with better Shipping organizations
                    </h1>
                </div>

                <img src={image4} alt="" className='absolute bottom-[-280px] left-[22%] max-[768px]:hidden' />
            </div>

            <div className='relative'>
                <div className='mx-[7%] grid-div'>
                    {
                        elements.map((item) => ( 
                            <div key={item.id} className='grid-item pt-12'>
                                <img src={item.image} alt="" />
                                <p className='leading-[22px] text-[#282828] pt-2 w-full'>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <div className='px-[7%] flex items-center justify-between pt-28  pb-20 relative'>
            <img src={image6} alt="" className='absolute top-0 right-8' />

            <img src={image5} alt="" className='max-[768px]:hidden' />

            <div className='w-[40%] max-[768px]:w-full -translate-y-10 translate'>
                <h3 className='text-[23px] text-[#373F41] font-semibold mb-4 max-[768px]:pb-2 max-[768px]:text-center'>
                    We scratch, build and play together
                </h3>

                <h1 className='text-[52px] leading-[56px] text-[#373F41] font-bold mb-4 max-[768px]:pb-8'>
                    We scratch, build and play together
                </h1>

                <p className='leading-[22px] text-[#737B7D] max-[768px]:pb-8'>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Body
