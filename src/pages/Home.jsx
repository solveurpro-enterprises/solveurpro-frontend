import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import heroVideo from "../assets/herosection.mp4";
import { FaBook, FaBookOpen, FaChalkboardTeacher, FaLightbulb, FaWheelchair } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { IoManSharp, IoPricetagsSharp } from "react-icons/io5";
import { RiBaseStationLine } from "react-icons/ri";
import curriculum from "../assets/curriculam.png"
import tutor from "../assets/tutor.png"
import mode from "../assets/mode.png"
import price from "../assets/price.png"
import PH from "../assets/img4.jpg"
import aboutImg from "../assets/img5.jpg"
import { FaSquareUpwork } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { GiOfficeChair } from "react-icons/gi";
import { TbBrandUpwork } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";

const reviews = ["Mohd Danish", "Sameer Khan"];

const Home = () => {
  return (
    <div className=" mx-auto ">
      {/* hero section */}
      <section className="flex items-center justify-center w-full max-xl:min-h-screen pt-8 relative bg-transparent lg:h-fit px-4 max-md:flex-col max-md:px-0  max-md:mx-2 lg:py-16 transition-all" >
        <div className=" mt-8 relative  max-w-7xl mx-auto max-md:px-4">
          <p className="text-[var(--primary-color)] flex gap-4 items-center mb-2 text-lg font-bold ">
            {" "}
            <BsRocketTakeoff className="text-3xl" />
            Your Trusted Partner <br /> For Learning, Jobs & Services
          </p>
          <h1 className="text-4xl  text-[var(--primary-color)]">
            <span className="font-light">Welcome To </span>
            <br /> <span className="font-bold"> Solveurpro Enterprises</span> <br /> 
            {/* <span>Your One-Stop Solution</span>
            <br /><span className="text-2xl">For Learning, Services, And Career Growth</span> */}
            <span className="text-2xl">"Solve Your Problems, Every Step of the Way"</span>
          </h1>
          <p className="text-[var(--primary-color)]  mt-6 text-sm w-1/2 max-md:w-full">
          Your one-stop solution for education, job training, and expert home services. Whether you need a tutor, career skills, or reliable professionals like plumbers and electricians, we’ve got you covered!
          </p>
          <div className="flex my-6 gap-4">
            <Link to="/services">
              <Button title="View All Services" buttonType={"primary"} />
            </Link>
            <Link to={"/contact"}>
              <Button title="Get In Touch" buttonType={"secondary"} />
            </Link>
          </div>
          <div className=" grid  gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex gap-1 flex-wrap bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <FaBook className="text-2xl pr-1" />
              <div>Tutoring Services <br />(National & International)</div>
            </div>
            <div  className=" flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
              <FaSquareUpwork className="text-2xl pr-1" />
                <div> Employability skills training <br />(National & International)</div>
            </div>
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <CiSettings className="text-2xl pr-1" />
                <div> Professional Services <br />(Trusted Service Provider)</div>
            </div>
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <GiOfficeChair className="text-2xl pr-1" />
                <div>Recruitment Consultancy <br /> (National & International)</div>
            </div>
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <BsRocketTakeoff className="text-2xl pr-1" />
                <div>Entrepreneurship Support <br /> (Financial Assistance)</div>
            </div>
          </div>
        </div>
        <video src={heroVideo} className="absolute top-0 bottom-0 right-0 h-full w-full object-cover -z-20" autoPlay loop muted></video>
        <div className=" absolute top-0 bottom-0 right-0 left-0 overflow-hidden w-full bg-black opacity-70 -z-20"></div>
      </section>

    <section className="px-4 max-w-7xl mx-auto">
      <h1 className={` border-l-4 pl-2 mt-4 border-l-red-500 text-black text-3xl font-bold mb-6`}>Our Services</h1>
      <div className="grid  gap-6 items-center justify-center text-center mb-4 grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          {/* <img src={tutor} alt="" className="w-16 object-cover"  /> */}
          <FaChalkboardTeacher className="text-7xl text-red-600" />
          <h2 className="font-2xl font-bold">Tutoring Services </h2>
          <p className=" text-[#777777]   ">We offer quality education with expert tutors to help students improve their skills and succeed in their studies.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          {/* <img src={curriculum} alt="" className="w-16 object-cover"  /> */}
          <TbBrandUpwork className="text-7xl text-red-600"/>
          <h2 className="font-2xl font-bold">Employability skills training</h2>
          <p className=" text-[#777777]   ">We provide practical training to help individuals gain skills and get better job opportunities.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          {/* <img src={mode} alt="" className="w-16 object-cover"  /> */}
          <HiUsers  className="text-7xl text-red-600"/>
          <h2 className="font-2xl font-bold"> Recruitment Consultancy (National & International)</h2>
          <p className=" text-[#777777]   ">Looking for a job? We connect job seekers with the best national & international opportunities.
          Need employees? We help businesses find the right talent.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          {/* <img src={PH} alt="" className="w-16 object-cover"  /> */}
          <FaLightbulb  className="text-7xl text-red-600"/>

          <h2 className="font-2xl font-bold">Entrepreneurship Support</h2>
          <p className=" text-[#777777]   ">Want to start your own business? We provide guidance, mentorship, and resources to help aspiring entrepreneurs turn their ideas into successful ventures.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          {/* <img src={PH} alt="" className="w-16 object-cover"  /> */}
          <FaWheelchair  className="text-7xl text-red-600"/>
          <h2 className="font-2xl font-bold">Physically Challenged Students</h2>
          <p className=" text-[#777777]  ">Specialized paid tutoring for physically handicapped students, ensuring accessible and personalized learning support.</p>
        </div>
      </div>
    </section>

    <section className="w-full max-w-7xl flex flex-col my-12 h-fit items-center   group mx-auto lg:flex-row ">
      <div className=" overflow-hidden order-2 lg:order-1 ">
      <img src={"https://t3.ftcdn.net/jpg/05/13/25/32/240_F_513253237_UQv6e1YHZwqpWA9ocs2JSAz53FjnWVp6.jpg"} className="w-full px-4 my-2 object-cover  transition-all duration-500 overflow-hidden group-hover:scale-110" alt="" />
      </div>
      <div className=" flex flex-col items-start ml-4 order-1 lg:order-2 lg:w-1/2 ">
        <h2 className="border-l-2 border-red-600 ml-2 pl-2 font-bold text-black text-3xl">About Us</h2>
        <p className="text-[#1F2937] p-4">
        At SolveurPro Enterprises, we are committed to empowering individuals and businesses by providing top-quality education, job training, professional services, and entrepreneurial support. Whether you're a student seeking expert tutoring, a job seeker looking for opportunities, or an entrepreneur aiming to build your dream business, we are here to guide you every step of the way. Additionally, we connect you with trusted professionals like plumbers, electricians, and cleaners etc for your daily service needs. With a strong focus on growth, innovation, and excellence, SolveurPro Enterprises is your trusted partner in learning, career development, and business success!        </p>
        <Link to="/about"><Button title={"Read More"} buttonType={"secondary"} className=""/></Link>
      </div>
    </section>

    </div>
  );
};

export default Home;
