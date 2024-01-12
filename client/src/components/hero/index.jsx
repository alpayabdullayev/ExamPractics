import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-[url("https://preview.colorlib.com/theme/nitro/images/hero_2.jpg.webp")] min-h-screen bg-cover bg-center bg-no-repeat'>
        <div className="wrapper">
            <div className='flex flex-col justify-center items-center min-h-screen '>
                <h1 className='[font-size:_clamp(2em,5vw,10em)] text-white  font-semibold'>WELCOME</h1>
                <p className='text-white text-lg py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
                <div>
                    <button className='py-2 px-4 rounded-full bg-blue-400 text-white duration-300  hover:bg-black'>Get In Touch</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection