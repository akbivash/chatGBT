'use client'
import React from 'react'
// import Image from 'next/image'
import { signIn } from 'next-auth/react'
const Login = () => {
  return (
    <div className='bg-[#00A67E] flex flex-col justify-center items-center h-screen text-white'>
<img src="https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png" width={100} height={100}  alt="" />
<button onClick={() => signIn('google')}>Sign in to chat with ChatBPT</button>
    </div>
  )
}

export default Login