import React from 'react'
import manageLogo from '../../assets/images/logo.svg'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="logo">
        <img src={manageLogo} className='logo' alt='Manage logo'/>
      </div>
      <div className="nav">
        <a href='#' className='nav-btn'>Product</a>
        <a href='#' className='nav-btn'>Pricing</a>
        <a href='#' className='nav-btn'>About Us</a>
        <a href='#' className='nav-btn'>Careers</a>
        <a href='#' className='nav-btn'>Community</a>
      </div>
      <div className="start-btn-nav">
        <a href="#" className='start-btn'>Get Started</a>
      </div>
      
    </div>
  )
}

export default Navbar