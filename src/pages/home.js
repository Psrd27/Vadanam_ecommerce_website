import React from 'react'
import Navbar from '../components/Navbar.js'
import Announcement from '../components/Announcement.js'
import Features from '../components/features.js'
import Categories from '../components/Categories.js'

const Home = () => {
  return (
   <div>
    {/* <Announcement/> */}
    <Navbar/>
    <Features/>
    <Categories/>
   </div>
  )
}

export default Home