import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-40 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div className="masker" key={index}>
           
            <div className="w-fit flex items-end overflow-hidden">
            {index ===1 && ( <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1] ,duration:2, repeat:Infinity}}
            className=" mr-[1vw] w-[8vw] rounded-md h-[5.7vw]  relative -top-[1.2vw]">
              <img className="w-full h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>)}
              <h1 className=" pt-[2vw] -mb-[1vw] uppercase flex items-center text-[9vw] leading-[.75] font-bold  font-['Founders_Grotesk_X']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[2px] border-zinc-800 mt-20 capitalize flex justify-between items-center py-5 px-20">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none " key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3 ">
          <div className="px-5 py-2 border-[2px] border-zinc-400 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[2px] border-zinc-400 flex items-center justify-center ">
            <span>
              <GoArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
