import { useState } from 'react'
import './App.css'
import HomePage from './landing_page/home/HomePage'
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Navbar from './Navbar';
import NotFound from './NotFound.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
