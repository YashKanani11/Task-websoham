import React from 'react';
import { motion } from 'framer-motion';
const FallingBoxes = ({ text, deg = 12, left = 0, bottom = 0, durration=2 }) => {
  const boxStyle = {
    // transform: `rotate(${deg}deg)`,
    left: `${left}px`,
    bottom: `${bottom}px`,
    cursor: text ? 'pointer' : 'normal',
  };

  const boxClass = text ? 'hover:bg-gray-300' : '';

  return (
    <motion.div
      className={`rounded-2xl px-3 py-1 absolute w-1/2 h-full border-[1px] border-black text-center uppercase ${boxClass}`}
      style={boxStyle}
      animate={{ y: 0, rotate:`${deg}deg`,opacity:1 }}
      initial={{ y: -1000, rotate:`${deg}deg`,opacity:0.6 }}
      transition={{ duration: `${durration+1.5}`, ease: 'backInOut' }}
    >
      {text}
    </motion.div>
  );
};

export default FallingBoxes;
