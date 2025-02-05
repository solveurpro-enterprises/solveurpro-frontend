import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import img from "../assets/hero-section.png";
import bookImg from '../assets/book.png'
import blueWave from '../assets/blue-wave.png'
import msgbox from '../assets/msgbox.png'
import pen from '../assets/pen.png'
import progress from '../assets/progress.png'
import redWave from '../assets/red-wave.png'
import { FaBookOpen } from "react-icons/fa";
import { achievments } from "../utils/common-utils";
import creative from "../assets/creative.png"
import curriculam from "../assets/curriculam.png"
import mode from "../assets/mode.png"
import tutor from "../assets/tutor.png"
import price from "../assets/price.png"

const qualities=[{
    title:"Best Tutors",subTitle:"We offer resources and guidance to help tutors improve their skills and attract more students.",image:tutor
  },{
    title:"Best Curriculum",subTitle:"Whether you're a beginner or advanced learner, our curriculum adapts to your pace and level.",image:curriculam
  },{
    title:"" 
  },
  {
    title:"Modes Of Learning",subTitle:"We offer both online and offline learning modes, providing flexible, interactive virtual classes and in-person tutoring for personalized education.",image:mode,
  },{
    title:"Best Price",
    subTitle:"We offer the best prices with flexible plans for students and competitive earnings for tutors, ensuring affordability and fair compensation.",image:price
  },{
    title:"Creative thinking",subTitle:"We provide expert tutors with flexible teaching, secure earnings, and powerful tools while offering students personalized, interactive, and affordable learning.",image:creative
  }
]

const Home = () => {
  return (
    <div className="min-h-screen mx-4">
        {/* hero section */}
      <section className="flex items-center min-h-screen  w-full">
        <div className="text-black  w-1/2">
          <p className="text-gray-500 flex gap-4 items-center"> <FaBookOpen/>Best E-Learning Plateform</p>
          <h1 className="text-6xl font-bold text-gray-900">
            Getting Best <br /> Quality Education <br /> Is Now More Easier
          </h1>
          <p className="text-gray-700 font-bold">
            A tutor-providing platform that allows anyone to teach and <br/>students
            to learn from industry professionals.
          </p>
          <div className="flex">
            <button className="px-4 py-2 rounded-lg bg-amber-300 font-bold">
              Join Now
            </button>
            <button className="px-4 py-2 flex items-center gap-2  ">
              <FaRegPlayCircle className="text-4xl text-amber-400 font-bold " />
              <p className="font-bold">See How it works</p>
            </button>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center  w-1/2  relative -z-20">
          <img src={redWave} alt="" className="w-32 absolute bottom-10 left-40" />
          <img src={bookImg} alt="" className="w-32 absolute top-15 left-25" />
          <img src={msgbox} alt="" className="w-32 absolute top-20 right-10" />
          <img src={progress} alt="" className="w-18 absolute bottom-40 left-20" />
          <img src={pen} alt="" className="w-20 absolute top-75 right-10" />
          <img src={blueWave} alt="" className="w-32 absolute top-90 right-10 rotate-90" />
            <img src={img} alt="" className=" h-96 scale-125 mt-22" />
        </div>
      </section>

      {/* achivement section */}
      <section className="bg-[#525FE1] grid grid-cols-4 py-12 items-center justify-center ">
        {
          achievments.map((achievement,index)=>(
            <div className="flex items-center justify-center flex-col" key={index}>
              <p className="text-4xl">{achievement.count}</p>
              <p>{achievement.title}</p>
            </div>
          ))
        }
      </section>

      {/* Quality seciton */}
      <section className="grid grid-cols-4 gap-4 items-center">
        <div className="text-black col-span-2 my-8">
          <h1 className="text-5xl font-bold">Why We Are Best<br/> From Others?</h1>
          <h2>Our platform allows students to find tutors that match their <br/>learning style, needs, and schedule.</h2>

          <button to="login" className="bg-amber-500 py-2 px-4 mt-4 ml-2 rounded-md">Start Now</button>
        </div>
        {
          qualities.map((quality,index)=>(
            <div className="text-black flex flex-col items-center justify-center gap-2 border-2 p-4 rounded-xl  " key={index}>
              {quality.image&&<img src={quality.image} className="w-18"/>}
              <p className="font-bold">{quality.title}</p>
              <p className=" text-center text-sm">{quality.subTitle}</p>
            </div>
          ))
        }
      </section>
    </div>
  );
};

export default Home;
