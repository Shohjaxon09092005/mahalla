import React from 'react'
import BlueBanner from '../components/BlueBanner'
import telephone from '../images/telephone-call.png'
import '../styles/contact.css'
function Contact() {
    return (
        <div className='contact'>
            <BlueBanner name="Bog‘lanish" rasm={telephone} />
            <div className="container">
                <div className="contact_wrapper">
                <div className="contact_info">
                    <h3>Izoh qoldiring</h3>
                    <form >
                        <label htmlFor="phone">Telefon raqamingizdi kiriting</label>
                        <div className="tel_div">
                            <p>+998</p>
                             <input className='phone_contact' type="text" id="phone" />
                        </div>
                       
                        <label htmlFor="izoh">Izoh yozing</label>
                        <textarea className='contact_text' id='izoh' />
                        <button type="submit">Jo'natish</button>
                    </form>
                </div>
                <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.7028370217383!2d69.27127571523885!3d41.3094796792727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c1d6e05cb7%3A0xb32ba36f55b2e0e1!2zMTAwMTEsIFRhc2hrZW50LCBOb3ZvaXkgQXZlbnVlLCDQm9C-0YHRgtC40Y8!5e0!3m2!1sen!2s!4v1696153872342!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>    
                </div>
                
            </div>
        </div>
    )
}

export default Contact
