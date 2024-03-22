import React, { useEffect, useState } from "react";

const EyesGame = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltax = (mousex - window.innerWidth / 2);
      let deltay = (mousey - window.innerHeight / 2);

      let angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setrotate(angle-180)
    });
  });

  return (
    <div className="eyesgame w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 ">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full  flex items-center justify-center">
            <div  className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
           
              <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line h-10 w-full ">
             
               
                <div className="w-10 h-10 bg-zinc-200 rounded-full">
                
                </div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full  relative">
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line h-10 w-full ">
                <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesGame;
