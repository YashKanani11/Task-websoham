import React, { useState, useEffect, useRef } from 'react';
import './SC.css';
import AuthorCard from '../AuthorCard';

const SC = () => {
  const [idx, setIdx] = useState(0);
  const [clickable, setClickable] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const container = document.querySelector(".container");
    const speed = 250;

    const resetAnimation = () => {
      this.style.WebkitAnimation = "";
      this.style.animation = "";
    };

    const setAnimation = (slide) => {
      slide.style.WebkitAnimation = `move ${speed}ms`;
      slide.style.animation = `move ${speed}ms`;
      slide.addEventListener("webkitAnimationEnd", resetAnimation);
      slide.id = `slide_${4}`;
    };

    const moveThis = (e) => {
      if (clickable && e.target.classList.contains("slide")) {
        setClickable(false);
        let newIdx = idx + 1;
        if (newIdx === 4) newIdx = 0;

        let siblingNext = slides[newIdx].nextElementSibling;
        let siblingPrev = slides[newIdx].previousElementSibling;
        let prev = slides[0].parentElement.children.length - 1;
        let next = 1;

        setAnimation(slides[newIdx]);

        while (siblingNext) {
          siblingNext.id = `slide_${next}`;
          siblingNext = siblingNext.nextElementSibling;
          next++;
        }

        while (siblingPrev) {
          siblingPrev.id = `slide_${prev}`;
          siblingPrev = siblingPrev.previousElementSibling;
          prev--;
        }

        setIdx(newIdx);
        setTimeout(() => setClickable(true), speed);
      }
    };

    container.addEventListener("click", moveThis);

    const videoElement = videoRef.current;
    videoElement.addEventListener('click', (e) => e.stopPropagation());

    return () => {
      container.removeEventListener("click", moveThis);
      videoElement.removeEventListener('click', (e) => e.stopPropagation());
    };
  }, [clickable, idx]);

  return (
    <div className="container">
      <div id='slide_1' className="slide img_1 overflow-hidden object-fit relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          ref={videoRef}
        >
          <source src='https://s3-figma-videos-production-sig.figma.com/video/984790381755042020/TEAM/3afe/2080/-7869-4659-837c-613385238096?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAB~BdO995BOpJezV858tQ7NWhFE6rQj3kfmI4FRNymMsTpYeCjdQspzoNbujsxUJm00wqiMkxW2I~BoiJJaCdXhfLQAR62Lcd0JU78NF9USyFP3mbx41OfnYMtwXG2iP6uJVN1AngP3ea58t5w~Sz3UO~gZUtB8aOvntcsxbX0jo0o2rECOfhS1kQeb48xcrnY4xDxvobUQD4JnOQRPEWE6XdM5XeM7dOfliUFFwuzBzdlN86ZRuCp3TB0lriedOkrK8G0vnSOcq8VSlWhgK8F3UEVXR0v5C3Owh9JwB3H5SCGGg1C0vmNkpubY2lUwEN-V6u2j65sqPvfikXs-ng__' type="video/mp4" />
        </video>
        <div className='absolute -top-28 right-0 w-[300px]'>
        <AuthorCard img={'https://s3-alpha-sig.figma.com/img/fcac/b0f4/6928824ada6b549177833bafa4d16cfe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZ66Fak9nbdtkxA6svCnwMSYk~bF6BWuVOcoUkJa60ORvpKHsdSY5pxCeGYC6WHw4HuDR2WO984QKdxgce-Q3vAoKhl6Q8~ijPdu41f571la-z5Pvhj4tw5hh~trdV0BW8Tp2X1f5LWslayIfortcWvHuaSFI005Qx3zqNCRaU5n5tjtQn2SfkcCCZjxIr9xObEBZPR3JIztUPxB0Cr87G9t1uXPGDBlNPpCDVUUZwbtDD0VpjIHsIjaSMRIIK5QaJ-4ciqiewkr-HFVov7vNslEIkXlQrsW220nx9pabj0~N94gLQikIShgmGKdxyL9OX4-CbZEcPFj6OeGnqbToA__'} name={'SARAH WHITES'} width={69} fontSize={10}/>
        <div className='flex justify-end relative'>
            <svg className='left-10 top-8 absolute' width="632" height="3" viewBox="0 0 782 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-0.00012207" y1="1.23535" x2="152.002" y2="1.23535" stroke="white" stroke-width="2"/>
            </svg>
            <div className=''>              
              <div className='flex justify-end px-4'>              
                <div className='m-2 w-[70px] text-center bg-[#DBFF74] px-2 py-1 rounded-md font-[Archivo] text-black text-[12px]'>
                  EXPLORE
                </div>
              </div>
              <div className='m-2 w-[200px] flex justify-end pe-6 rounded-lg font-[Archivo] text-[12px] text-right text-black'>
                MARCH 20, 2024
              </div>
            </div>
            </div>
        </div>
      </div>
      <div id='slide_2' className="slide img_2"></div>
      <div id='slide_3' className="slide img_3  overflow-hidden object-fit relative">
      <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          ref={videoRef}
        >
          <source src='https://s3-figma-videos-production-sig.figma.com/video/984790381755042020/TEAM/3afe/2080/-7869-4659-837c-613385238096?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAB~BdO995BOpJezV858tQ7NWhFE6rQj3kfmI4FRNymMsTpYeCjdQspzoNbujsxUJm00wqiMkxW2I~BoiJJaCdXhfLQAR62Lcd0JU78NF9USyFP3mbx41OfnYMtwXG2iP6uJVN1AngP3ea58t5w~Sz3UO~gZUtB8aOvntcsxbX0jo0o2rECOfhS1kQeb48xcrnY4xDxvobUQD4JnOQRPEWE6XdM5XeM7dOfliUFFwuzBzdlN86ZRuCp3TB0lriedOkrK8G0vnSOcq8VSlWhgK8F3UEVXR0v5C3Owh9JwB3H5SCGGg1C0vmNkpubY2lUwEN-V6u2j65sqPvfikXs-ng__' type="video/mp4" />
        </video>
        <div className='absolute -top-28 right-0 w-[300px]'>
        <AuthorCard img={'https://s3-alpha-sig.figma.com/img/fcac/b0f4/6928824ada6b549177833bafa4d16cfe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZ66Fak9nbdtkxA6svCnwMSYk~bF6BWuVOcoUkJa60ORvpKHsdSY5pxCeGYC6WHw4HuDR2WO984QKdxgce-Q3vAoKhl6Q8~ijPdu41f571la-z5Pvhj4tw5hh~trdV0BW8Tp2X1f5LWslayIfortcWvHuaSFI005Qx3zqNCRaU5n5tjtQn2SfkcCCZjxIr9xObEBZPR3JIztUPxB0Cr87G9t1uXPGDBlNPpCDVUUZwbtDD0VpjIHsIjaSMRIIK5QaJ-4ciqiewkr-HFVov7vNslEIkXlQrsW220nx9pabj0~N94gLQikIShgmGKdxyL9OX4-CbZEcPFj6OeGnqbToA__'} name={'WHITES SARAH'} width={69} fontSize={10} bg={'white'}/>
        <div className='flex justify-end relative'>
            <svg className='left-10 top-8 absolute' width="632" height="3" viewBox="0 0 782 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-0.00012207" y1="1.23535" x2="152.002" y2="1.23535" stroke="white" stroke-width="2"/>
            </svg>
            <div className=''>              
              <div className='flex justify-end px-4'>              
                <div className='m-2 w-[70px] text-center bg-[#DBFF74] px-2 py-1 rounded-md font-[Archivo] text-black text-[12px]'>
                  EXPLORE
                </div>
              </div>
              <div className='m-2 w-[200px] flex justify-end pe-6 rounded-lg font-[Archivo] text-[12px] text-right text-black'>
                FEB 20, 2023
              </div>
            </div>
            </div>
        </div>
      </div>
      <div id='slide_4' className="slide img_4"></div>
    </div>
  );
};

export default SC;
