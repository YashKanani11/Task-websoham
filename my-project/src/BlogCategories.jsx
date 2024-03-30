import React from 'react'
import SectionHeaders from './CommonComponents/SectionHeaders'

const BlogCategories = () => {
  return (
    <>
    <section className='h-screen w-full font-[Archivo] bg-black rounded-t-[150px] mt-10 text-white pt-10 px-20 relative overflow-hidden'>
      <SectionHeaders mainHead1={'Blogs'} mainHead2={'Categories'} subHead={'our top categories'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} accentColor={'#c3df5c'} mainColor='#ffffff'/>
      {/* Absolute design elemnts */}
      <div className='absolute top-[45%] -right-[88px] z-20'>
        <img className='h-44 bg-blend-color-dodge' src='https://s3-alpha-sig.figma.com/img/4bbe/1075/2ff10844f801484df03a6101ed8bdc0a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eMxD2~tjYs8J1mWS2I-DYEG2~KoJrch5k2k3H-IzLfqu1rIRQVEwZRX2p9uC9A29olwWQgD~Ob7RdMuQemTN7papIsjGpHKPSpAeRZtEIvn-WlGOhD3NlEMfjMq7DC~JYT-mVk0XRFBup16FIDxlgJ6A1Y20pgUkOuJA1QmpiiNiS486~VRw3FG4tzfpHZBspHd~cH6ptN5lG6dyF~LmQAzk2na-Hdliz1NlxpvnDflAax-hqrr~OqgO1YcN-c5MRLh7NK4C1L04nJhN93Aa6p42z5bnxBhdi6Pyj-B~F592fmeAQq86PcmZr-T98wJYx3LEvsTdyy~F1t8N0W0LEg__'/>
      </div>
    </section>
    
    </>
  )
}

export default BlogCategories