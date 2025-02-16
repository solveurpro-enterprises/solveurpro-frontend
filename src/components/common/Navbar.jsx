import React ,{useState}from 'react'
import logo from "../../assets/logo.png"
import { navLinks } from '../../utils/common-utils'
import { Link } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
    const [active, setActive] = useState("Home");

  const handleClick = (link) => {
    setActive(link);
  };
  return (
    <div className='bg-white h-14 fixed w-full  z-40 px-4'>
    <div className='  max-w-7xl h-14 mx-auto flex justify-between items-center ' >
        <div className='h-full'><img className='h-full' src={logo} alt="" /></div>
        <ul className='flex gap-6 text-[#686868]'>
            {
                navLinks.map((navLink,index)=>(
                    <Link to={navLink.path} key={index} >
                        <div className='w-full group relative  uppercase' onClick={() => handleClick(navLink.title)} >
                            <div className={`relative py-1 after:content-[''] after:absolute after:inset-0 ${
            active === navLink.title ? "after:border-b-4 after:border-red-500 after:-z-10 after:translate-y-2" : ""}`}>{navLink.title}</div>
                            <div className=' absolute transition-all duration-500 rounded-lg -bottom-2 bg-red-500 h-1 w-0 group-hover:w-full'></div>
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