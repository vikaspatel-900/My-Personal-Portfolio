import React from 'react'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="footer" id="footer-section">

                {/* <div className="footer-head">
                    Get In Touch
                </div> */}

                {/* <div className="footer-center">


                    <ul className="footer-link">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>

                </div> */}



                <div className='footer-top-section'>
                    <div className='footer-top-sec-left'>
                        <h2>viKas</h2>
                        <p>
                        I am a Fullstack Developer from Noida, India, specializing in building user-friendly web applications. Passionate about creating impactful digital solutions.
                        </p>
                    </div>
                    <div className='footer-top-sec-right'>
                        <input type='email' placeholder='Enter your email'/>
                        <button>Subscribe</button>
                    </div>
                </div>



                <div className="footer-copyright">
                    <p>Copyright &copy;2024 Vikas Patel. Crafted with ❤️ and lots of
                        caffeine. All rights reserved.
                    </p>

                    <div className="footer-icon">
                        <a href="https://www.instagram.com/vikashpatel902/"><i className="bi bi-instagram" title="instragram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100028006387421"><i className="bi bi-facebook" title="facebook"></i></a>

                        <a href="https://www.linkedin.com/in/vikaspatel82/"> <i className="bi bi-linkedin" title="linkedin"></i></a>


                        <a href='#'><i className="bi bi-github" title="github"></i></a>

                        <a href="https://wa.me/918269741974" id="whatsapp-link"><i className="bi bi-whatsapp" title="whatsapp"></i></a>

                        <a href="mailto:vikaspatel221999@gmail.com?subject=Portfolio%20Query&body=Hi%20Vikas,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."><i className="bi bi-envelope-arrow-down-fill" title="email"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
