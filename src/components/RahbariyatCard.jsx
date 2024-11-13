import React from 'react'
import '../styles/rahbarCard.css'
import { FaPhone, FaEnvelope,  FaGlobe, FaClock } from 'react-icons/fa';
function RahbariyatCard({ proImg, proName, mansab, tel, webTitle, location, day}) {
    return (
        <div>
            <div className="profile-card2">
                <div className="profile-image2">
                    <img
                        src={proImg}
                        alt="Alisher Sa’dullayev"
                        className="profile-photo2"
                    />
                </div>
                <div className="profile-info2">
                    <h2>{proName}</h2>
                    <p>{mansab}</p>
                </div>
                <div className="profile-contact2">
                    <ul>
                        <li><FaPhone /> {tel} (102)</li>
                        <li><FaEnvelope /> {webTitle}</li>
                       
                        <li><FaGlobe /> <a href="http://gov.uz/yoshlar">http://gov.uz/yoshlar</a></li>
                        <li><FaClock /> {day}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RahbariyatCard
