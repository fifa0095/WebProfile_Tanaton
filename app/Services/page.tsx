"use client";
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "I create responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.",
        icon: <BsArrowDownRight className='w-6 h-6 text-purple-500' />
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "I design intuitive user interfaces and experiences that enhance usability and engagement across digital platforms.",
        icon: <BsArrowDownRight className='w-6 h-6 text-purple-500' />  
    },
    {
        num: "03",
        title: "API Development",
        description: "I build robust and scalable APIs using Node.js and Express, enabling seamless communication between front-end and back-end systems.",
        icon: <BsArrowDownRight className='w-6 h-6 text-purple-500' />
    },

    {
        num: "04",
        title: "Database Management",
        description: "I manage databases using MongoDB and MySQL, ensuring data integrity, security, and efficient data retrieval.",
        icon: <BsArrowDownRight className='w-6 h-6 text-purple-500' />      
    },
];

const Page = () => {
  return (
<section className='min-h-[80vh] flex flex-col justify-center py-8 sm:py-10 xl:py-0'>
      <div className="relative w-full min-h-[110vh] sm:min-h-screen bg-[url('/images/bg2.jpg')] bg-cover bg-center pt-[8vh] flex items-center justify-center flex-col">
        {/* Overlay */}
        <div className="absolute inset-0 z-[10] bg-black opacity-70 w-full h-full pointer-events-none"></div>

        {/* Content */}
        <div className="w-[90%]  z-20  md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-8 px-2 sm:px-6">
          <div className='flex flex-col space-y-6'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[2.2rem] sm:leading-[2.5rem] md:leading-[3.5rem]'>
              My Services
            </h1>
            <p className='text-gray-100 text-sm sm:text-base md:text-lg'>
              I offer a range of services to help you build and enhance your digital presence. From web development to cloud solutions, I have the expertise to bring your ideas to life.
            </p>
          </div>
          <div className='grid  grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-6 rounded-lg backdrop-blur-3xl '>
            {services.map((service, index) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: index * 0.07 }}
                className='p-4 sm:p-6 rounded-lg bg-white/10 shadow-lg hover:bg-black transition-shadow duration-300 flex flex-col'
              >
                <h2 className='text-lg sm:text-xl font-semibold text-purple-500'>{service.num}. {service.title}</h2>
                <p className='text-gray-400 mt-2 text-sm sm:text-base'>{service.description}</p>
                <Link href="/contact" className='mt-4 inline-flex items-center text-purple-500 hover:text-purple-700 transition-colors duration-300 text-sm sm:text-base'>
                  {service.icon}<span className="ml-1">Contact Me</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;