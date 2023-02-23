import React from 'react'
import {BsFillSunFill, BsArrowRight } from 'react-icons/bs';
import {BiError} from 'react-icons/bi'
import {AiOutlineThunderbolt} from 'react-icons/ai'

const HomePage = () => {
  return (
    
    <div className=' page min-h-[100vh] '>
        <h5 className='text-center text-4xl font-bold py-16'>ChatBPT</h5>
        <div className='grid gap-10 md:flex items-center'>
            <div className='grid example gap-4'>
                <span className='heading'><BsFillSunFill/> Examples</span>
                <p className='flex items-center gap-2'>What is OpenAi<BsArrowRight/></p>
                <p className='flex items-center gap-2'>Where was Budhdha born<BsArrowRight/></p>
                <p className='flex items-center gap-2'>What is the difference between SSR and CSR <BsArrowRight/></p>
            </div>
      
            <div className='grid  gap-4'>
                <span className='heading'><AiOutlineThunderbolt/> Capabilities</span>
                <p>Remembers what user said earlier in the conversation</p>
                <p>Allows user to provide follow-up corrections</p>
                <p>Trained to decline inappropriate requests</p>
            </div>
          
            <div className='grid  gap-4'>
                <span className='heading'><BiError/> Limitations</span>
                <p>May occasionally generate incorrect information</p>
                <p>May occasionally produce harmful instructions or biased content</p>
                <p>Limited knowledge of world and events after 2021</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage