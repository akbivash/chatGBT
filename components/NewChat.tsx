import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const NewChat = () => {
  return (
    <div className='flex gap-2 items-center border-[1px] border-[#777] p-2 rounded-sm'>
        <AiOutlinePlus/> New chat
    </div>
  )
}

export default NewChat