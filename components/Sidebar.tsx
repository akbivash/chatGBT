'use client'
import NewChat from './NewChat'
import {FaTimes} from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/react'

import Modal from './Modal'
const Sidebar = () => {
// const openModal = () => {
// setIsModalOpen(true)
// }
  return (
    <>
   <div className='bg-[var(--text-primary)] text-white fixed left-0 w-full max-w-xs min-h-full p-2  md:block'>
  <NewChat/>
  <span className='absolute right-[-3rem] top-2 text-2xl  border-[1px] border-[#777] p-2 rounded-sm md:hidden'><FaTimes/></span>
  <div>
  </div>

</div>
</>
  )
}

export default Sidebar