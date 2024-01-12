import React from 'react'
import { MdFacebook } from 'react-icons/md'

const OurTeamCard = () => {
    return (
        <>
            <div className='group'>
                <div className=' overflow-hidden relative'>
                    <img src="https://preview.colorlib.com/theme/nitro/images/person_8.jpg"  alt="" />
                    <div className=' flex flex-col gap-4 py-10 px-4 absolute top-0 left-0 h-full bg-blue-500 opacity-0  w-12  invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[-30px] group-hover:translate-x-0' >
                        <span className='text-white text-xl'><MdFacebook/></span>
                        <span className='text-white text-xl'><MdFacebook/></span>
                        <span className='text-white text-xl'><MdFacebook/></span>
                        <span className='text-white text-xl'><MdFacebook/></span>
                    </div>
                </div>
                <div className='px-4'>
                    <h5 className=' font-semibold'>Dave Simpson</h5>
                    <h5 className='text-gray'>PRODUCT MANAGER</h5>
                </div>
            </div>
        </>
    )
}

export default OurTeamCard