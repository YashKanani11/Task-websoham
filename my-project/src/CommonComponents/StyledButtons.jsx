import React from 'react';

const StyledButtons = ({ text, bg,bgvid, textColor, height = '300px', border }) => {
    const borderColor = border ? border : 'rgba(0, 0, 0, 0)';
    const bgVidSrc=bgvid?bgvid:'';
    return (
        <div
            className={`w-full rounded-full text-center border-4 text-[30px] py-4 font-bold flex justify-around items-center border-transparent overflow-hidden bg-cover bg-center cursor-pointer`}
            style={{ height: height, borderColor: borderColor,background:bg, backgroundPosition:''}}
        >
            <video 
                src={bgVidSrc}
                autoPlay
                loop
                muted
                style={{ 
                    position: 'absolute', 
                    width: '20%', 
                    height: '20%',
                    objectFit: 'cover',
                    overflow:'hidden'
                }} 
            />
            <p style={{ color: textColor }}  className=''>{text}</p>
        </div>
    );
};

export default StyledButtons;
