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
  { icons: whatsapp, link: "https://wa.me/7895680679" },
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
        <Link to="/services">Tutoring Services</Link>
        <Link to="/services">Job Enablement Training</Link>
        <Link to="/services">Recruitment Consultancy</Link>
        <Link to="/services">Entrepreneurship Support</Link>
        <Link to="/services">Physically Challenged Students</Link>
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">COMPANY</h1>
      <div className="flex flex-col gap-4">
        <Link to="about">About Us</Link>
        <Link to="contact">Contact Us</Link>
        <Link to="">Gallary</Link>
        <Link to="">News</Link>
        <Link to="">Jobs</Link>
      </div>
    </div>
    <div className="font-bold">
      <h1 className="text-red-500 text-lg">CONTACT US</h1>
      <div className="flex flex-col gap-4">
        <a href="tel:7895680679" className="flex items-center gap-2" >  <HiOutlinePhone/>7895680679</a>
        <a href="mailto:solveurprobiz@gmail.com" className="flex items-center gap-2" ><HiOutlineMail/>solveurprobiz@gmail.com</a>
      </div>
    </div>
  </div>  
  <p className=" text-center py-2 text-sm">
        <a href="https://portfoliobysameer.vercel.app/" target="_blank">Design And Developed By ❤️ Sameer Khan &copy; 2025 Solverurpro. All Rights Reserved</a>
      </p>
  </div>
  );
};

export default Footer;
