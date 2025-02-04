import React from 'react'
import male from '../assets/male-educator.jpg'
import female from '../assets/female-educator.jpg'
import student from '../assets/class.jpg'


const Home = () => {
  return (
    <div>
        {/* hero section */}
        <section>
            <div className='w-full bg-red-950 min-h-screen'>
            <div className='w-1/2 bg-red-900'>
                <ul>A platform for anyone to teach and students to learn from industry experts.</ul>
            {/* headlines */}
            <div>
                <h1 className='text-5xl'>
                    Get Matched With Expert Mentors For Your  Next Project Or Study Session.
                </h1>
                <div  className='w-full'>
                    <img src={male} alt="" className=' rounded-4xl w-[60%] aspect-video object-cover' />
                </div>
                <div>
                    <div>
                        <h1>Goal Tracking</h1>
                        <h2>Personalized Learning</h2>
                    </div>
                    <div>
                        <img src={female} alt="" /><img src={student} alt="" />
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Home