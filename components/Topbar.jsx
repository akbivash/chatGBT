import React from 'react'
import { FaPlus } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
const Topbar = () => {
  return (
    <div className='fixed top-0 left-0 flex justify-between items-center text-xl w-full text-white px-4 py-2 border-b-[1px] border-b-[#777] md:hidden'>
        <GiHamburgerMenu/>
        New chat
        <FaPlus/>
    </div>
  )
}

export default Topbar