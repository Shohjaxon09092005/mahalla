import React, { useRef, useState } from 'react'
import BlueBanner from '../components/BlueBanner'
import info from '../images/hujjat.png'
import '../styles/about.css'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'
import { NavLink } from 'react-router-dom'
function Hujjatlar() {
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
    <div className='hujjatlar'>
       <BlueBanner name="Hujjatlar" rasm={info} />
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <p> <strong >O‘zbekiston Respublikasi Vazirlar Mahkamasining Qarori</strong>  <br />
            <div className="hujjat_top">
                <ul>
                    <li>2024-yil 18-may</li>
                    <li>№ 291</li>
                    <li>  Toshkent sh.</li>
                </ul>
            </div>
<p>O‘zbekiston mahallalari uyushmasi faoliyatini
qo‘llab-quvvatlash bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida</p>
<p>Mahallalarni qo‘llab-quvvatlashni yanada takomillashtirish, mahallabay ishlashga mas’ul bo‘lgan shaxslar faoliyatini samarali tashkil etish va ularning hamkorligini ta’minlash, O‘zbekiston mahallalari uyushmasi, uning tuzilmalari moddiy-texnik bazasini mustahkamlash, xodimlarni moddiy ragbatlantirish hamda O‘zbekiston mahallalari uyushmasiga yuklangan vazifalarning to‘laqonli bajarilishini qo‘llab-quvvatlash maqsadida Vazirlar Mahkamasi qaror qiladi:</p>

<p>Uzbekiston mahallalari uyushmasi (keyingi o‘rinlarda - Uyushma), O‘zbekiston “Mahalla” xayriya jamoat fondi hamda Kambagallikni qisqartirish va bandlik vazirligining:
O‘zbekiston “Mahalla” xayriya jamoat fondi respublika boshqaruvi foydalanishida bo‘lgan Toshkent viloyatining Qibray tumanidagi “Baytqo‘rgon” QFY hududida joylashgan “Navbahor” sanatoriysi dam olish maskanini tegishli hududi va ushbu dam olish maskanini rivojlantirish uchun “Aloqa bank” ATdan olingan kreditining qolgan qismini to‘lash majburiyati bilan birgalikda Uyushmaga bepul berish;</p>

<p>Uyushmaning Mahallalar faoliyatini rag‘batlantirish jamg‘armasini tashkil etish;</p>

<p>Kambagallikni qisqartirish va bandlik vazirligining byudjetdan tashqari “Obod va xavfsiz mahalla” jamg‘armasini tugatish;</p>

<p>Kambagallikni qisqartirish va bandlik vazirligiga hamda uning hududiy boshqarmalari va bo‘limlariga sobiq Mahalla va nuroniylarni qo‘llab-quvvatlash vazirligi hamda uning hududiy boshqarmalari va bo‘limlaridan o‘tgan moddiy-texnik bazani, xizmat avtotransport vositalarini, bino va inshootlarni Uyushmaga bepul berish;</p>

<p>Uyushma huzurida “Mahalla” media-markazi, “Mahalla” press-klubi hamda O‘zbekiston mahallalari uyushmasi tizimi xodimlarining malakasini oshirysh va mahallalarni metodik ta’minlash o‘quv-uslubiy markazini tashkil etish to‘grisidagi takliflariga rozilik berilsin.</p>

<p>– 1993 yil 2 sentyabrda “Fuqarolarning o‘zini o‘zi boshqarish organlari to‘g‘risida”gi O‘zbekiston Respublikasining qonuni qabul qilindi.</p>

<p>Uzbekiston mahallalari uyushmasining mahallalar faoliyatini rag‘batlantirish jamg‘armasi mablag‘larini shakllantirish va ulardan foydalanish tartibi to‘g‘risidagi nizom ilovaga muvofiq tasdiqlansin.
Uyushmaga ikki oy muddatda:</p>

<p>Raqamli texnologiyalar vazirligi bilan birgalikda mahallalar va “Mahalla yettiligi” faoliyatini takomillashtirish yuzasidan takliflar va muammolarni hamda aholi murojaatlarini qabul qilish uchun 24 soat uzluksiz ishlaydigan “Sa11-markaz” faoliyatini (respublika doirasida yagona qisqa raqam) o‘rnatilgan tartibda yo‘lga qo‘yish;</p>
<p>Uyushma huzurida “Mahalla” media-markazi, “Mahalla” press-klubi</p>
<p>hamda O‘zbekiston mahallalari uyushmasi tizimi xodimlarining malakasini oshirish va mahallalarni metodik ta’minlash o‘quv-uslubiy markazini Respublika mahallani qo‘llab-quvvatlash kengashi qaroriga asosan tashkil etish choralarini ko‘rish;

Qoraqalpogiston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari huzuridagi fuqarolarning o‘zini o‘zi boshqarish organlari xodimlarining malakasini oshirish bo‘yicha o‘quv kurslarida “Mahalla yettiligi” a’zolarining mahalla fuqarolar yiginidagi faoliyati yuzasidan malakasini oshirish tizimini joriy etishni nazarda tutuvchi normativ-huquqiy hujjat loyihasi Vazirlar Mahkamasiga kiritilishini ta’minlash tavsiya etilsin.</p>

</p>
          
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

export default Hujjatlar
