import React, { useRef, useState } from 'react'
import BlueBanner from '../components/BlueBanner'
import info from '../images/info.png'
import '../styles/about.css'
import '../styles/yettilik.css'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'
import { NavLink } from 'react-router-dom'

function Yettilik({title,text1,text2,text3,text4,text5,text6}) {
  let blockRef = useRef()
  const [link, setLink] = useState(false)
  function openLink() {
    setLink(!link)
  }
  const handleDragStart = (e) => {
    const block = blockRef.current;
    const rect = block.getBoundingClientRect();

    // Mobil qurilmalarda touch hodisalari ishlatiladi
    const offsetX = e.type === "touchstart" ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const offsetY = e.type === "touchstart" ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    block.dataset.offsetX = offsetX;
    block.dataset.offsetY = offsetY;
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return; // oldini olish uchun

    const block = blockRef.current;
    const blockWidth = block.offsetWidth;
    const blockHeight = block.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Yangi pozitsiyalarni hisoblash
    let newLeft = e.clientX - block.dataset.offsetX;
    let newTop = e.clientY - block.dataset.offsetY;

    // Chap va o'ng chegaralarni tekshirish
    if (newLeft < 0) newLeft = 0;
    if (newLeft + blockWidth > windowWidth) newLeft = windowWidth - blockWidth;

    // Yuqori va pastki chegaralarni tekshirish
    if (newTop < 0) newTop = 0;
    if (newTop + blockHeight > windowHeight) newTop = windowHeight - blockHeight;

    // Yangi pozitsiyani qo'llash
    block.style.left = `${newLeft}px`;
    block.style.top = `${newTop}px`;
  };
  return (
    <div className='yettilik'>
         <BlueBanner name="Mahalla Yettiligi" rasm={info} />
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
          <h4>{title}</h4>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>
          <p>{text5}</p>
          <p>{text6}</p>
          
          </div>
          <div className="divLink">   </div>
          <div ref={blockRef}
            draggable
            onDragStart={handleDragStart}
            onDrag={handleDrag} className="about_link">
            <h2>Ommabop havolalar <div className={`burger-icon ${link ? 'open' : ''}`} onClick={openLink}>
              <span></span>
              <span></span>
              <span></span>
            </div></h2>
            <div className="menu-line">

            </div>
            {link && (
              <ul>
                <NavLink to="https://online-mahalla.uz/" target='blank'><li><img src={about1} alt="logo" />
                  «Onlayn Mahalla» - elektron platformasi
                </li></NavLink>
                <NavLink to="https://my.gov.uz/oz" target='blank'><li><img src={about2} alt="logo" />
                  Yagona interaktiv davlat xizmatlari portaliga
                </li></NavLink>
                <NavLink to="https://pm.gov.uz/ru#/" target='blank'><li><img src={about3} alt="logo" />
                  O‘zbekiston Respublikasi Prezidentining virtual qabulxonasi
                </li></NavLink>

              </ul>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Yettilik
