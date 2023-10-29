import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HomeTab from '../HomeTab/HomeTab'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
        <HomeTab />
      <Footer />
    </div>
  )
}

export default Layout
