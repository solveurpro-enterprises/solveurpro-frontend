import React from 'react'

const servicesList=[
    {
        serviceName:"Tutoring Services",
        serviceImage:"https://t4.ftcdn.net/jpg/01/17/55/73/240_F_117557370_Mvkdh6CKeD3rizV7em3sAyAuymc36lMI.jpg",
        description:`Our platform is dedicated to providing  <strong>quality education </strong> through  <strong>expert tutors </strong> who are passionate about helping students excel. We understand that every student has unique learning needs, which is why we offer  <strong>personalized tutoring sessions </strong> tailored to individual goals. Whether it's mastering a challenging subject, improving academic performance, or preparing for exams, our tutors provide the guidance and support needed to boost confidence and achieve success. With a focus on  <strong>skill development </strong> and  <strong>academic growth </strong>, we empower students to reach their full potential. Join us to experience a transformative learning journey that paves the way for  <strong>long-term success </strong> in studies and beyond.`,
        images:["https://t3.ftcdn.net/jpg/05/13/25/32/240_F_513253237_UQv6e1YHZwqpWA9ocs2JSAz53FjnWVp6.jpg","https://t3.ftcdn.net/jpg/06/90/24/90/240_F_690249065_m3PrL5CxlQrXpIwYlt3UpyMb4KKToRNq.jpg","https://t3.ftcdn.net/jpg/09/89/54/00/240_F_989540086_D7oRxkiVxaSaUTly18F1dJ9usUKGbt77.jpg","https://t3.ftcdn.net/jpg/02/54/37/88/240_F_254378815_JNYBpNsYpD8uYGlTIF21tIfoUq6d7WYH.jpg"]
    },
    {
        serviceName:"Job Enablement Training",
        serviceImage:"https://t3.ftcdn.net/jpg/00/78/69/42/240_F_78694248_ddLDfY4vPPNremtCdgIilda8QIAszGQT.jpg",
        description:`At our platform, we focus on empowering individuals with <strong className="extra-bold"> practical training</strong> that bridges the gap between learning and real-world application. Our goal is to equip learners with  <strong>industry-relevant skills </strong> that are in demand, ensuring they are job-ready. Through hands-on exercises, real-life projects, and expert guidance, we help individuals  <strong>build confidence </strong> and  <strong>enhance their employability </strong>. Whether you're a beginner or looking to upskill, our training programs are designed to open doors to  <strong>better job opportunities </strong> and career growth. Join us to gain the skills you need to succeed in today's competitive job market and take the next step toward a brighter future. `,
        images:["https://t3.ftcdn.net/jpg/02/13/59/40/240_F_213594025_gAzvAKRuB2uYrfBc88HhwSZBb1M4eWWA.jpg","https://t4.ftcdn.net/jpg/02/99/09/03/240_F_299090379_RRQ5PXFlnx5BqHUSf7JDKVha2UcyJCVa.jpg","https://t4.ftcdn.net/jpg/01/20/23/89/240_F_120238930_3xXZFCXVUQpTh6zLowtImG8lA6VS6ME0.jpg","https://t4.ftcdn.net/jpg/02/20/51/13/240_F_220511384_iAdjbJgoYDqsAXzcPdD6WKHlTM5ib1G9.jpg"]
    },
    {
        serviceName:"Recruitment Consultancy (National & International)",
        serviceImage:"https://t3.ftcdn.net/jpg/12/35/25/22/240_F_1235252297_8nURmK8Y0836eqpwEH1EZV1mlw1yEMkg.jpg",
        description:"On our <strong>Services</strong> page, we bridge the gap between job seekers and employers, offering a seamless platform for career growth and talent acquisition. If you're <strong>looking for a job</strong> we connect you with top-tier national and international opportunities tailored to your skills and aspirations. For <strong>businesses seeking talent</strong>, we specialize in finding the right candidates to meet your organizational needs. Our platform is designed to empower individuals in their career journeys while helping companies build strong, capable teams. Whether you're taking the next step in your career or searching for the perfect hire, we’re here to make the process efficient, effective, and rewarding.",
        images:["https://t3.ftcdn.net/jpg/10/38/54/34/240_F_1038543401_aChIFfqubPtebV13iFFvCiZmXCJrF31W.jpg","https://t3.ftcdn.net/jpg/12/35/25/54/240_F_1235255431_O67lZ3ZGSdccQIz8TglfjWpWxQ8n2WcA.jpg","https://t4.ftcdn.net/jpg/12/27/15/39/240_F_1227153980_iR4SHmnunY6ludFsIGTyk4o155ELbNjb.jpg","https://t3.ftcdn.net/jpg/08/21/64/04/240_F_821640428_77v7GAV1R6XjrZoNmfMJacBnRLOMRsct.jpg"]
    },
    {
        serviceName:"Entrepreneurship Support)",
        serviceImage:"https://t3.ftcdn.net/jpg/02/25/21/90/240_F_225219042_IYmgKlvIe9kHY5MGbi1aOGjsSqkJkWbt.jpg",
        description:"This service is designed for aspiring entrepreneurs who dream of starting their own business. We offer comprehensive support, including  <strong>guidance </strong>,  <strong>mentorship </strong>, and  <strong>resources </strong>, to help you transform your ideas into successful ventures. Whether you're at the idea stage or ready to launch, our platform connects you with experienced mentors and provides access to essential tools and knowledge. From business planning to execution strategies, we empower you to overcome challenges and achieve your entrepreneurial goals. Join us to turn your vision into reality and build a thriving business with confidence. Let’s take the first step toward your entrepreneurial journey together! ",
        images:["https://t4.ftcdn.net/jpg/01/45/28/11/240_F_145281104_B7PcM9gFEioGvi2IBWBLzb0FbDm9Ur3V.jpg","https://t4.ftcdn.net/jpg/01/36/10/25/240_F_136102521_Ze6tB9xRk63nmElWXqUtTWlvSQIyYVAx.jpg","https://t3.ftcdn.net/jpg/09/89/57/72/240_F_989577248_UnNodKem9TapvbArUoVXBn0B2J7SORoo.jpg","https://t3.ftcdn.net/jpg/00/55/88/80/240_F_55888096_mf4ah1SpQW0dFnHohzQRpW5KfuK15xvi.jpg"]
    },
    {
        serviceName:"Physically Challenged Students",
        serviceImage:"https://t3.ftcdn.net/jpg/12/35/25/22/240_F_1235252297_8nURmK8Y0836eqpwEH1EZV1mlw1yEMkg.jpg",
        description:" <strong>Specialized Tutoring for Physically Handicapped Students </strong> Our platform is committed to inclusivity by offering specialized paid tutoring for physically handicapped students. We understand the unique challenges faced by these learners and provide accessible, personalized learning support tailored to their needs. Our experienced tutors are trained to adapt teaching methods, ensuring a comfortable and effective learning environment. From customized study materials to assistive technology integration, we empower students to achieve their academic goals. This initiative reflects our entrepreneurial spirit, combining innovation with social responsibility to bridge educational gaps and create equal opportunities for all. Join us in making education accessible and inclusive for every learner.",
        images:["https://t3.ftcdn.net/jpg/06/26/20/54/240_F_626205475_Dspq0XJyMjEch27Nv61RISWuzXReasPs.jpg","https://t3.ftcdn.net/jpg/04/27/52/28/240_F_427522848_6XhQcN8rpNXDr8iPFfR8xLqM8zW1rqbo.jpg","https://t3.ftcdn.net/jpg/08/03/86/02/240_F_803860260_LcOsGMyWHoysj4FfnXPYaPe3GHJ7QDdm.jpg","https://t3.ftcdn.net/jpg/00/76/06/40/240_F_76064023_deiSbKhJFSm31haZpW5Q3wj1lMn4AxKe.jpg"]
    }
]

