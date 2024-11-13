import React from 'react'
import '../styles/yangiliklar.css'
import BlueBanner from '../components/BlueBanner'
import newsIcon from '../images/news-icon.cf09c28.png'
import news1 from '../images/news1.webp'
import news2 from '../images/news2.webp'
import news3 from '../images/news3.webp'
import news4 from '../images/nees4.webp'
import NewsCard from '../components/NewsCard'
import { NavLink } from 'react-router-dom'
function Yangiliklar() {
  const news = [
    { id: 1, image:news1 , sana: "25.06.2024", views: "486", title: "Mahallalar obodligini ta’minlash tizimi taqdimot q...", desc: "Prezident Shavkat Mirziyoyev 25-iyun kuni mahallalar obodligini ta’minlash bo‘yicha takliflar taqdimoti bilan tanishdi.", about: "Prezident Shavkat Mirziyoyev 25-iyun kuni mahallalar obodligini ta’minlash bo‘yicha takliflar taqdimoti bilan tanishdi.Mamlakatimizda barcha dasturlar mahallalarda amalga oshirilmoqda. Bu tizimga katta vakolat va imkoniyatlar berilmoqda." },
    { id: 2, image: news2 , sana: "30.10.2024", views: "103", title: "DVV International Mahallalar uyushmasi bilan birga...", desc: "O'zbekiston mahallalari uyushmasida “Normativ-huquqiy hujjatlarni kelishish va Hukumatga kiritish", about: "Tizimda qator qulayliklar yaratilgan. Xususan, loyihani ishlab chiqish kelishish, tasdiqlash jarayonlari algoritmi to'liq tartibga solingan. Shuningdek, portal O'zbekiston Respublikasi Qonunchilik ma'lumotlari milliy bazasi lex.uz bilan integratsiya qilingan.O'quv seminarida mutaxassislar o'zlarini qiziqtirgan savollarga javob oldilar." },
    { id: 3, image: news3 , sana: "16.10.2024", views: "97", title: "Mahallalar obodligini ta’minlash tizimi taqdimot q...", desc: "DVV International Mahallalar uyushmasi bilan birga yangi loyihalarni boshlaydi", about: "Nemis xalq universitetlari assotsiatsiyasi – DVV International O'zbekistonda ijtimoiy sohani rivojlantirish, xususan, ishsiz aholining bandligini ta'minlashga qaratilgan qator loyihalarni muvaffaqiyatli amalga oshirib kelmoqda. Ayni sohaga ixtisoslashgan O'zbekistonning turli davlat va nodavlat tashkilotlari bilan faol hamkorlik o'rnatgan." },
    { id: 4, image: news4 , sana: "03.10.2024", views: "489", title: "O‘zbekiston mahallalari uyushmasi raisi Qahramon Q...", desc: "Bugungi konferensiyamizda 21 ta xorijiy mamlakatdan, 7 ta xalqaro tashkilotdan, 5 ta elchixonadan, Oliy Majlis Senatidan, Qonunchilik palata...", about: "Bugungi konferensiyamizda 21 ta xorijiy mamlakatdan, 7 ta xalqaro tashkilotdan, 5 ta elchixonadan, Oliy Majlis Senatidan, Qonunchilik palatasidan, Prezident Administratsiyasidan, Vazirlar Mahkamasidan hamda vazirlik va idoralardan 30 nafardan ortiq rahbarlar, 12 nafar obro‘-e’tiborga ega bo‘lgan senator va olimlar, 60 ga yaqin xorijiy va mahalliy ommaviy axborot vositasi vakillari, 14 ta hududdan 28 nafar hokim o‘rinbosarlari va 140 nafar “mahalla yettiligi” ishtirok etishmoqda." },
    { id: 5, image:news1, sana: "25.06.2024", views: "486", title: "Mahallalar obodligini ta’minlash tizimi taqdimot q...", desc: "Prezident Shavkat Mirziyoyev 25-iyun kuni mahallalar obodligini ta’minlash bo‘yicha takliflar taqdimoti bilan tanishdi.", about: "Prezident Shavkat Mirziyoyev 25-iyun kuni mahallalar obodligini ta’minlash bo‘yicha takliflar taqdimoti bilan tanishdi.Mamlakatimizda barcha dasturlar mahallalarda amalga oshirilmoqda. Bu tizimga katta vakolat va imkoniyatlar berilmoqda." },
    { id: 6, image: news1 , sana: "25.06.2024", views: "486", title: "Mahallalar obodligini ta’minlash tizimi taqdimot q...", desc: "Prezident Shavkat Mirziyoyev 25-iyun kuni mahallalar obodligini ta’minlash bo‘yicha takliflar taqdimoti bilan tanishdi.", about: "Prezident Shavkat Mirziyoyev 25-iyun kuni mahallalar obodligini ta’minlash bo‘yicha takliflar taqdimoti bilan tanishdi.Mamlakatimizda barcha dasturlar mahallalarda amalga oshirilmoqda. Bu tizimga katta vakolat va imkoniyatlar berilmoqda." },
  ]
  return (
    <div className='news__mahalla'>
      <BlueBanner name="Yangiliklar" rasm={newsIcon} />
      <div className="container">
        <div className="news_mahalla_wrapper">
          {news?.map((item) => {
            return (
            <NavLink to={`/newsAbout/${item.id}`}> <NewsCard key={item.id} image={item.image} sana={item.sana} views={item.views} title={item.title} desc={item.desc}  /></NavLink> 
            )
          })}


        </div>
      </div>


    </div>
  )
}

export default Yangiliklar
