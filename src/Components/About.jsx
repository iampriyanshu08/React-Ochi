import React from "react";

const About = () => {
  return (
    <div className="w-full py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black font-thin">
      <h1 className='font-["Neue_Montreal"] text-[4vw] w-[80%] text-start mx-20 tracking-tight  leading-none'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to{" "}
        <span className="border-b-[2px] border-black">
          raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
          peo­ple.
        </span>{" "}
      </h1>
      <div className="w-full px-20 border-t-[1px] border-[#a1b562] mt-20  flex  ">
<div className="w-1/2">
    <h1 className=" text-[4vw] font-['Neue_Montreal']">Our approach:</h1>
    <button className=" uppercase bg-zinc-900 text-white px-10 py-4 rounded-full flex justify-center items-center gap-7 ">read more 
    <div className="w-2 h-2 rounded-full bg-white"></div></button>
</div>
<div className="w-1/2 h-[70vh]">
    <img className="rounded-2xl mt-5" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />

</div>
      </div>
    </div>
  );
};

export default About;
