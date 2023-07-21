import React from 'react'
import Navbar from '../components/Navbar.js'
// import Announcement from '../components/Announcement.js'
import Features from '../components/features.js'
import Categories from '../components/Categories.js'
import Products from '../components/Products.js'
import Popular from '../components/Popular.js'
import Footer from '../components/Footer.js'

const Home = () => {
  return (
   <div>
    {/* <Announcement/> */}
    <Navbar/>
    <Features/>
    <Categories/>
    <Popular/>
    <Products/>
    <Footer/>
   </div>
  )
}

export default Home