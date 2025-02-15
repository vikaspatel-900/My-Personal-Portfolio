import React from 'react'
import '../css/Footer.css'
import { footerIconLink } from '../constants/Layout'


export default function Footer() {
    return (
        <div>
            <div className="footer" id="footer-section">





                <div className="footer-copyright">
                    <p>Copyright &copy;2024 Vikas Patel. Crafted with ❤️ and lots of
                        caffeine. All rights reserved.
                    </p>

                    <div className="footer-icon">

                        {
                            footerIconLink.map((link)=>{
                              return  <a href={link.href}><i className={link.class} title={link.title}></i></a>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
