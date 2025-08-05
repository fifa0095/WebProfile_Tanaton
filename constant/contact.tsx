import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const contacts = [
    {
        id: 1,
        icon: <FaGithub className='w-6 h-6' />,
        url: 'https://github.com/fifa0095'
    },
    {
        id: 2,
        icon: <FaLinkedinIn className='w-6 h-6' />,
        url: 'https://www.linkedin.com/in/tanaton-phukanngam-10597a28a/'
    },
]

type Props = {
  containerStyles?: string;
  iconStyles?: string;
}

const Contact = ({ containerStyles = '', iconStyles = '' }: Props) => {
  return (
    <div className={containerStyles}>
      {contacts.map((item) => (
        <Link key={item.id} href={item.url} className={`${iconStyles} text-gray-600 hover:text-purple-500 transition-all duration-200`}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Contact