import React from 'react'
import {BsFillSunFill, BsArrowRight } from 'react-icons/bs';
import {TbSend} from 'react-icons/tb'
import {BiError} from 'react-icons/bi'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import InputBox from './InputBox';

const HomePage = () => {
  return (
    
    <div className='relative h-screen bg-[#1b1b1b] page p-2 flex flex-col  bg-[var(--text-default)] parent  overflow-y-scroll '>
       <div className='flex-1 grid gap-16  pt-[4rem] md:h-[100vh] md:mb-12 mb-4 h-[90vh] overflow-y-scroll'>
       <h5 className='text-center text-4xl font-bold'>ChatBPT</h5>
        <div className='flex flex-col gap-3 md:flex-row '>
            <div className='grid example  gap-8 '>
                <span className='heading'><BsFillSunFill/> Examples</span>
                <p className='flex items-center gap-2'>What is OpenAi<BsArrowRight/></p>
                <p className='flex items-center gap-2'>Where was Budhdha born<BsArrowRight/></p>
                <p className='flex items-center gap-2'>What is the difference between SSR and CSR <BsArrowRight/></p>
            </div>
      
            <div className='grid gap-8  my-4'>
                <span className='heading'><AiOutlineThunderbolt/> Capabilities</span>
                <p>Remembers what user said earlier in the conversation</p>
                <p>Allows user to provide follow-up corrections</p>
                <p>Trained to decline inappropriate requests</p>
            </div>
          
            <div className='grid mb-4 gap-8'>
                <span className='heading'><BiError/> Limitations</span>
                <p>May occasionally generate incorrect information</p>
                <p>May occasionally produce harmful instructions or biased content</p>
                <p>Limited knowledge of world and events after 2021</p>
            </div>
        </div>
       </div>

     <InputBox chatId=''/>
    </div>
  )
}

export default HomePage