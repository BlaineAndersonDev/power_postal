// Required imports.
import React from "react"
// Component & Styling imports.
import Style from "./footer.module.css"
import Button from "../components/button.js"
// Image imports.
import PartnerEgghead from '../images/partner_egghead.png';
import PartnerMilano from '../images/partner_milano.png';
import PartnerLeaninTree from '../images/partner_leanin_tree.png';

export default () => (
  <div className={Style.wrapper}>

    <div id={Style.addressBox} className={Style.section}>
      <p className={Style.title}>Contact Us</p>
      <div className={Style.subsection}>
        <p className={Style.text}><span className={Style.bold}>Power Postal At Las Sendas</span></p>
        <p className={Style.text}>2824 N Power Rd</p>
        <p className={Style.text}>Suite 113 Mesa, AZ 85215</p>
      </div>
      <div className={Style.subsection}>
        <p className={Style.text}><span className={Style.bold}>Email: </span><a href="mailto:info@powerpostal.com" className={Style.subtleButton}>Info@PowerPostal.com</a></p>
        <p className={Style.text}><span className={Style.bold}>Phone: </span>480-654-2600</p>
        <p className={Style.text}><span className={Style.bold}>Fax: </span>480-654-2800</p>
        <a href="https://www.google.com/maps/place/Power+Postal+at+Las+Sendas,+2824+N+Power+Rd+%23113,+Mesa,+AZ+85215/@33.466985,-111.685576,16z/data=!4m2!3m1!1s0x872ba5238ac70ab7:0x575496cc1e835641?hl=en-US&gl=US" className={Style.subtleButton}><span className={Style.bold}>Get Directions</span></a>
      </div>
    </div>

    <div className={Style.section}>
      <p id={Style.partnerTitle} className={Style.title}>Proudly Partnered With:</p>
      <div id={Style.partnerBox}>
        <a href="https://www.leanintree.com/home.aspx" target="_blank" rel="noopener noreferrer">
          <img 
            src={PartnerLeaninTree}
            className={Style.partnerLogo}
            alt="LeaninTree" 
          />
        </a>
        <a href="https://eggheadcomputerservices.com/home" target="_blank" rel="noopener noreferrer">
          <img 
            src={PartnerEgghead}
            className={Style.partnerLogo}
            alt="Egghead" 
          />
        </a>
        <a href="http://milanomusic.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={PartnerMilano}
            className={Style.partnerLogo}
            alt="Milano" 
          />
        </a>
      </div>
    </div>

    <div id={Style.bottomBox} className={Style.section}>
      <p className={Style.textSmall}>© 2020 Power Postal at Las Sendas</p>
      <p className={Style.textSmall}><a href="http://blaineandersondev.com/" className={Style.subtleButton}>Blaine Anderson Development LLC</a></p>
    </div>
    
  </div>
);