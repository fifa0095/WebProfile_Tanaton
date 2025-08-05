import React from 'react'
import Image from 'next/image'
import { FiDownload } from 'react-icons/fi'
import Contact from '@/constant/contact'
const Main = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center flex-col ">
      <div className={`fixed inset-0 transform transition-all duration-500 z-[10] bg-black 
      opacity-70 w-full h-screen`}>
        
      </div>
      <div className="w-[90%] z-20 md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h3 className="text-xl md:text-base sm:text-sm text-gray-100 font-medium mb-6"> Software Developer</h3>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[2.5rem] md:leading-[3.5rem] ">
            Welcome to <span className='text-yellow-600'> My Portfolio </span>
          </h1>
          <p className="text-xs md:text-base sm:text-sm text-gray-100 font-medium mb-6">
            Hello,I'm <span className='text-yellow-600 font-bold'> Tanaton Phukanngam </span>. I am a Computer Engineering graduate from KMUTT with strong interest in software development and building
            impactful digital solutions. I’ve worked on full-stack projects using React, Node.js, and Next.js during my
            academic. I enjoy writing clean, scalable code and continuously learning through hands-on work.
             With a solid technical foundation, I’m eager to grow as a Software Developer and drive
            meaningful innovation
          </p>
          <div className="flex items-center space-x-4">
            <a href="/files/Resume_Tanaton.pdf"download target="_blank" rel="noopener noreferrer"
             className="relative m- cursor-pointer inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>

                <div className="relative text-white flex items-center gap-2  space-x-2"> 
                  Dowload CV <FiDownload className='w-5 h-5' />
                </div>
            </a>
            {/* <div className='mb-6 xl:mb-0 '> */}
              <Contact  
              containerStyles='flex gap-6'
              iconStyles='w-9 h-9 border  border-purple-500 items-center flex rounded-full justify-center text-purple-500 text-base hover:bg-purple-500 hover:text-white hover:transition-all duration-500'/>
            {/* </div> */}
          </div>

        </div> 
        {/* Image Content */}
        <div className="mx-auto hidden xl:block">
          <Image
          src="/images/Avatar.png"
          alt="image"
          width={400}
          height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Main