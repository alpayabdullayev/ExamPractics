import React from 'react'
import SecionTitle from '../sectionTitle'
import { MdOutlineVerified } from "react-icons/md";

const AboutUs = () => {
  return (
    <>
    <section className='py-20'>
        <div className="wrapper">
            <SecionTitle children={"About Us"}/>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2  text-gray-700 gap-20 items-center'>
                <div>
                    <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='[font-size:_clamp(1em,2vw,10em)] text-black'>For the next great business</h2>
                    <p className='w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2'><span className='text-blue-500'><MdOutlineVerified /></span> Officia quaerat eaque neque</li>
                        <li className='flex items-center gap-2'><span className='text-blue-500'><MdOutlineVerified /></span> Officia quaerat eaque neque</li>
                        <li className='flex items-center gap-2'><span className='text-blue-500'><MdOutlineVerified /></span> Officia quaerat eaque neque</li>
                        <li className='flex items-center gap-2'><span className='text-blue-500'><MdOutlineVerified /></span> Officia quaerat eaque neque</li>
                        

                        
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs