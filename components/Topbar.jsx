import { useGlobalContext } from '@/context'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

const Topbar = () => {
  const{isSidebarOpen, setIsSidebarOpen} = useGlobalContext()
  return (
    <div className=' z-20  top-0 fixed w-full flex justify-between items-center text-xl  mx-auto text-white px-4 py-2 border-b-[1px] bg-[var(--text-secondary)] border-b-[var(--text-secondary-1)] md:hidden'>
        <GiHamburgerMenu onClick={() => setIsSidebarOpen(true)} className='cursor-pointer' />
        New chat
        <FaPlus className='cursor-pointer'/>
    </div>
  )
}

export default Topbar