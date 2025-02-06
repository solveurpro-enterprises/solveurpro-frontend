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
import maths from "../assets/maths.png"
import physics from "../assets/physics.png"
import geography from "../assets/geography.png"
import science from "../assets/science.png"
import english from "../assets/english.png"
import commerce from "../assets/commerce.png"
import t1 from "../assets/madhiya.jpg"
import t2 from "../assets/Anas.jpg"
import t3 from "../assets/Danish.jpg"
import t4 from "../assets/xyz.jpg"

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

const tutorCtgry=[{
  subject:"Science",image:science
},{
  subject:"Physics",image:physics
},{
  subject:"Mathematics",image:maths
},{
  subject:"Geography",image:geography
},{
  subject:"English",image:english
}]


const instructorList=[{
  name:"Mrs. Madhiya Nihal",image:t1
},{
  name:"Mr. Mohd Anas",image:t2
},{
  name:"Mr. Mohd Danish",image:t3
},{
  name:"Mrs. XYZ",image:t4
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
      <section className="grid grid-cols-4 gap-4 items-center my-4">
        <div className="text-black col-span-2 my-8">
          <h1 className="text-5xl font-bold">Why We Are Best<br/> From Others?</h1>
          <h2>Our platform allows students to find tutors that match their <br/>learning style, needs, and schedule.</h2>

          <button to="login" className="bg-[#525FE1] text-white py-2 px-4 mt-4 ml-2 rounded-md shadow-2xl cursor-pointer shadow-black">Start Now</button>
        </div>
        {
          qualities.map((quality,index)=>(
            <div className="text-white flex flex-col justify-center gap-2 border-2 p-4 rounded-xl bg-[#525FE1] shadow-black  shadow-2xl " key={index}>
              {quality.image&&<img src={quality.image} className="w-18"/>}
              <p className="font-bold">{quality.title}</p>
              <p className=" text-sm">{quality.subTitle}</p>
            </div>
          ))
        }
      </section>

      {/* course category */}
      <section className=" text-black">
        <h1 className="text-4xl mt-8 font-bold text-center" >Browse Tutors By Categories</h1>
        <p className="text-sm text-center">Explore diverse tutor categories tailored to your needs, from academics to skills, <br/>ensuring the perfect match for every student's learning journey.</p>
        <div className="flex justify-center gap-8 items-center my-10">
          {
            tutorCtgry.map((cat,index)=>(
              <div className="flex items-center flex-col bg-[#525FE1] text-white p-4 rounded-lg">
                <img src={cat.image} alt="" className="w-10" />
                <p>{cat.subject}</p>
              </div>
            ))
          }
        </div>
      </section>
          {/* //tutors list */}
      <section className="text-black mb-4">
          <h1 className="text-4xl text-center font-bold m-4">Most Popular Tutors</h1>
          <div className="grid grid-cols-4 gap-4">
            {
              instructorList.map((instructor,index)=>(
                <div className="bg-[#66A4AD]  rounded-md ">
                  <img src={instructor.image} alt="" className=" aspect-square object-cover p-4 overflow-hidden" />
                  <p className=" text-center font-extrabold pb-2">{instructor.name}</p>
                </div>
              ))
            }
          </div>
      </section>

      <section className="w-full flex items-center my-12 gap-4">
        <div className="text-black w-[60%]">
          <h1 className="text-4xl font-extrabold">We Have Highly Expert &<br/> Experienced Tutors</h1>
          <p>Our platform offers highly expert and experienced tutors who provide personalized learning, ensuring students receive top-quality education tailored to their needs, learning style, and academic goals for optimal success.</p>
        </div>
          <img src={t3} alt="" className="w-[30%] aspect-square object-cover rounded-lg"/>
      </section>
    </div>
  );
};

export default Home;
