import React from 'react'
import Yettilik from '../components/Yettilik'
import { useParams } from 'react-router-dom'

function YettilikApp() {
    const {ID}=useParams()
    const yettilik = [
        { id: 1,  title: "MAHALLA RAISINING ASOSIY VAZIFALARI", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi).", },
        { id: 2,  title: "HOKIM YORDAMCHISINING ASOSIY VAZIFALARI", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi)." },
        { id: 3,  title: "Xotin-qizlar faolining asosiy vazifalari", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi)." },
        { id: 4,  title: "YOSHLAR YETAKCHISINING ASOSIY VAZIFALARI", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi)." },
        { id: 5,  title: "Profilaktika inspektorining asosiy vazifalari", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi)." },
        { id: 6,  title: "Ijtimoiy xodimning asosiy vazifalari", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi)." },
        { id: 7,  title: "Soliq inspektorining asosiy vazifalari", text1:"Mahalla obodligini ta’minlash, shu jumladan, «Obod mahalla», «Obod ko‘cha», «Obod xonadon» mezonlarini joriy etishda aholining faol ishtiroki va mas’uliyatini oshirish, «Yashil makon» umummilliy loyihasi doirasida daraxt va buta ko‘chatlari ekish bo‘yicha targ‘ibot ishlarini amalga oshirish.",text2:"(Har oyda bir marotaba mahalladagi barcha ko‘chalarda ommaviy hashar uyushtiradi, kamida 2 ta ehtiyojmand oilalarning ta’mirtalab xonadonida qo‘ni-qo‘shnilarni jalb etgan holda, hashar tashkil etadi).",text3:"Milliy qadriyatlar, urf-odatlar va an’analarni targ‘ib qilish, sog‘lom ijtimoiy-ma’naviy muhitni saqlash, to‘y-marosimlarni isrofgarchiliklarsiz ixcham o‘tkazilishini ta’minlash.",text4:"(Har chorakda bir marotaba madaniyat xodimlari, yozuvchi va shoirlarning aholi bilan milliy qadriyatlar va urf-odatlarni saqlash, to‘y-marosimlarni ixcham o‘tkazish bo‘yicha uchrashuvlari tashkil etilishini ta’minlaydi).Mahallaga biriktirilgan davlat organlari vakillarini aholi muammolarini hal etishga safarbar etish va muammolarga yechim topishini ta’minlash.(Fuqarolar yig‘inining Kengashida har oyda kamida 5 ta mahallaga biriktirilgan davlat organlari vakillarining mahallada amalga oshirgan ishlari yuzasidan axborotini eshitib, muammolarni hal etishda ko‘maklashadi)." },
        
      ]
      const yettilikData = yettilik.find(item => item.id === parseInt(ID, 10));
  return (
    <div className='yettilikApp'>
      <Yettilik title={yettilikData.title} text1={yettilikData.text1} text2={yettilikData.text2} text3={yettilikData.text3} text4={yettilikData.text4} text5={yettilikData.text4} text6={yettilikData.text4}/>
    </div>
  )
}

export default YettilikApp
