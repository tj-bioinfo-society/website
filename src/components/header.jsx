import { Link } from 'gatsby'
import React, { useCallback, useEffect, useState } from 'react'
import Hamburger from 'react-hamburger-menu'

const Header = () => {
  const [scrollState, setScrollState] = useState('top') // for navbar bg transition
  const [open, setOpen] = useState(false) // for mobile hamburger menu
  let listener = null
  useEffect(() => {
    listener = document.addEventListener('scroll', e => {
      const scrolled = document.scrollingElement.scrollTop
      if (scrolled > 0) {
        if (scrollState != 'scroll') {
          setScrollState('scroll')
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  const navigation = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Resources",
      path: "/resources",
    },
    {
      text: "Lectures",
      path: "/lectures",
    },
  ]
  return (
    <nav className={scrollState === 'top' ? "fixed inset-x-0 top-0 z-30 nav-top-animation" : "fixed inset-x-0 top-0 z-30 nav-scroll-animation"}>
      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
        <div className="flex justify-between md:justify-start h-16 items-center">
          <Link to='/'>
            <p className='font-bold text-xl text-white'>TJ Bioinformatics Society</p>
          </Link>
          <div className='hidden md:ml-8 md:flex space-x-8'>
            {navigation.map(link => {
              return (
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-gray-100 navLink outline-none items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none"
                  activeClassName="activeNavLinkOnTransparent activeNavLink outline-none focus:outline-none items-center px-1 pt-1 text-sm font-medium leading-5"
                >
                  {link.text}
                </Link>
              )
            })}
          </div>
          <Hamburger
            isOpen={open}
            menuClicked={useCallback(() => {
              setOpen((open) => !open)
            }, [])}
            width={18}
            height={15}
            strokeWidth={2}
            animationDuration={0.2}
            color="#FFFFFF"
            className='block md:hidden cursor-pointer justify-end'
          />
        </div>
      </div>
      <div className={(open ? `opacity-100 ${scrollState === 'top' && "pt-2"} visible` : "opacity-0 invisible") + " block md:hidden duration-200 ease-linear absolute w-full top-full bg-gray-800 left-0 shadow"}>
            {navigation.map(link => {
              return (
                <Link
                  to={link.path}
                  className="w-full mb-2 block pl-3 pr-4 py-2 outline-none border-l-4 mobileInactiveBorder hover:bg-gray-700 hover:text-gray-200 items-center text-md font-medium leading-5 text-gray-300 focus:outline-none"
                  activeClassName="w-full mobileActiveBorder block pl-3 pr-4 py-2 bg-gray-600 hover:bg-gray-600 outline-none focus:outline-none items-center text-md font-medium leading-5 text-gray-200 hover:text-gray-200"
                >
                  {link.text}
                </Link>
              )
            })}
          </div>
    </nav>
  )
}

export default Header