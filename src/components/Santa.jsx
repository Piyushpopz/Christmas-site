import React from 'react'


const Santa = () => {
  return (
    <div className="absolute bottom-12 right-24 z-30 pointer-events-none w-screen h-160">
      
      <div className="ml-50 mr-4 overflow-hidden w-screen h-150 ">
        <video
          src="./src/assets/clip santa.mp4"
          className=" w-2000 h-190 mt-12 ml-0 mr-0 p-0 object-cover rounded-2xl shadow-lg border-0 opacity-10"
          autoPlay
          muted
          loop
        
        />
      </div>

    </div>
  );
};

export default Santa;
