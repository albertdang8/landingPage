import React from 'react'
import graphs from '../../assets/images/illustration-intro.svg'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className="banner-left">
        <h1 className='boop1'>Bring everyone together to build better products.</h1>
        <p className='boop1'>Manage makes it simple for software teams to plan day-to-day tasks while the larger team goals in view.</p>
        <a href="#" className='start-btn banner-btn'>Get Started</a>
      </div>
      <div className="banner-right">
        <img src={graphs} alt='fake graphs doing nothing about productivity'/>
      </div>
    </div>
  )
}

export default Banner