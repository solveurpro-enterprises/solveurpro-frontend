import React from 'react'
import logo from "../../assets/logo.png"
import { navLinks } from '../../utils/common-utils'
import { Link } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
    
  return (
    <div className='h-12  px-4 py-2 flex justify-between items-center border-b '>
        <div className='h-full'><img className='h-full' src={logo} alt="" /></div>
        <ul className='flex gap-4'>
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

  )
}

export default Navbar