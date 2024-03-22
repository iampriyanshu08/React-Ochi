import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900  flex gap-5 px-20 items-center' >
<div className="cardcontainer w-1/2 h-[50vh]">
    <div className="card w-full h-full  bg-[#004D43] rounded-xl flex items-center justify-center relative">
        <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-7 bottom-7 px-3 py-1  border-[#CDEA68] border-2 rounded-full text-[#CDEA68] text-sm'>&copy;2020-2024</button>
        
    </div>
    
</div>
<div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
    <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
    <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
    <button className='absolute left-7 bottom-7 px-3 py-1  border-[#ccc] border-2 rounded-full text-[#ccc] text-sm uppercase'>rating 5.0 on clutch</button>
    </div>


    <div className="card w-1/2 h-full bg-[#212121] rounded-xl relative flex items-center justify-center">
    <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
    <button className='absolute left-7 bottom-7 px-3 py-1  border-[#ccc] border-2 rounded-full text-[#ccc] text-sm uppercase'>business bootcamp alumuni</button>
    </div>
</div>


    </div>
    </>
  )
}

export default Cards