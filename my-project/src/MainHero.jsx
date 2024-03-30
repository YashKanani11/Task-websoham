import React from 'react'
import AuthorCard from './CommonComponents/AuthorCard'
import FallingBoxes from './CommonComponents/FallingBoxes'

const MainHero = () => {
  return (<>
    <section className='grid grid-cols-3 mt-10 gap-7 mx-[150px]'>
        <div className='col-span-1 relative h-fit'>
            <div className='rounded-xl h-full'>
                <div className='aspect-w-16 aspect-h-10'>
                <video className='rounded-xl h-full object-cover' autoPlay loop muted>
                    <source src="https://s3-figma-videos-production-sig.figma.com/video/984790381755042020/TEAM/0e62/2610/-7f72-4b70-9c9a-73ead965e387?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FshN7~6iVHOJj5VfogueUXwJVO35oMVe07jqi88qQp82CjhocpknB8mOCvjpavt6ku9c6Tu992NW3hTFDUb6pANIVMAI8X08SWzunfqsa6v86yvuNQabWve3UoLutiUXdLkWDWLi0Xwzbiul-kx6C2t0DmPMMtqy4CVriQ3tyRdxy-r0i2HCEyaRo0WkYUXkYbC93FVY7cUsQE~JT~RMrG1fiH3ZoyL-VLrF73TYrx3gKMRwRfN9mAMim-1aj-Ee52EOwZmE~ampAkn-Yd-~7-6ciVvwGYgkqQJrW2JMsWAbw0b09GFl8Kn~KeMgUP09qJKFwLuunqiIQWCBlIFX9A__" type="video/mp4"/>
                    </video>
                </div>
                
            </div>
            <div className='backdrop-blur-md text-white absolute ml-[15%] py-1 px-2 bottom-16 w-[68%] bg-white/5 flex rounded-xl text-[30px] cursor-pointer hover:border-black hover:scale-105 transition-all'>VIEW BLOG<span className='absolute right-6 rotate-[15deg] '>↗</span></div>
        </div>
        <div className='col-span-2 relative grid grid-cols-2 h-fit'>
            <div className='col-span-1 h-fit'>
                <h1 className='text-[90px] h-[50%] font-bold leading-tight font-[Archivo]'>Beauty Trends Lifestyle</h1>
                <div className='bg-[#B287FD] py-1 rounded-lg text-[25px] mt-16'>
                    <div className='flex justify-between pb-4 cursor-pointer hover:scale-105 transition-all px-3'>
                        <p>DISCOVER</p>
                        <span className=' rotate-[15deg] '>↗</span>
                    </div>
                    <div className='h-32 w-[100%] overflow-hidden'>
                        <img className='w-full h-full object-cover' src='https://imgur.com/1TRfmY9.png'/>
                    </div>

                    <div className='text-[17px] py-3 px-3'>
                    “Unlocking Lush Lashes:<br/>
                    Your Guide to Best Volumizing Mascaras”
                    </div>
                </div>
            </div>
            <div className='col-span-1 px-7'>
                <AuthorCard img='https://s3-alpha-sig.figma.com/img/fcac/b0f4/6928824ada6b549177833bafa4d16cfe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZ66Fak9nbdtkxA6svCnwMSYk~bF6BWuVOcoUkJa60ORvpKHsdSY5pxCeGYC6WHw4HuDR2WO984QKdxgce-Q3vAoKhl6Q8~ijPdu41f571la-z5Pvhj4tw5hh~trdV0BW8Tp2X1f5LWslayIfortcWvHuaSFI005Qx3zqNCRaU5n5tjtQn2SfkcCCZjxIr9xObEBZPR3JIztUPxB0Cr87G9t1uXPGDBlNPpCDVUUZwbtDD0VpjIHsIjaSMRIIK5QaJ-4ciqiewkr-HFVov7vNslEIkXlQrsW220nx9pabj0~N94gLQikIShgmGKdxyL9OX4-CbZEcPFj6OeGnqbToA__' name='SARAM WHITES' bg='rgb(178,135,253)'/>
                <div className=' mt-10 p-2 pb-0 bg-gray-200 flex-col justify-between rounded-xl'>
                    <div className='flex justify-between cursor-pointer border-transparent hover:border-black px-4 transition-all rounded-xl bg-gray-200 hover:bg-gray-300'>
                        <p>VIEW ALL CATEGORIES</p>
                        <span className=' rotate-[15deg] '>↗</span>
                    </div>
                    <div className='h-[360px] mt-16 relative'>
                        <div className='h-full w-full border-red-500 flex flex-col justify-end'>
                        <div className='h-[12%] mx-auto w-[70%] relative'>
                                <FallingBoxes text={''} deg={-23} bottom={67}/>
                                <FallingBoxes text={''} deg={6} left={80} bottom={37}/>
                                
                            </div>
                            <div className='h-[12%] mx-auto w-[70%] relative'>
                                <FallingBoxes text={'intrest'} deg={13} left={-20} bottom={'40'}/>
                                <FallingBoxes text={'hobbies'} deg={13} left={120} bottom={'32'}/>
                                
                            </div>
                            <div className='h-[12%] mx-auto w-[70%] relative'>
                                <FallingBoxes text={'explore'} deg={13} bottom={38} left={'-40'}/>
                                <FallingBoxes text={'health'} deg={-17} left={70} bottom={26}/>
                                
                            </div>
                            <div className='h-[12%] mx-auto w-[70%] relative'>
                                <FallingBoxes text={'career'} deg={17} bottom={25}/>
                                
                                
                            </div>
                            <div className='h-[12%] mx-auto w-[70%] relative'>
                                <FallingBoxes text={'style'} deg={-13} left={'-20'} bottom={10}/>
                                <FallingBoxes text={'wellness'} deg={-13} left={'120'} bottom={8}/>
                                
                            </div>
                            <div className='h-[12%] mx-auto w-[70%] relative'>
                                <FallingBoxes text={'fashion'} deg={0}/>
                                <FallingBoxes text={'beauty'} deg={0} left={'120'}/>
                                
                            </div>
                        </div>
                        {/* absolute buttons */}
                        <button className='absolute w-20 h-20 rounded-full p-2 bg-[#DBFF74] -right-12 hover:scale-105 transition-all top-[27%] hover:bg-[#c0a6ec] hover:text-white'>&gt;</button>
                        <button className='absolute w-20 h-20 rounded-full p-2 bg-[#DBFF74] -right-12 hover:scale-105 transition-all top-[55%] hover:bg-[#c0a6ec] hover:text-white'>&lt;</button>
                    </div>
                </div>
            </div>
            <div className='absolute top-12 w-[600px] left-[40%] flex h-[18px] text-[10px]'>
                <svg className='h-1 mt-[4px]' width="300" height="2" viewBox="0 0 369 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="369" y2="1" stroke="black" strokeWidth="2"/>
                </svg>
                <div className='bg-[#DBFF74] px-1 ml-5'>BEAUTY</div>
                <div className='ml-5'>MARCH 20, 2024</div>
            </div>
        </div>
    </section>
  </>)
}

export default MainHero