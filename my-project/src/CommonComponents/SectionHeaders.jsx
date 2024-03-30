import React from 'react';

const SectionHeaders = ({ mainHead1, mainHead2, subHead, para, accentColor, mainColor = '#000000' }) => {
  return (
    <div className="flex justify-between border-b-2 pb-4" style={{borderColor: mainColor}}>
      <p className={`text-6xl font-extralight`} style={{color:accentColor}}>{mainHead1}<span className="text-6xl font-extralight text-white" style={{ color: mainColor }}> {mainHead2}</span></p>
      <div className="mt-3" style={{ color: mainColor }}>
        <p className="text-2xl" style={{ color: mainColor }}>{subHead}</p>
        <p className="font-extralight text-sm">{para}</p>
      </div>
    </div>
  );
};

export default SectionHeaders;
