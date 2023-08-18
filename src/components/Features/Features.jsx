import React from 'react'
import "./Features.css"

const Features = () => {
  return (
    <div className='features-container'>
      <div className="features-left">
        <h2 className='boop1'>What's different about Manage?</h2>
        <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className="features-right">
        <div className="feature boop2">
          <div className="number">01</div>
          <div className="section-text">
            <h3 className='beep feature-title'>Track company-wide progress</h3>
            <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the awy down to the smallest of details. Never lose sight of the bigger picture again.</p>
          </div>
        </div>
        <div className="feature boop2">
        <div className="number">02</div>
          <div className="section-text">
            <h3 className='beep feature-title'>Advanced built-in reports</h3>
            <p>Set internal delivery estimates and track progress toward company goals. Out custimizable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
          </div>
        </div>
        <div className="feature">
        <div className="number">03</div>
          <div className="section-text">
            <h3 className='beep feature-title'>Everything you need in one place</h3>
            <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features