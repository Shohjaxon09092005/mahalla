import React from 'react'
import '../styles/rais.css'
import { FaTelegramPlane, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import profileImage from '../images/personRais.jpg';
function Rais() {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h2 className="name">KURANBAEV QAHRAMON QO'CHQOROVICH</h2>
        <p className="position">O'zbekiston mahallalari uyushmasi raisi</p>
        <div className="social-icons">
        <p className="social-text">Ijtimoiy tarmoqlar:</p>
          <FaTelegramPlane className="icon_rais" />
          <FaYoutube className="icon_rais" />
          <FaFacebook className="icon_rais" />
          <FaInstagram className="icon_rais" />
        </div>
      </div>
        <img className="profile-image" src={profileImage} alt="Profile" />
    </div>
  )
}

export default Rais
