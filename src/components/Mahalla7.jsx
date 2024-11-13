import React from 'react'
import '../styles/mahalla7.css'
import MahallaRaisiIcon from '../images/gerb_uzb1.png';
import HokimYordamchisiIcon from '../images/hokim-yordamchi-logo.png';
import XotinQizlarFaoliIcon from '../images/xotin-qizlar-logo.jpeg';
import YoshlarYetakchisiIcon from '../images/gerb_uzb_kuk.png';
import ProfilaktikaInspektoriIcon from '../images/ichkki-ishlar_logo.png';
import IjtimoiyXodimIcon from '../images/ijtimoiy-logo.png';
import SoliqInspektoriIcon from '../images/Logo_Nalog_1.png';
import { NavLink } from 'react-router-dom';
function Mahalla7() {
  const iconsData = [
    { id: 1, icon: MahallaRaisiIcon, label: 'MAHALLA RAISI' },
    { id: 2, icon: HokimYordamchisiIcon, label: 'HOKIM YORDAMCHISI' },
    { id: 3, icon: XotinQizlarFaoliIcon, label: 'XOTIN-QIZLAR FAOLI' },
    { id: 4, icon: YoshlarYetakchisiIcon, label: 'YOSHLAR YETAKCHISI' },
    { id: 5, icon: ProfilaktikaInspektoriIcon, label: 'PROFILAKTIKA INSPEKTORI' },
    { id: 6, icon: IjtimoiyXodimIcon, label: 'IJTIMOIY XODIM' },
    { id: 7, icon: SoliqInspektoriIcon, label: 'SOLIQ INSPEKTORI' },
  ];
  return (
    <div className='mahalla7'>
      <div className="container_mahalla">
        <div className="lines-container">
          <div className="line"></div>
          <h2 className="title">MAHALLA YETTILIGI</h2>
          <div className="line"></div>
        </div>
        <div className="icons-container">
          {iconsData.map((item, index) => (
            <NavLink to={`/yettilik/${item.id}`}> <div key={index} className="icon-box">
              <img src={item.icon} alt={item.label} className="icon" />
              <p className="label">{item.label}</p>
            </div></NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mahalla7
