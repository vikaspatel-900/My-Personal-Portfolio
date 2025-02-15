import React from 'react'
import '../css/Social.css'
import { footerIconLink } from '../constants/Layout'

export default function Socialicon() {
    return (

        <div className="social-icon">
                        {
                            footerIconLink.map((link)=>{
                              return  <a href={link.href}><i className={link.class} title={link.title} style={{backgroundColor:"grey"}}></i></a>
                            })
                        }              
        </div>
    )
}
