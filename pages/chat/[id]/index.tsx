
import InputBox from '@/components/InputBox';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useState , useEffect} from 'react';

import { useGlobalContext } from '../../../context';
import Chat from '@/components/Chat';
import { useRouter } from 'next/router';


const Page = () => {
  const router = useRouter()
const{isSidebarOpen, setIsSidebarOpen} = useGlobalContext()

useEffect(() => {
  setIsSidebarOpen(false)

  
},[router.pathname])
  return (
    <div className='bg-[var(--text-default)] flex '>
      <Topbar/>
  <div
    className={`${
      isSidebarOpen
        ? " parent block z-40  fixed md:relative   "
        : " hidden md:block  md:relative "
    }`}
  >
    <Sidebar />
  </div>
    <div className='bg-[var(--text-default) ] w-full min-h-screen'>
      <Chat  />
    </div>
       </div>
  )
}

export default Page