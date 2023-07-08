import React, { useContext } from 'react'

// Import SideBar Context
import { SiderbarContext } from '../contexts/SidebarContext'
// Import Icons
import { BsBag } from 'react-icons/bs'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SiderbarContext)
  return (
    <header>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl' />
      </div>
    </header>
  )
}

export default Header