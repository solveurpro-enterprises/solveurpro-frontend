import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { navLinks } from '../../utils/common-utils';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  const handleClick = (link) => {
    setActive(link);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className='bg-white h-14 fixed w-full z-40 px-4'>
      <div className='max-w-7xl h-14 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='h-full py-1'>
          <img className='h-full' src={logo} alt="Logo" />
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='text-gray-700 focus:outline-none'
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 text-[#686868]'>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link to={navLink.path}>
                <div
                  className='w-full group relative uppercase'
                  onClick={() => handleClick(navLink.title)}
                >
                  <div
                    className={`relative py-1 after:content-[''] after:absolute after:inset-0 ${
                      active === navLink.title
                        ? "after:border-b-4 after:border-red-500 after:-z-10 after:translate-y-2"
                        : ""
                    }`}
                  >
                    {navLink.title}
                  </div>
                  <div className='absolute transition-all duration-500 rounded-lg -bottom-2 bg-red-500 h-1 w-0 group-hover:w-full'></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-14 left-0 w-full bg-white shadow-lg'>
            <ul className='flex flex-col gap-4 p-4 text-[#686868]'>
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link to={navLink.path}>
                    <div
                      className='w-full group relative uppercase'
                      onClick={() => handleClick(navLink.title)}
                    >
                      <div
                        className={`relative py-1 after:content-[''] after:absolute after:inset-0 ${
                          active === navLink.title
                            ? "after:border-b-4 after:border-red-500 after:-z-10 after:translate-y-2"
                            : ""
                        }`}
                      >
                        {navLink.title}
                      </div>
                      <div className='absolute transition-all duration-500 rounded-lg -bottom-2 bg-red-500 h-1 w-0 group-hover:w-full'></div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;