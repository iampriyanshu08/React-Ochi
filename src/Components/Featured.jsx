import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-10 border-zinc-700">
        <h1 className='text-[4vw] font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex mt-20  gap-10 ">
          
          <div className="cardcontainer w-1/2 h-[70vh] relative ">
            <h1 className="absolute left-full text-[#CDEA68] z-[9] -translate-x-1/2 -translate-y-1/2 top-1/2 text-[7vw] font-bold leading-none tracking-tighter">
            <h1 className="absolute right-full text-[#CDEA68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 text-[7vw] font-bold leading-none tracking-tighter">
          {"FYDE".split(" ").map((item,index)=> <span>{item}</span>)}
          </h1>
            </h1>
            <div className=" card w-full h-full  rounded-xl  overflow-hidden">
                <img className="w-full h-full bg-cover rounded-xl" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[70vh] relative">
          <h1 className="absolute right-full text-[#CDEA68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 text-[7vw] font-bold leading-none tracking-tighter">
          {"VISE".split(" ").map((item,index)=> <span>{item}</span>)}
          </h1>
            <div className=" card w-full h-full  rounded-xl overflow-hidden">
                <img className="h-full w-full bg-cover rounded-xl" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
