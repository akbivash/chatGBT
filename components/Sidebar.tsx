import React from 'react'



import { useGlobalContext } from '../context';
import ChatRow from './ChatRow'
import NewChat from './NewChat';

const Sidebar = () => {
const{isSidebarOpen, setIsSidebarOpen} = useGlobalContext()
let chats = [
  {
  id:11,
  title:'What is Next.js'
},
  {
  id:12,
  title:'Using Typescript '
},
  {
  id:13,
  title:'Explain SSR'
},
  {
  id:14,
  title:'Error boundary in React'
}
]


 
return (
    <>
     <div
    className={`${
      isSidebarOpen
        ? " parent block z-40 top-0  fixed md:relative   "
        : " hidden md:block  md:relative "
    }`}
  >
 <div className= 'parent bg-[var(--text-primary)] overflow-y-scroll h-screen w-[280px] text-white   ' >
 <NewChat/>
  <div className=' grid gap-6  mt-6'>
  {chats.map(c => {
    
      return <ChatRow key={c.id} text={c.title}  />
    })}
  </div>
 
  </div>
  

</div>
</>
  )
}

export default Sidebar