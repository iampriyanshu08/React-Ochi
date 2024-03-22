import { motion,useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]
  const handleHover = (index) => {
    cards[index].start({y:'0'}); 
  }
  const handleHoverEnd = (index) => {
    cards[index].start({y:'100%'}); 
  }
  return (
    
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-10 border-zinc-700">
        <h1 className='text-[4vw] font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex mt-20  gap-10 ">
          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer w-1/2 h-[70vh] relative ">
            <h1 className=" flex absolute right-0 text-[#CDEA68] overflow-hidden z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 text-[7vw] font-bold leading-none tracking-tighter">
              {"FYDE".split(" ").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} key={index} className="inline-block">{item}</motion.span>
              ))}
            </h1>

            <div className=" card w-full h-full  rounded-xl  overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer w-1/2 h-[70vh] relative">
            <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 text-[7vw] font-bold leading-none tracking-tighter">
              {"VISE".split(" ").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} key={index} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full  rounded-xl overflow-hidden">
              <img
                className="h-full w-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
