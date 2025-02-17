import React from "react";
import logo from "../../assets/logo.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.gif";
import youtube from "../../assets/youtube.png";
import { Link } from "react-router-dom";
import phone from "../../assets/phone.jpeg";

const socialIcons = [
  { icons: instagram, link: "https://www.instagram.com/solveurpro_enterprises/" },
  { icons: facebook, link: "https://facebook.com/solverurpro" },
  { icons: linkedin, link: "https://www.linkedin.com/company/solveurpro-enterprise/posts/?feedView=all" },
  { icons: whatsapp, link: "https://chat.whatsapp.com/E5EMAFiNYcRAuQvqmweB4T" },
  { icons: youtube, link: "https://www.youtube.com/@Solverurpro_Enterprises" },
];
const Footer = () => {
  return (
    <div className="w-full bg-[#2B3440] ">
  <div className="grid grid-cols-1 py-16 px-4 max-w-7xl mx-auto gap-4 md:grid-cols-2 lg:grid-cols-5">
    <div className=" md:col-span-2 ">
      <img src={logo} alt="" className="w-60 rounded-lg " />
      <div className="flex gap-2 my-4">
        {
          socialIcons.map((child,index)=>(
            <a href={`${child.link}`} target="_blank"><img src={child.icons} alt="social icons" className="" /></a>
          ))
        }
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">SERVICES</h1>
      <div className="flex flex-col gap-4">
        <a href="">Providing Best Tutors</a>
        <a href="">Best Curriculum</a>
        <a href="">Modes Of Learning</a>
        <a href="">Physically Challenged Students</a>
        <a href="">Best Prices</a>
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">COMPANY</h1>
      <div className="flex flex-col gap-4">
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Gallary</a>
        <a href="">News</a>
        <a href="">Jobs</a>
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">CONTACT US</h1>
      <div className="flex flex-col gap-4">
        <a href="">7895680679</a>
        <a href="">solveurprobiz@gmail.com</a>
      </div>
    </div>
  </div>  
  <p className=" text-center py-2">
        <a href="https://portfoliobysameer.vercel.app/" target="_blank">Made By ❤️ Sameer Khan &copy; 2025 solverurpro. All rights reserved</a>
      </p>
  </div>
  );
};

export default Footer;
