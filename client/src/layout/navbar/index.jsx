import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.scss"
const Navbar = () => {


    const [isClick, setIsClick] = useState(false)

    function handleClick() {
        setIsClick(!isClick)
    }
    

  return (
  
<div>
<nav className='bg-white fixed top-o left-0 right-0 '>
        <div className="wrapper">
            <div className="flex justify-between items-center min-h-[72px] ">
                <div>
                    <h1 className='text-blue-500 text-3xl font-semibold'>Nitro <span>.</span></h1>
                </div>
                <ul className=' justify-between items-center gap-4 text-lg font-semibold hidden md:flex text-black'> 
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/admin'>Admin</NavLink></li>
                    <li><NavLink to='/addpage'>AddPage</NavLink></li>
                    <li><NavLink to='/basket'>Basket</NavLink></li>
                    <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
                </ul>
                <div className='flex md:hidden' onClick={handleClick}>
                    <span><GiHamburgerMenu /></span>
                </div>

            </div>
        </div>
    </nav>

     <div className={`sidebar ${isClick ? 'active' : ''}`}>
        <div className='py-20 px-10'>
            <ul className='flex flex-col gap-2'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
    </div>
</div>
    
  )
}

export default Navbar