import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import NavBar from './CommonComponents/NavBar'
import MainHero from './MainHero'
import BlogCategories from './BlogCategories'
import FeaturedBlogs from './FeaturedBlogs'
import BannnerMOvingStripes from './BannnerMOvingStripes'
import FourButtons from './FourButtons'
import RecentBlogs from './RecentBlogs'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <MainHero/>
    <BlogCategories/>
    <FeaturedBlogs/>
    <BannnerMOvingStripes/>
    <FourButtons/>
    <RecentBlogs/>
    <Footer/>
  </React.StrictMode>,
)
