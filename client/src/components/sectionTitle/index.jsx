import React from 'react'

const SecionTitle = ({children,text}) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <h1 className='[font-size:_clamp(1em,3vw,5em)] font-bold text-blue-500 ' >{children}</h1>
        <h5 className='text-lg text-gray-700  text-center  '>{text}</h5>
    </div>
    </>
  )
}

export default SecionTitle