const Services = () => {
  return (
    <div>
        <h1 className='text-2xl text-red-600 mt-16 font-bold text-center'>Our Services</h1>
        <div>
            {
                servicesList.map((service,index)=>(
                    <div className='relative z-20 h-full my-4 py-4 rounded-lg overflow-hidden'>
                        <div className='  py-24 px-4'>
                        <h2 className='text-3xl uppercase max-w-7xl mx-auto font-bold underline text-red-500 mb-3'>{service.serviceName}</h2>
                        <p className='text-[#858585] max-w-7xl mx-auto px-2 md:px-4 lg:px-8  ' dangerouslySetInnerHTML={{ __html:service.description }}/>
                        <img src={service.serviceImage} className='absolute -z-40 bottom-0 left-0 right-0 top-0 h-full w-full object-cover' alt="" />
                        <div className='absolute -z-20 left-0 border-0 h-full w-full top-0  bg-black opacity-70'></div>
                        </div>

                        <div className='grid grid-cols-1 gap-2 max-w-6xl mx-auto md:grid-cols-2 px-4 lg:grid-cols-4 lg:gap-4'>
                        {
                            service.images.map((image,index)=>(
                                <div className='h-full overflow-hidden rounded-lg pb-8'>
                                <img src={image} className='h-full w-[80%] mx-auto object-cover rounded-lg scale-125 transition-all hover:scale-150  '/>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services