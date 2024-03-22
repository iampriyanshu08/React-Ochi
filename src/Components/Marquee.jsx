import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004d43] '>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden uppercase gap-10'>
           
            <h1 className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-medium -mb-[6vw] pt-[3vw]'>We are ochi</h1>
            <h1 className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-medium -mb-[6vw] pt-[3vw]'>We are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee