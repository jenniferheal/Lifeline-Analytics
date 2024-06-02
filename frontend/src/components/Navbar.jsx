import { useState } from 'react'
import LoginLogoutButton from './LoginLogoutButton'
import UserDropdownMenu from './UserDropdownMenu'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const token = localStorage.getItem('jwtToken')

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Statistics', link: '/statistics' },
    { name: 'Resources', link: '/resources' },
    { name: 'Testimonials', link: '/testimonials' },
    { name: 'Login', link: '/login', requiresNoToken: true }
  ]

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const navbarButton = (
    isOpen
      ? <i className='fa-solid fa-xmark text-3xl text-[#F1F1E6] cursor-pointer md:hidden' />
      : <i className='fa-solid fa-bars text-3xl text-[#F1F1E6] cursor-pointer md:hidden' />
  )

  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-[#204B57] py-4 md:px-10 px-7'>
        <div className='font-bold text-xl cursor-pointer flex items-center text-[#F1F1E6]'>
          <Link to='/'><img className='w-[3rem]' src='/logo.png' alt='logo lifeline analytics' /></Link>
        </div>

        <div onClick={toggleNavbar} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
          {navbarButton}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#204B57] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-19 ' : 'top-[-490px]'}`}>
          {
            Links.filter(link => !(link.requiresNoToken && token)).map((link) => (
              <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                <Link to={link.link} className='text-[#A9D4E2] hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))
          }
          {token && <UserDropdownMenu />}
          <LoginLogoutButton token={token} />

        </ul>
      </div>
    </div>
  )
}
