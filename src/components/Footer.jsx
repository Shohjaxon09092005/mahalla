import React from 'react'
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import '../styles/footer.css'
import footerImage from '../images/logo.d678131c.png'
function Footer() {
  return (
    <div className='footer'>
       <div className="container">
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <img src={footerImage} alt="" />
                </div>
                <div className="footer-manzil">
                    <h2>Manzil</h2>
                    <h3>Sirdaryo viloyati</h3>
                </div>
                <div className="footer-tel">
                    <h2>Ishonch telefonlari</h2>
                    <a href="tel:712070407">(71) 207-04-07</a>
                </div>
                <div className="footer-agent">
                    <h2>Agentlik</h2>
                    <a target="_blank" rel="noopener noreferrer" href="!#">Yoshlar agentligi</a>
                </div>
                <div className="footer-email">
                    <h2>E-mail</h2>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:Mdqw@gmail.com">Mdqw@gmail.com</a>
                </div>
                <div className="footer-icon">
                    <h2>Ijtimoyi tarmoqlar</h2>
                    <div>
                        <a className="telegram" target="_blank" rel="noopener noreferrer" href="!#">
                            <FaTelegramPlane/>
                        </a>
                        <a className="instagram" target="_blank" rel="noopener noreferrer" href="!#">
                            <FaInstagram/>
                        </a>
                        <a className="facebook" target="_blank" rel="noopener noreferrer" href="!#">
                            <FaFacebookF/>
                        </a>
                        <a className="twiter" target="_blank" rel="noopener noreferrer" href="!#">
                            <FaTwitter/>
                        </a>
                    </div>
                </div>
            </div>
            <span className="devosoft">MADE IN <a href="https://www.instagram.com/devosoft.uz/" target="_blank" rel="noopener noreferrer">DEVOSOFT</a></span>
        </div>
    </div>
  )
}

export default Footer
