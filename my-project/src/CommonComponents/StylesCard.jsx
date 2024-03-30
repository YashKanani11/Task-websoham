import React from 'react';

const StylesCard = ({title,mainbg,category,date,alignTop,imgsrc}) => {
  return (
    <>
        <p className='text-pretty text-[30px]'>{title}</p>
        <div className='styledCard flex h-[340px] w-[390px] relative flex-col rounded-2xl overflow-hidden'>
      <div className='flex h-[12%]'>
        <div className='h-full w-[50%] rounded-tr-2xl' style={{ backgroundColor: mainbg }}></div>
        <div className='flex align-middle justify-center'>
          <svg className='mt-4 mx-2' width="100" height="2" viewBox="0 0 369 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="369" y2="1" stroke="black" strokeWidth="8" />
          </svg>
        </div>
        <div className='m-2 bg-[#DBFF74] px-2 py-0 rounded-lg font-[Archivo]'>
          {category}
        </div>
      </div>
      <div className='flex h-[12%]'>
        <div className='h-full w-[65%] rounded-tr-2xl' style={{ backgroundColor: mainbg }}></div>
        <div className='m-2 flex content-center justify-around px-2 py-0 rounded-lg font-[Archivo] text-[15px]'>
          {date}
        </div>
      </div>
      <div className='h-[76%] w-[100%] rounded-tr-2xl' style={{ backgroundColor: mainbg }}></div>

      <div className='cursor-pointer rounded-2xl overflow-hidden absolute h-[270px] w-[320px] top-9 left-5 flex flex-col'>
        <div className='flex h-[12%]'>
          <div className='h-full w-[45%] rounded-tr-2xl' style={{ backgroundImage: `url(${imgsrc})`, backgroundPosition:`0px ${alignTop}px ` }}></div>
        </div>
        <div className='flex h-[12%]'>
            <div className='h-full w-[65%] rounded-tr-2xl overflow-hidden relative' style={{ backgroundImage: `url(${imgsrc})`, backgroundPosition:`0px ${alignTop-30}px`  }}>
            </div>
        </div>

        <div className='cursor-pointer relative h-[76%] w-[100%] rounded-tr-2xl' style={{ backgroundImage: `url(${imgsrc})`, backgroundPosition:`0px ${alignTop-60}px`,}}>
          
        </div>
      </div>
    </div>
    </>
    
  );
};

export default StylesCard;
