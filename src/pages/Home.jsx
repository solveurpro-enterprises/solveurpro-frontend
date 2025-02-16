import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import heroVideo from "../assets/herosection.mp4";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { IoManSharp, IoPricetagsSharp } from "react-icons/io5";
import { RiBaseStationLine } from "react-icons/ri";
import curriculum from "../assets/curriculam.png"
import tutor from "../assets/tutor.png"
import mode from "../assets/mode.png"
import price from "../assets/price.png"
import PH from "../assets/img4.jpg"
import aboutImg from "../assets/img5.jpg"

const reviews = ["Mohd Danish", "Sameer Khan"];

const Home = () => {
  return (
    <div className=" mx-auto ">
      {/* hero section */}
      <section className="flex items-center w-full max-xl:min-h-screen pt-8 relative bg-transparent lg:h-fit px-4 max-md:flex-col max-md:px-0  max-md:mx-2 lg:py-16 transition-all" >
        <div className=" mt-8 relative max-w-7xl mx-auto ">
          <p className="text-[var(--primary-color)] flex gap-4 items-center mb-2 text-sm">
            {" "}
            <FaBookOpen />
            Best Tutors Providing Platform
          </p>
          <h1 className="text-4xl  text-[var(--primary-color)]">
            <span className="font-light">Getting Best </span>
            <br /> <span className="font-bold"> Quality Education</span> <br /> <span>Is Now More Easier</span>
          </h1>
          <p className="text-[var(--primary-color)]  mt-6 text-sm w-1/2">
            An online tutor-providing platform where anyone can share their
            knowledge, and students can learn from industry experts. Offering
            flexible learning, one-on-one sessions, and expert guidance to
            enhance skills in various fields.
          </p>
          <div className="flex my-6 gap-4">
            <Link to="/services">
              <Button title="View All Services" buttonType={"primary"} />
            </Link>
            <Link to={"/contact"}>
              <Button title="Get In Touch" buttonType={"secondary"} />
            </Link>
          </div>
          <div className=" flex gap-4 mt-8">
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <IoManSharp className="" />
              <div>Best Tutors</div>
            </div>
            <div  className=" flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
              <AiOutlineStock className="" />
                <div>Best Curriculum</div>
            </div>
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <RiBaseStationLine className="" />
                <div>Online/Offline Mode</div>
            </div>
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <RiBaseStationLine className="" />
                <div>Physically Challenged Students</div>
            </div>
            <div className="flex gap-1 bg-[#726A61] py-1 px-2 rounded-lg items-center cursor-pointer hover:bg-[#726a61b2]">
                <IoPricetagsSharp className="" />
                <div>Best Price</div>
            </div>
          </div>
        </div>
        <video src={heroVideo} className="absolute top-0 bottom-0 right-0 h-full w-full object-cover -z-30" autoPlay loop muted></video>
        <div className=" absolute top-0 bottom-0 right-0 left-0 overflow-hidden bg-black opacity-90 -z-10"></div>
      </section>

    <section className="px-4 max-w-7xl mx-auto">
      <h1 className={` border-l-4 pl-2 mt-4 border-l-red-500 text-black text-3xl font-bold mb-6`}>Our Services</h1>
      <div className="grid grid-cols-5 gap-6 items-center justify-center text-center mb-4">
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          <img src={tutor} alt="" className="w-16 object-cover"  />
          <h2 className="font-2xl font-bold">Best tutors</h2>
          <p className=" text-[#777777] select-none ">We offer resources and guidance to help tutors improve their skills and attract more students.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          <img src={curriculum} alt="" className="w-16 object-cover"  />
          <h2 className="font-2xl font-bold">Best Curriculum</h2>
          <p className=" text-[#777777] select-none ">Whether you're a beginner or advanced learner, our curriculum adapts to your pace and level.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          <img src={mode} alt="" className="w-16 object-cover"  />
          <h2 className="font-2xl font-bold">Modes Of Learning</h2>
          <p className=" text-[#777777] select-none ">We offer both online and offline learning modes, providing flexible, interactive virtual classes and in-person tutoring for personalized education.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          <img src={PH} alt="" className="w-16 object-cover"  />
          <h2 className="font-2xl font-bold">Physically Challenged Students</h2>
          <p className=" text-[#777777]  select-none">Specialized paid tutoring for physically handicapped students, ensuring accessible and personalized learning support.</p>
        </div>
        <div className="flex flex-col gap-4 text-black items-center justify-center border-2 rounded-lg p-2 h-full border-gray-500 transition-all hover:-translate-y-4">
          <img src={price} alt="" className="w-16 object-cover"  />
          <h2 className="font-2xl font-bold">Best Price</h2>
          <p className=" text-[#777777] select-none">We offer the best prices with flexible plans for students and competitive earnings for tutors, ensuring affordability and fair compensation.</p>
        </div>
      </div>
    </section>

    <section className="w-full flex flex-row my-12 h-fit items-center select-none group mx-4">
      <div className=" overflow-hidden">
      <img src={aboutImg} className="w-full px-4 object-cover  transition-all duration-500 overflow-hidden group-hover:scale-110" alt="" />
      </div>
      <div className="w-1/2 flex flex-col items-start ml-4">
        <h2 className="border-l-2 border-red-600 ml-2 pl-2 font-bold text-black text-3xl">About Us</h2>
        <p className="text-[#1F2937] p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusamus animi expedita praesentium natus non! Tenetur, esse? Magni pariatur necessitatibus quibusdam ipsum labore omnis in beatae illum eum, quia maiores voluptatibus minus deleniti impedit corrupti eos placeat rerum? Magni molestiae obcaecati vel vitae commodi totam! Reiciendis voluptatum qui minima obcaecati quam, minus soluta distinctio nisi expedita, molestiae repellat fugit vel quisquam ipsum ipsam modi. Ut totam porro perspiciatis quasi esse, cumque perferendis dicta iure eaque quae repudiandae cupiditate molestias voluptatum quas veritatis dignissimos quo expedita commodi optio. Rem, beatae quo asperiores rerum laudantium, quas ipsa commodi dignissimos blanditiis possimus eveniet.
        </p>
        <Link to="/about"><Button title={"Read More"} buttonType={"secondary"} className=""/></Link>
      </div>
    </section>

    </div>
  );
};

export default Home;
