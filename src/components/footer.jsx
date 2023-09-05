import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const links = [
    {
      link: "https://www.facebook.com/groups/317124549204105",
      icon: FaFacebookF,
    },
    {
      link: "mailto:tjbioinformatics@gmail.com",
      icon: MdEmail,
    },
    {
      link: "https://www.instagram.com/tjbioinformatics/",
      icon: FaInstagram,
    }
  ]
  return (
    <div className='bg-gray-100'>
      <div className='max-w-screen-xl text-sm mx-auto py-10 px-4 sm:px-6 md:flex md:flex-col md:items-center justify-center text-center text-gray-500'>
        <div className="flex space-x-6 justify-center mb-4">
          {links.map(({link, icon: Icon}) => {
            return (
              <a href={link} target="_blank" rel="noreferrer" className='hover:bg-green-50 bg-white p-3 rounded-full shadow'>
                <Icon className='h-6 w-6' />
              </a>
            )
          })}
        </div>
        <p>&copy; TJ Bioinformatics Society | Developed and maintained by Sritan Motati</p>
      </div>
    </div>
  )
}

export default Footer