import React from 'react'
import Image from 'next/image'
const Main = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center flex-col ">
      <div className={`fixed inset-0 transform transition-all duration-500 z-[10] bg-black 
      opacity-70 w-full h-screen`}>
        
      </div>
      <div className="w-[90%] z-20 md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[2.5rem] md:leading-[3.5rem] ">
            Welcome to <span className='text-yellow-600'> My Portfolio </span></h1>
          <p className="text-xs md:text-base sm:text-sm text-gray-100 font-medium mb-6">
             I am a Computer Engineering graduate from KMUTT with strong interest in software development and building
            impactful digital solutions. I’ve worked on full-stack projects using React, Node.js, and Next.js during my
            academic. I enjoy writing clean, scalable code and continuously learning through hands-on work.
             With a solid technical foundation, I’m eager to grow as a Software Developer and drive
            meaningful innovation
          </p>
          <div className="flex items-center space-x-2">
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1  hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>

                <div className="relative text-white gird grid-cols-2 items-center space-x-2"> 
                  My LinkedIn
                </div>
            </a>
          </div>
        </div>
        {/* Image Content */}
        <div className="mx-auto hidden xl:block">
          <Image
          src="/images/Avatar.png"
          alt="image"
          width={500}
          height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Main