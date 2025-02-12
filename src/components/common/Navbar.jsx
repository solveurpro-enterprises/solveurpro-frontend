import React from 'react'
import logo from "../../assets/logo.png"
import { navLinks } from '../../utils/common-utils'
import { Link } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
    
  return (
    <div className='bg-white h-14 fixed w-full  z-40 px-4'>
    <div className='  max-w-7xl h-14 mx-auto flex justify-between items-center ' >
        <div className='h-full'><img className='h-full' src={logo} alt="" /></div>
        <ul className='flex gap-6 text-black text-lg'>
            {
                navLinks.map((navLink,index)=>(
                    <Link to={navLink.path} key={index}>
                        <div className='w-full py-3 group relative font-bold' >
                            <div>{navLink.title}</div>
                            <div className=' absolute transition-all duration-500 rounded-lg bottom-0 bg-red-500 h-1 w-0 group-hover:w-full'></div>
                        </div>
                    </Link>
                ))
            }
        </ul>
    </div>
    </div>

  )
}

export default Navbar