// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./contact.module.css";
// Image imports.
import iconHours from '../images/icon_hours.svg';
import iconCarriers from '../images/icon_carriers.svg';

export default () => (
  <div className={Style.wrapper}>
    <div className={Style.section}>

      <div className={Style.subsection}>
        <img src={iconCarriers} alt="icon" className={Style.icon} />
        <p className={Style.title}>Carrier Pickup Times</p>
        <p className={Style.text}><span className={Style.bold}>FedEx Ground:</span> 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>FedEx Express:</span> 5:00PM</p>
        <p className={Style.text}><span className={Style.bold}>UPS Ground:</span> 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>UPS Express:</span> 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>USPS:</span> Varies Daily (usually around 3:00PM)</p>
      </div>

      <div className={Style.subsection}>
        <img src={iconHours} alt="icon" className={Style.icon} />
        <p className={Style.title}>Hours</p>
        <p className={Style.text}><span className={Style.bold}>Mon-Fri:</span> 8:30AM - 6:00PM</p>
        <p className={Style.text}><span className={Style.bold}>Sat:</span> 9:30AM - 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>Sun:</span> Closed</p>
        <p className={Style.text}>Closed on all major holidays</p>
      </div>

    </div>
    <div className={Style.mapContainer}>
      <iframe 
        className={Style.map} 
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtwrHiiOlK4cRQVaDHsyWVFc&key=AIzaSyAGSdpZesorTJprfCK8IgLV-go95aXnaTU" 
        allowFullScreen title="Map" />
    </div>
  </div>
);