import React from 'react';

const AuthorCard = ({ img, name, bg, width = 100, fontSize = 12 }) => {
  const bgColor = bg ? bg : 'rgba(109, 86, 101, 0.5)';

  return (
    <div className={`w-[100%] px-2 m-auto box-border mt-32 rounded-full flex relative group cursor-pointer text-black`}
    style={{backgroundColor:bgColor}}>
      <div className='w-[20%] py-1 box-border rounded-full'>
        <img className='h-11 object-fill rounded-full' src={img} />
      </div>
      <div className='w-[50%] mt-2'>
        <p className={`text-[${fontSize}px]`}>AUTHOR</p>
        <p className={`font-bold text-[${fontSize + 5}px]`}>{name}</p>
      </div>
      <div className='w-[40%] absolute -right-5 group-hover:-right-9 transition-all'>
        <svg className='mt-4' width={width} height="15" viewBox="0 0 119 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M118.707 8.20711C119.098 7.81658 119.098 7.18342 118.707 6.79289L112.343 0.428932C111.953 0.0384078 111.319 0.0384078 110.929 0.428932C110.538 0.819457 110.538 1.45262 110.929 1.84315L116.586 7.5L110.929 13.1569C110.538 13.5474 110.538 14.1805 110.929 14.5711C111.319 14.9616 111.953 14.9616 112.343 14.5711L118.707 8.20711ZM0 8.5H118V6.5H0V8.5Z" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default AuthorCard;
