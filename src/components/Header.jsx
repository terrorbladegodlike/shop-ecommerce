import React, { useContext, useEffect, useState } from 'react'

// Import Link
import { Link } from 'react-router-dom'

// Import SideBar Context
import { SiderbarContext } from '../contexts/SidebarContext'

// Import Cart Context
import { CartContext } from '../contexts/CartContext'

// Import Icons
import { BsBag } from 'react-icons/bs'

// Import Logo
import Logo from '../img/logo.svg'

const Header = () => {

  // Header State
  const [isActive, setIsActive] = useState(false)

  const { isOpen, setIsOpen } = useContext(SiderbarContext)
  const { itemAmount } = useContext(CartContext)

  // Event Listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt="logo" />
          </div>
        </Link>
        {/* Cart */}
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='absolute -right-2 -bottom-2 bg-red-500 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header