import { navLink } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean; 
  closeNav: () => void;
}

const MobileNav = ({closeNav,showNav}:Props) => {
  const navOpen = showNav? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black 
      opacity-70 w-full h-screen`}></div>

      {/* Mobile Nav Link */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all 
      duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-7 z-[1050]`}>
        {navLink.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className='text-white w-fit text-[20px] border-b-[1.5px] pb-1 ml-[20%] border-white sm:text-[30px]'>
                {link.label}
              </p>
            </Link>
          )
        })}
        <CgClose 
        onClick={closeNav}
        className='sm:w-8 sm:h-8 cursor-pointer absolute top-[0.7rem] right-[1.4rem] bg-black rounded-2xl w-6 h-6' />
      </div>
    </div>
  )
}

export default MobileNav