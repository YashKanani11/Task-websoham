import React, { useState } from 'react'
import SectionHeaders from './CommonComponents/SectionHeaders'
import StylesCard from './CommonComponents/StylesCard'
import {VideoAccordianData} from '/src/Data/VideoAccordianData.jsx'
import VideoAccordian from './CommonComponents/VideoAccordian'
import AuthorCard from './CommonComponents/AuthorCard'
const FeaturedBlogs = () => {
  const [acoordian,_] =useState(VideoAccordianData)
  return (
    <section className='mt-8 px-20'>
        <SectionHeaders mainHead1={'Featured'} mainHead2={'Blogs'} subHead={'our top blogs'} para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} accentColor={'#b287fd'}/>
        <div className='grid grid-cols-3 gap-2 mt-10'>
          <div className='col-span-1 p-2 relative'>
            
            <StylesCard title={'What is Bridal Shower ?'} mainbg={'#B287FD'} category={'EXPLORE'} 
            date={'APRIL 20, 2024'} alignTop={-130} imgsrc={'src/assets/images/Bridal_shower.png'}/>
            <div className='w-[290px] absolute bottom-20 left-10'>
            <AuthorCard img='https://s3-alpha-sig.figma.com/img/fcac/b0f4/6928824ada6b549177833bafa4d16cfe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZ66Fak9nbdtkxA6svCnwMSYk~bF6BWuVOcoUkJa60ORvpKHsdSY5pxCeGYC6WHw4HuDR2WO984QKdxgce-Q3vAoKhl6Q8~ijPdu41f571la-z5Pvhj4tw5hh~trdV0BW8Tp2X1f5LWslayIfortcWvHuaSFI005Qx3zqNCRaU5n5tjtQn2SfkcCCZjxIr9xObEBZPR3JIztUPxB0Cr87G9t1uXPGDBlNPpCDVUUZwbtDD0VpjIHsIjaSMRIIK5QaJ-4ciqiewkr-HFVov7vNslEIkXlQrsW220nx9pabj0~N94gLQikIShgmGKdxyL9OX4-CbZEcPFj6OeGnqbToA__' name='SARAM WHITES' fontSize={10} width={80}/></div>
          </div>
          <div className='col-span-2 mx-5 p-3'>
            {acoordian.map((e)=>{
              return(
                <VideoAccordian  bold={e.Bold} normal={e.Normal} videosrc={e.VideoSrc}/>
              )
            })}
          </div>
          <div className='col-span-1 p-2 relative'>
            <StylesCard title={'Best Waterproof Mascara'} mainbg={'#0f1b0e'} category={'BEAUTY'} 
            date={'March 20, 2024'} alignTop={-130} imgsrc={'src/assets/images/WaterProofMascara.png'}/>
            <div className='w-[290px] absolute bottom-14 left-10'>
            <AuthorCard img='https://s3-alpha-sig.figma.com/img/fcac/b0f4/6928824ada6b549177833bafa4d16cfe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZ66Fak9nbdtkxA6svCnwMSYk~bF6BWuVOcoUkJa60ORvpKHsdSY5pxCeGYC6WHw4HuDR2WO984QKdxgce-Q3vAoKhl6Q8~ijPdu41f571la-z5Pvhj4tw5hh~trdV0BW8Tp2X1f5LWslayIfortcWvHuaSFI005Qx3zqNCRaU5n5tjtQn2SfkcCCZjxIr9xObEBZPR3JIztUPxB0Cr87G9t1uXPGDBlNPpCDVUUZwbtDD0VpjIHsIjaSMRIIK5QaJ-4ciqiewkr-HFVov7vNslEIkXlQrsW220nx9pabj0~N94gLQikIShgmGKdxyL9OX4-CbZEcPFj6OeGnqbToA__' name='SARAM WHITES' fontSize={10} width={80}/></div>
          </div>
          <div className='col-span-2 relative'>
            <div className='mt-32 px-10 py-4 rounded-2xl bg-[#B287FD] cursor-pointer'>
            <div className='flex justify-end relative'>
            <svg className='left-10 top-8 absolute' width="632" height="3" viewBox="0 0 782 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-0.00012207" y1="1.23535" x2="792.002" y2="1.23535" stroke="black" stroke-width="2"/>
            </svg>
            <div className=''>              
              <div className='flex justify-end px-4'>              
                <div className='m-2 w-[100px] text-center bg-[#DBFF74] px-2 py-1 rounded-md font-[Archivo]'>
                  EXPLORE
                </div>
              </div>
              <div className='m-2 w-[200px] flex justify-end pe-6 rounded-lg font-[Archivo] text-[15px] text-right'>
                MARCH 20, 2024
              </div>
            </div>
            </div>
            <div className='w-[300px] absolute top-16 left-10'>
              <AuthorCard img='https://s3-alpha-sig.figma.com/img/fcac/b0f4/6928824ada6b549177833bafa4d16cfe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZ66Fak9nbdtkxA6svCnwMSYk~bF6BWuVOcoUkJa60ORvpKHsdSY5pxCeGYC6WHw4HuDR2WO984QKdxgce-Q3vAoKhl6Q8~ijPdu41f571la-z5Pvhj4tw5hh~trdV0BW8Tp2X1f5LWslayIfortcWvHuaSFI005Qx3zqNCRaU5n5tjtQn2SfkcCCZjxIr9xObEBZPR3JIztUPxB0Cr87G9t1uXPGDBlNPpCDVUUZwbtDD0VpjIHsIjaSMRIIK5QaJ-4ciqiewkr-HFVov7vNslEIkXlQrsW220nx9pabj0~N94gLQikIShgmGKdxyL9OX4-CbZEcPFj6OeGnqbToA__' name='SARAM WHITES' fontSize={10} width={80} bg={'white'}/>
            </div>
            <p className='text-[45px] me-36 pe-28 font-bold font-[Arcihvo] leading-tight mt-9'>
              What is best sewing machine for making clothes?
            </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FeaturedBlogs