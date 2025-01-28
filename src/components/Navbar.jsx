import React from 'react'
import '../css/Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Navbar() {
  return (
    <di>
      <div className="navbar" id="navbar-section">
        <a href="#" className="nav_logo"><img src='' />
          <img src='/assets/mylogo.png' alt='' />
        </a>
        <ul>
          <li><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#skill-section'>Skills</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#Education'>Education</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
        </ul>
         <button href="#" className="contact_btn"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect me</AnchorLink></button>
      </div>
    </di>
  )
}

