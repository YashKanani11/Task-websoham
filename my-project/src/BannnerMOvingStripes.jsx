import React from 'react'
const BannnerMOvingStripes = () => {
    const word = 'TRENDING TOPICS';
  return (
    <div className='my-32 relative'>
    <div className='absolute w-screen overflow-hidden rotate-[5deg]'>
        <div className='text-[20px] font-semibold tracking-tight py-2 bg-[#DBFF74] text-black flex w-[300%] justify-around animate-banner-strip'>{[...Array(20)].map((_, index) => (
        <p key={index}>{word}</p>
      ))}</div>
    </div>
    <div className='relative w-screen overflow-hidden rotate-[-5deg]'>
        <div className='text-[20px] font-semibold tracking-tight py-2 bg-black text-white flex w-[300%] justify-around animate-banner-strip-rev'>{[...Array(20)].map((_, index) => (
        <p key={index}>{word}</p>
      ))}</div>
    </div>
    </div>
  )
}

export default BannnerMOvingStripes