import React from 'react';
import logo from '../assets/eGENCY.png';
import visa from '../assets/Group 672.png';
import amex from '../assets/Group 673.png';
import paypal from '../assets/Group 674.png';
import card from '../assets/Group 675.png';
import stripe from '../assets/Group 676.png';
import bitcoin from '../assets/Group 677.png';
import bancontact from '../assets/Group 678.png';
import image1 from '../assets/doodle-7 1.png';
import image2 from '../assets/doodle-6 1.png';
import image3 from '../assets/doodle-5 1.png';

const Footer = () => {
  return (
    <div className='bg-[#2ED57380] px-[7%] py-12 relative'>
        <img src={image1} alt="" className='absolute -top-[70px] right-[2%]' />

        <div className="border-b border-[#000] pb-4">
            <div className='flex justify-between mb-6'>
                <div className='w-[40%]'>
                    <img src={logo} alt="logo" className='mb-10' />
                    <p className='leading-[22px] text-[#454646]'>
                        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
                    </p>
                </div>

                <div className='flex gap-20 mr-24'>
                    <div>
                        <p className='text-lg mb-8'>Pages</p>

                        <ul>
                            <li>Templates</li>
                            <li>Price</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-lg mb-8'>Demos</p>

                        <ul>
                            <li>Dark theme</li>
                            <li>Light theme</li>
                            <li>Classic theme</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-lg mb-8'>Resources</p>

                        <ul>
                            <li>Documentation</li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className='flex items-end justify-end gap-8 text-lg font-bold'>
                <li>New York</li>
                <li>Dubai</li>
                <li>Dhaka</li>
                <li>Mumbai</li>
                <li>Sydney </li>
            </ul>
        </div>

        <div className='pt-6 relative'>
            <img src={image2} alt="" className='absolute bottom-0 -left-[8%]' />

            <div className='flex items-center justify-center gap-6'>
                <img src={visa} alt="" />
                <img src={amex} alt="" />
                <img src={paypal} alt="" />
                <img src={card} alt="" />
                <img src={stripe} alt="" />
                <img src={bitcoin} alt="" />
                <img src={bancontact} alt="" />
            </div>

            <div className='flex items-center justify-between mt-16'>
                <p className='text-lg text-[#494949]'>
                    © 2019-2020 All Rights Reserved.
                </p>

                <p className='text-lg text-[#494949] mr-12'>
                    Terms of Service
                </p>
            </div>

            <img src={image3} alt="" className='absolute -bottom-10 -right-[8%]' />
        </div>
    </div>
  )
}

export default Footer
