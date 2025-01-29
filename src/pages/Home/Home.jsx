import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className='home-section' id='home'>
        <div className='my-img'><img src='/assets/myImage.jpg' alt=''/></div>
        <h1><span>i am Vikas Patel,</span> full stack developer based in india</h1>
        <p>I am a Fullstack Developer from Noida, India, specializing in building user-friendly web applications. Passionate about creating impactful digital solutions.</p>
        <div className='home-btn'>
          <button className='home-btn-first' ><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
          <button>My resume</button>
        </div>
      </div>
    </>
  )
}
