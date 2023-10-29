import React from 'react'
import HomeNavbar from '../components/HomeNavbar/HomeNavbar'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import HomeTab from '../components/HomeTab/HomeTab'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <HomeNavbar />
        {children}
        <HomeTab />
      <HomeFooter />
    </div>
  )
}

export default HomeLayout
