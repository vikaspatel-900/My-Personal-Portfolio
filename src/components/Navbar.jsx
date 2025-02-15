import React from 'react'
import '../css/Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { navLink } from '../constants/Layout'


export default function Navbar() {
  return (
    <div>
      <div className="navbar" id="navbar-section">
        <a href="#" className="nav_logo"><img src='' />
          <img src='/assets/mylogo.png' alt='' />
        </a>
        <ul>
          
          {
            navLink.map((link)=>{
                return <li key={link.title}><AnchorLink className='anchor-link' offset={50} href={link.href}>{link.title}</AnchorLink></li>
            })
          }
          
        </ul>
         <div className='nav-btn'>
             <button href="#" className="contact_btn"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect me</AnchorLink></button>
         </div>
      </div>
    </div>
  )
}

