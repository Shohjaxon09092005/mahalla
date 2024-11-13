import React from 'react'
import BlueBanner from '../components/BlueBanner'
import '../styles/rahbariyat.css'
import RahbariyatCard from '../components/RahbariyatCard'
import rahbar1 from '../images/rahbar1.jpg'
import rahbar2 from '../images/rahbar2.jpg'
import rahbar3 from '../images/rahbar3.jpg'
import rahbar from '../images/rahbariyat.png'
function Rahbariyat() {
  return (
    <div className='rahbariyat'>
      <BlueBanner name="Rahbariyat" rasm={rahbar} />
      <div className="container">
        <RahbariyatCard proName="Quranboyev Qaxramon Qo‘chqorovich" proImg={rahbar1} tel="71 239-32-81" mansab="O‘zbekiston mahallalari uyushmasi raisi" webTitle="info@mahallas.uz"  day="Dushanba 16:00 - 18:00" />
        <RahbariyatCard proName="Inagamov Jovdatxon Sultanovich" proImg={rahbar2} tel="71 239-32-76" mansab="O‘zbekiston mahallalari uyushmasi raisining birinchi o‘rinbosari" webTitle="info@mahallas.uz"  day="seshanba 16:00 - 18:00" />
        <RahbariyatCard proName="Aslonov Abdullo Ubaydulloyevich" proImg={rahbar3} tel="71 239-32-75" mansab="O‘zbekiston mahallalari uyushmasi raisining o‘rinbosari" webTitle="info@mahallas.uz"  day="chorshanba 16:00 - 18:00" />

      </div>
    </div>
  )
}

export default Rahbariyat
