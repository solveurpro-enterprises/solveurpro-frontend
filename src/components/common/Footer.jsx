import React from "react";
import logo from "../../assets/logo.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.gif";
import { Link } from "react-router-dom";
import phone from "../../assets/phone.jpeg";

const socialIcons = [
  { icons: instagram, link: "www.instagram.com/solverurpro" },
  { icons: facebook, link: "https://facebook.com/solverurpro" },
  { icons: linkedin, link: "www.linkedin.com/solverurpro" },
  { icons: whatsapp, link: "www.whatsapp.com/solverurpro" },
];
const Footer = () => {
  return (
    <div className="bg-black text-white max-w-7xl mx-auto">
      <div className="ml-4 bg-blue-600  py-4 rounded-lg flex justify-between px-8 overflow-hidden group ">
        <div className="">
          <div>
            <img src={logo} alt="" className="w-42 rounded-lg max-md:w-24" />
            <div className="my-8">
              <p className="flex gap-2 items-center">
                <HiOutlineMail /> solverurpro@gmail.com
              </p>
              <p className="flex gap-2 items-center">
                <HiOutlinePhone /> 9999999999
              </p>
            </div>
            <div>
              <p className="text-3xl mb-8 [text-shadow:20px_8px_5px_rgba(0,0,0,1)] max-md:text-2xl max-sm:text-sm ">Follow Us On:</p>
              <div className="flex gap-4 ">
                {socialIcons.map((icon, index) => (
                  <div className="hover:scale-125">
                    <a href={icon.link} target="_blank">
                      <img src={icon.icons} alt="" className="w-16 max-md:w-7" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div> */}
          {/* </div> */}
        </div>
          <img src={phone} alt="" className=" rounded-lg w-72 scale-150 mr-12 object-cover rotate-45 transition-all duration-400 group-hover:-rotate-12 group-hover:scale-90 max-md:hidden" />
      </div>
      <p className=" text-center py-2 text-sm">
        Made By ❤️ Sameer Khan &copy; 2025 solverurpro. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
