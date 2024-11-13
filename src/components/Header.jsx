import React, { useState } from 'react';
import '../styles/header.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../images/logo.d678131c.png'
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hozirgi yo'lni olish

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='header'>
      <div className="container">
        <div className="header_top">
          <div className="header_top_content">
            <h3>Mahalla Fuqarolar Yig‘ini</h3>
          </div>
          <div className="header_top_icons">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={25} color='black' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} color='black' />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={25} color='black' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} color='black' />
            </a>
          </div>
        </div>
        </div>
        <div class="header-line">

        </div> 
        <div className="container">
           <div className="header-main">
          <div className="header-logo">
            <img src={logo} alt="Logo" />
            <div className="header-line-y"></div>
            <h3>Rasmiy veb-sayt</h3>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink 
                  to="/" 
                  className={location.pathname === "/" ? "active-link" : ""}>Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/mahallaAbout" 
                  className={location.pathname === "/mahallaAbout" ? "active-link" : ""}>Mahalla haqida
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/rahbariyat" 
                  className={location.pathname === "/rahbariyat" ? "active-link" : ""}>Rahbariyat
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/yangiliklar" 
                  className={location.pathname === "/yangiliklar" ? "active-link" : ""}>Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/tadbirlar" 
                  className={location.pathname === "/tadbirlar" ? "active-link" : ""}>Tadbirlar
                </NavLink>
              </li>
              <li>
                  <NavLink 
                    to="/hujjatlar" 
                    className={location.pathname === "/hujjatlar" ? "active-link" : ""}>Hujjatlar
                  </NavLink>
                </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={location.pathname === "/contact" ? "active-link" : ""}>Bog‘lanish
                </NavLink>
              </li>
            </ul>
          </nav>
          <div onClick={toggleMobileMenu} className="burger">
            <span className="burger__line burger__line_first"></span>
            <span className="burger__line burger__line_second"></span>
            <span className="burger__line burger__line_third"></span>
            <span className="burger__line burger__line_fourth"></span>
          </div>
          {isMobileMenuOpen && (
            <div className="header-modal-mobile">
              <ul>
                <li>
                  <NavLink 
                    to="/" 
                    className={location.pathname === "/" ? "active-link" : ""}>Bosh sahifa
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/mahallaAbout" 
                    className={location.pathname === "/mahallaAbout" ? "active-link" : ""}>Mahalla haqida
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/rahbariyat" 
                    className={location.pathname === "/rahbariyat" ? "active-link" : ""}>Rahbariyat
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/yangiliklar" 
                    className={location.pathname === "/yangiliklar" ? "active-link" : ""}>Yangiliklar
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/hujjatlar" 
                    className={location.pathname === "/hujjatlar" ? "active-link" : ""}>Hujjatlar
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={location.pathname === "/contact" ? "active-link" : ""}>Bog‘lanish
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        </div>
       
      </div>
    
  );
}

export default Header;
