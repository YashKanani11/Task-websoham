import React from 'react'
import SectionHeaders from './CommonComponents/SectionHeaders'
import SC from './CommonComponents/StackedCarousel/SC'

const RecentBlogs = () => {
  return (
    <section className='h-screen w-full font-[Archivo] bg-black rounded-t-[150px] mt-10 text-white pt-10 px-20 relative overflow-hidden'>
        <SectionHeaders mainHead1={'Recent'} mainHead2={'Blogs'} subHead={'The latest post'} para={'lorem ipsum long pyaz'} accentColor={'#DBFF74'} mainColor={'white'}/>
        <SC/>
    </section>
  )
}

export default RecentBlogs