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
import t1 from "../assets/Madhiya.jpg"
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

const reviews=["Mohd Danish","Sameer Khan"]

const Home = () => {
  return (
    <div className=" mx-auto max-w-7xl">
        {/* hero section */}
      <section className="flex items-center w-full transition-all mx-4 duration-300 max-xl:min-h-screen pt-8 lg:h-fit px-4 max-md:flex-col max-md:px-0  max-md:mx-2
       lg:py-16">
        <div className="text-black  w-1/2 max-md:w-full mt-8 ">
          <p className="text-gray-500 flex gap-4 items-center font-extrabold mb-2 text-sm"> <FaBookOpen/>Best Tutors Providing Platform</p>
          <h1 className="text-5xl font-bold text-gray-900 [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] ">
            Getting Best <br /> Quality Education <br /> Is Now More Easier
          </h1>
          <p className="text-gray-700 font-extrabold mt-4 text-sm">
            A tutor-providing platform that allows anyone to teach and <br/>students
            to learn from industry professionals.
          </p>
          <div className="flex my-4">
            <button className="px-4 py-2 rounded-lg text-white bg-[#525FE1] font-bold  cursor-pointer shadow-2xl shadow-black transition-all duration-300 hover:scale-90">
              Join Now
            </button>
            <button className="px-4 py-2 flex items-center gap-2 hover:scale-110 ">
              <FaRegPlayCircle className="text-4xl text-[#525FE1] font-bold " />
              <p className="font-bold">See How it works</p>
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center  w-1/2  relative rounded-lg max-md:w-full">
          <img src={redWave} alt="" className="w-32 absolute bottom-10 left-40 max-md:w-14" />
          <img src={bookImg} alt="" className="w-32 absolute top-15 left-25 max-md:w-20" />
          <img src={msgbox} alt="" className="w-32 absolute top-20 right-10 max-md:w-20" />
          <img src={progress} alt="" className="w-18 absolute bottom-40 left-20 max-md:w-7" />
          <img src={pen} alt="" className="w-20 absolute top-75 right-10 max-md:w-7" />
          <img src={blueWave} alt="" className="w-32 absolute top-90 right-10 rotate-90 max-md:w-14" />
            <img src={img} alt="" className=" h-96 scale-125 mt-22 drop-shadow-[0px_5px_10px_rgba(59,130,246,0.7)] rounded-lg  object-cover max-md:scale-90" />
        </div>
      </section>

      {/* achivement section */}
      <section className="bg-[#525FE1] grid grid-cols-4 py-12 items-center justify-center rounded-lg shadow-lg shadow-black  max-sm:grid-cols-2 gap-4 mx-4 max-md:mx-2">
        {
          achievments.map((achievement,index)=>(
            <div className="flex items-center justify-center flex-col" key={index}>
              <p className="text-4xl md:text-2xl">{achievement.count}</p>
              <p>{achievement.title}</p>
            </div>
          ))
        }
      </section>

      {/* Quality seciton */}
      <section className="grid grid-cols-4 gap-4 items-center my-4 transition-all duration-300 mx-4 max-md:mx-2">
        <div className="text-black col-span-2 my-8 max-md:col-span-4 max-md:flex items-center flex-col">
          <h1 className="text-5xl font-bold [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] max-md:text-center ">Why We Are Best<br/> From Others?</h1>
          <h2 className="font-bold italic mt-4 max-md:text-center">Our platform allows students to find tutors that match their <br/>learning style, needs, and schedule.</h2>

          <button to="login" className="bg-[#525FE1] text-white py-2 px-4 mt-4 ml-2 rounded-md cursor-pointer shadow-lg shadow-black hover:scale-110 ">Start Now</button>
        </div>
        {
          qualities.map((quality,index)=>(
            <div className=" flex flex-col justify-center gap-2 border-2 p-4 rounded-xl shadow-black  shadow-2xl text-black transition-all duration-300 hover:-translate-y-4  max-md:col-span-2 mx-2 max-sm:col-span-4 " key={index}>
              {quality.image&&<img src={quality.image} className="w-18 "/>}
              <p className="font-extrabold text-[#525FE1] underline">{quality.title}</p>
              <p className=" text-sm text-black font-bold italic">{quality.subTitle}</p>
            </div>
          ))
        }
      </section>

      {/* course category */}
      <section className=" text-black transition-all duration-300 mx-4 max-md:mx-2">
        <h1 className="mt-8 font-bold text-center [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] text-4xl" >Browse Tutors By Categories</h1>
        <p className="text-sm text-center mt-4 font-bold italic">Explore diverse tutor categories tailored to your needs, from academics to skills, <br/>ensuring the perfect match for every student's learning journey.</p>
        <div className="grid grid-cols-5 gap-4 my-10 max-md:grid-cols-2 max-md:mx-2">
          {
            tutorCtgry.map((cat,index)=>(
              <div className="flex items-center flex-col shadow-blue shadow-2xl  text-black [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] border-2 p-4 rounded-lg shadow-lg shadow-black hover:scale-110">
                <img src={cat.image} alt="" className="w-10" />
                <p>{cat.subject}</p>
              </div>
            ))
          }
        </div>
      </section>
          {/* //tutors list */}
      <section className="text-black mb-4 transition-all duration-300 mx-4 max-md:mx-2">
          <h1 className="text-4xl text-center font-bold m-4 [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] underline mb-8">Most Popular Tutors</h1>
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2  max-sm:grid-cols-1 max-sm:mx-2">
            {
              instructorList.map((instructor,index)=>(
                <div className=" shadow-2xl shadow-black  rounded-md group">
                  <img src={instructor.image} alt="" className=" aspect-square object-cover p-4 duration-500  group-hover:scale-105 hover:grayscale-50 overflow-hidden " />
                  <p className=" text-center font-extrabold pb-2">{instructor.name}</p>
                </div>
              ))
            }
          </div>
      </section>

      <section className="w-full flex items-center justify-center my-15 gap-4 mx-4 max-md:mx-2 max-md:flex-col">
        <div className="text-black w-[60%] max-md:w-full px-4">
          <h1 className="text-4xl font-extrabold [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] line-clamp-3">We Have Highly Expert &<br/> Experienced Tutors</h1>
          <p className=" italic font-bold mt-2">Our platform offers highly expert and experienced tutors who provide personalized learning, ensuring students receive top-quality education tailored to their needs, learning style, and academic goals for optimal success.</p>
          <button to="login" className="bg-[#525FE1] text-white py-2 px-4 mt-4 ml-2 rounded-md shadow-2xl cursor-pointer shadow-black shadow-lg shadow-black hover:scale-110">Start Now</button>
        </div>
          <img src={t3} alt="" className="w-[30%] aspect-square object-cover rounded-lg shadow-2xl shadow-blue-600 hover:grayscale-100 hover:scale-110 max-md:w-full px-4"/>
      </section>

      {/* Reviews */}
      <section className="text-black">
        <h1 className="text-5xl text-center font-bold m-4 [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)] mb-8">What Our Students Says</h1>
        <div className="flex overflow-hidden w-full gap-8 m-2">
          {
            reviews.map((review,index)=>(
              <div className="text-black w-[50%] flex flex-col items-center justify-center shadow-2xl shadow-blue-600 gap-4 border-2 rounded-lg py-2 transition-all hover:rotate-12 hover:scale-90">
              <img src={t1} className="w-32 aspect-square rounded-full object-cover"/>
              <p className="text-black font-extrabold">{review}</p>
              <p className=" text-center gap-8 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam perspiciatis incidunt ipsum non error veniam architecto placeat molestiae facere!</p>
              </div>

            ))
          }
        </div>
         <div className="py-12 mx-auto flex flex-col gap-4 items-center bg-black text-white" >
                <h1 className="text-5xl text-center [text-shadow:5px_5px_5px_rgba(59,130,246,0.7)]  max-md:text-2xl">
                  Unlock Your Learning Potential . <br /> Begin Your Journey Now!
                </h1>
                <button
                  to="login"
                  className="bg-[#525FE1] text-white py-2 px-4 mt-4 ml-2 rounded-md shadow-2xl cursor-pointer shadow-black shadow-xl  hover:scale-110 hover:shadow-blue-500"
                >
                  Start Now
                </button>
              </div>
      </section>

    </div>
  );
};

export default Home;
