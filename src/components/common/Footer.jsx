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
    <div className="bg-black text-white">
      <div className="py-12 mx-auto flex flex-col gap-4 items-center">
        <h1 className="text-5xl text-center [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] ">
          Unlock Your Learning Potential . <br /> Begin Your Journey Now!
        </h1>
        <button
          to="login"
          className="bg-[#525FE1] text-white py-2 px-4 mt-4 ml-2 rounded-md shadow-2xl cursor-pointer shadow-black shadow-xl  hover:scale-110 hover:shadow-blue-500"
        >
          Start Now
        </button>
      </div>
      <div className="ml-4 bg-blue-600  py-4 rounded-lg flex justify-between px-8 overflow-hidden group ">
        <div className="">
          <div>
            <img src={logo} alt="" className="w-42 rounded-lg" />
            <div className="my-8">
              <p className="flex gap-2 items-center">
                <HiOutlineMail /> solverurpro@gmail.com
              </p>
              <p className="flex gap-2 items-center">
                <HiOutlinePhone /> 9999999999
              </p>
            </div>
            <div>
              <p className="text-3xl mb-8 [text-shadow:20px_8px_5px_rgba(0,0,0,1)] ">Follow Us On:</p>
              <div className="flex gap-4 ">
                {socialIcons.map((icon, index) => (
                  <div className="hover:scale-125">
                    <a href={icon.link} target="_blank">
                      <img src={icon.icons} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div> */}
          {/* </div> */}
        </div>
          <img src={phone} alt="" className=" rounded-lg w-72 scale-150 mr-12 object-cover rotate-45 transition-all duration-400 group-hover:-rotate-12 group-hover:scale-90" />
      </div>
      <p className=" text-center py-2">
        Made By ❤️ Sameer Khan &copy; 2025 solverurpro. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
