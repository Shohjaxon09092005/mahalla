import React from 'react'
import '../styles/blueBanner.css'
function BlueBanner({ name, rasm }) {
    return (
        <div className='banner'>
            <div className="container">
                <div className="banner_wrapper">
                     <h2>{name}</h2>
                <img src={rasm} alt="rasm" />
                </div>
               
            </div>

        </div>
    )
}

export default BlueBanner
