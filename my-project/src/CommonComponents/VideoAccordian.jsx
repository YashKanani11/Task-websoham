import React, { useState } from 'react'

const VideoAccordian = ({bold,normal,videosrc}) => {
    const [isHovered, setIsHovered] = useState(false);
    const playVideo = () => {
        setIsHovered(true);
    };
    const pauseVideo = () => {
        setIsHovered(false);
    };
  return (
    <div className='flex flex-col'>
              <div className='cursor-pointer flex justify-between text-[25px] border-b-2 group transition-all hover:bg-[#B287FD] pb-5 mt-5 hover:bg-opacity-25 rounded-2xl px-7 relative' onMouseEnter={playVideo}
              onMouseLeave={pauseVideo}>
                <p className='bg-transparent group-hover:scale-105 border-b-4 border-b-transparent group-hover:border-b-[#dbff74]'><span className='font-bold'>{bold}</span> {normal}</p>
                <span className=' group-hover:scale-110 rotate-[15deg] '>↗</span>
                {isHovered && (<div className='
                 overflow-hidden rounded-2x absolute -top-[240%] left-[40%] w-[300px] h-[300px]'>
                    <video
                        className='rounded-2xl max-w-full max-h-full'
                        controls
                        src={videosrc}
                        type='video/mp4'
                        autoPlay
                        loop
                        muted
                    />
                </div>)}
              </div>
            </div>
  )
}

export default VideoAccordian