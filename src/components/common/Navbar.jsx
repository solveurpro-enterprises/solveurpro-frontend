import React from 'react'
import logo from "../../assets/logo.png"
import { navLinks } from '../../utils/common-utils'
import { Link } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
    
  return (
    <div className='bg-white h-12 fixed w-full px-1 z-40'>
    <div className='  max-w-7xl h-12 mx-auto flex justify-between items-center ' >
        <div className='h-full'><img className='h-full' src={logo} alt="" /></div>
        <ul className='flex gap-4 text-black max-md:hidden'>
            {
                navLinks.map((navLink,index)=>(
                    <Link to={navLink.path} key={index} className='font-bold'>{navLink.title}</Link>
                ))
            }
        </ul>
        <div className='flex gap-2'>
            <Button bg={"white"} text={"black"} title={"Login"}/>
            <Button bg={"richblack-400"} text={"black"} title={"Join Us"}/>
        </div>
    </div>
    </div>

  )
}

export default Navbar