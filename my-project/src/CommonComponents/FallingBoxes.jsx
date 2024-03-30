import React from 'react';

const FallingBoxes = ({ text, deg = 12, left = 0, bottom = 0 }) => {
  const boxStyle = {
    transform: `rotate(${deg}deg)`,
    left: `${left}px`,
    bottom: `${bottom}px`,
    cursor: text ? 'pointer' : 'normal',
  };

  const boxClass = text ? 'hover:bg-gray-300' : '';
  const boxShadow = text ? 'hover:scale-110' : '';

  return (
    <div className={`rounded-2xl px-3 py-1 absolute w-1/2 h-full border-[1px] border-black text-center uppercase ${boxClass} ${boxShadow}`} style={boxStyle}>
      {text}
    </div>
  );
};

export default FallingBoxes;
