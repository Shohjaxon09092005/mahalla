import React, { useRef, useState } from 'react'
import BlueBanner from '../components/BlueBanner'
import info from '../images/info.png'
import '../styles/about.css'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'
import { NavLink } from 'react-router-dom'
function MahallaAbout() {
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
    <div>
      <BlueBanner name="Mahalla haqida" rasm={info} />
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <p> <strong >Mahalla tarixi</strong>  <br />
              <p>Mahalla — o‘zini o‘zi boshqarishning xalqimiz an’analari va qadri-yatlariga xos bo‘lgan usuli bo‘lib, uning tarixi qadim zamonlarga borib taqaladi. Tarixiy manbalarda qayd etilishicha, jez davrining yodgorligi bo‘lgan Sopollitepada 8 ta oila yashagan. Keyinchalik ularning safiga 100 dan ortiq oilalar kelib qo‘shilgan. Katta oilalar jamoasini ular orasidan saylangan oqsoqol boshqargan.</p>
              <p>Miloddan avvalgi III-asrdan milodiy V-asrning boshlarigacha Farg‘ona (Parkana) davlatida ham oqsoqollar kengashi muhim vazifalarni hal etgan. Kengash, asosan, sulh tuzish, vazirlar tarkibi va soliqlarni tayinlash, urush e’lon qilish, jamoa ishlariga safarbar etish kabi masalalar bilan shug‘ullangan.</p>

              <p>“Mahalla” atamasi arabcha bo‘lib, “hudud, makon, joy” degan ma’nolarni anglatadi. Tarixiy manbalarda mahallaning ko‘p ming yillik tarixga ega ekanligi haqida ma’lumotlar uchraydi. Macalan, Narshaxiy o‘zining “Buxoro tarixi” asarida Buxoroda bundan 1100 yil ilgari 19 ta mahalla bo‘lganini qayd etib o‘tgan.</p>

              <p>Alisher Navoiy o‘zining “Hayrat ul abror” asarida mahallani “shahar ichidagi shaharcha” deb ta’riflagan.
              </p>

              <p>Qadimda mahallalar fuqarolarning kasb-kori asosida shakllangan va shunga qarab nomlangan. Mahmud Koshg‘ariyning “Devonu lug‘ati-turk” asarida savdogar va hunarmandlar yashaydigan hududlarni bildiruvchi ibora sifatida “mahalla” so‘zi qo‘llanilgan. Masalan, zargarlik, misgarlik, ko‘nchilik, pichoqchilik, qoshiqchilik, temirchi, egarchi, taqachi va hokazo. Mahallani boshqarish jamoatchilik asosida olib borilib, o‘zining yozilmagan ichki tartib-qoidalariga ega bo‘lgan va hamma uchun birdek qonuniy hisoblangan.</p>

              <p>O‘zbekiston mustaqillikka mahallalarni rivojlantirish borasida tarixiy yangi davr boshlandi. Jumladan:</p>

              <p>– milliy davlatchilik tarixida ilk bor shaharcha, qishloq, ovul va mahalla fuqarolar yig‘inlari o‘zini o‘zi boshqarishning hududiy birliklari sifatida O‘zbekiston Respublikasi Konstitutsiyasida mustahkamlab qo‘yildi;</p>

              <p>– 1993 yil 2 sentyabrda “Fuqarolarning o‘zini o‘zi boshqarish organlari to‘g‘risida”gi O‘zbekiston Respublikasining qonuni qabul qilindi.</p>

              <p>Mahalla institutini yanada takomillashtirish, uning davlat va jamiyat hayotida tutgan o‘rnini tubdan oshirish borasida amalga oshirilgan islohotlar natijasida ushbu qonun keyinchalik ikki marta, ya’ni 1999 yil 14 aprelda hamda 2013 yil 22 aprelda yangi tahrirda qabul qilindi.</p>

              <p>Co‘nggi yillarda mahallaning jamiyat boshqaruvidagi o‘rni va rolini oshirishga qaratilgan keng ko‘lamli islohotlar amalga oshirilmoqda.</p>
              <p>Xususan, 2022 - 2026 yillarga mo‘ljallangan Yangi O‘zbekistonning taraqqiyot strategiyasida mahallaning “faol” modelini joriy etish orqali mahalla tizimini rivojlantirish va mahallabay ishlashda davlat organlari, mahalliy hokimlik va jamoat tashkilotlarining o‘zaro samarali hamkorligi qatiy belgilab qo‘yildi.</p>


              Taraqqiyot strategiyasining 1-maqsadida ham mahalla instituti faoliyatining samaradorligini oshirish, uni jamoatchilik boshqaruvi va nazoratining tayanch bo‘g‘iniga aylantirish bo‘yicha yo‘nalishlar belgilandi.

              Mahallalarning vakolatlari kengaytirilib, ularning moliyaviy mustaqilligi kuchaytirildi.

              Mahalladagi ishlarning holati vazirlik, idora va hokimliklar faoliyatini baholashning bosh mezoni sifatida belgilandi.

              Barcha darajadagi rahbarlar mahallaga tushib, o‘z yo‘nalishi bo‘yicha muammolarni o‘rganish va ularga yechim topishi tartibi joriy etildi.

              Aholining mahalladan turib barcha davlat organlariga murojaat qilish va ularning rahbarlari bilan muloqot qilish tizimi yaratilib, davlat va ijtimoiy xizmatlarni bevosita mahallada ko‘rsatish yo‘lga qo‘yildi.</p>

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

export default MahallaAbout
