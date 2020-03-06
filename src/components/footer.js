// Required imports.
import React from "react"
import { Link } from "gatsby"
// Component & Styling imports.
import Style from "./footer.module.css"
import Button from "./button.js"
// Image imports.
import PartnerEgghead from '../images/partner_egghead.png';
import PartnerMilano from '../images/partner_milano.png';
import PartnerLeaninTree from '../images/partner_leanin_tree.png';

export default () => (
  <div className={Style.wrapper}>

    <div className={Style.section}>
      <div className={Style.subsection}>
        <p className={Style.title}>Location</p>
        <p className={Style.text}><span className={Style.bold}>Power Postal At Las Sendas</span></p>
        <p className={Style.text}>2824 N Power Rd</p>
        <p className={Style.text}>Suite 113 Mesa, AZ 85215</p>
        <p className={Style.text}><span className={Style.bold}>Phone: </span>480-654-2600</p>
        <p className={Style.text}><span className={Style.bold}>Fax: </span>480-654-2800</p>
        <Button text="Get Directions" link="https://www.google.com/maps/place/Power+Postal+at+Las+Sendas,+2824+N+Power+Rd+%23113,+Mesa,+AZ+85215/@33.466985,-111.685576,16z/data=!4m2!3m1!1s0x872ba5238ac70ab7:0x575496cc1e835641?hl=en-US&gl=US"/>
      </div>
    </div>

    <div className={Style.section}>
      <p className={Style.title}>Proudly Partnered With:</p>
      <a href="https://www.leanintree.com/home.aspx" target="_blank">
        <img 
          src={PartnerLeaninTree}
          className={Style.partnerLogo}
          alt="LeaninTree" 
        />
      </a>
      <a href="https://eggheadcomputerservices.com/home" target="_blank">
        <img 
          src={PartnerEgghead}
          className={Style.partnerLogo}
          alt="Egghead" 
        />
      </a>
      <a href="http://milanomusic.com/" target="_blank">
        <img 
          src={PartnerMilano}
          className={Style.partnerLogo}
          alt="Milano" 
        />
      </a>
    </div>

    <div className={Style.section}>
      <p className={Style.text}>© 2020 Power Postal at Las Sendas</p>
      <p className={Style.text}>Questions? <Button text="Contact Us" link="mailto:info@powerpostal.com"/></p>
      <p className={Style.textSmall}>Built by <a href="http://blaineandersondev.com/" className={Style.subtleButton}>Blaine Anderson Development LLC</a></p>
    </div>
    
  </div>
);