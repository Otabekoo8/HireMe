import React from 'react'
import Navbar from './Navbar.jsx/Navbar'
import Header from './Header/Header'
import TrendProduct from './TrendProduct/TrendProduct'
import Creators from './Creators/Creators'
import HomeProducts from './HomeProducts/HomeProducts'
import SubscriptionInfo from './Contact/Contact'
import Footer from './Footer/Footer'

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <TrendProduct />
        <Creators />
        <HomeProducts />
        <SubscriptionInfo />
        <Footer />
    </div>
  )
}

export default MainPage