// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./contact.module.css";
// Image imports.
import iconHours from '../images/icon_hours.svg';
import iconHolidays from '../images/icon_holidays.svg';
import iconCarriers from '../images/icon_carriers.svg';
import iconLocation from '../images/icon_location.svg';

export default () => (
  <div className={Style.wrapper}>
    <div className={Style.section}>

      <div className={Style.subsection}>
        <img src={iconHours} alt="icon" className={Style.icon} />
        <p className={Style.title}>Hours</p>
        <p className={Style.text}><span className={Style.bold}>Mon-Fri:</span> 8:30AM - 6:00PM</p>
        <p className={Style.text}><span className={Style.bold}>Sat:</span> 9:30AM - 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>Sun:</span> Closed</p>
      </div>

      <div className={Style.subsection}>
        <img src={iconHolidays} alt="icon" className={Style.icon} />
        <p className={Style.title}>Holiday Hours</p>
        <p className={Style.text}><span className={Style.bold}>Thanksgiving:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>Black Friday:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>Christmas Eve:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>Christmas Day:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>New Years Day:</span> Closed</p>
        <p className={Style.text}>Call for additional holiday hours</p>
      </div>

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
        <img src={iconLocation} alt="icon" className={Style.icon} />
        <p className={Style.title}>Location</p>
        <p className={Style.text}><span className={Style.bold}>Power Postal At Las Sendas</span></p>
        <p className={Style.text}>2824 N Power Rd</p>
        <p className={Style.text}>Suite 113 Mesa, AZ 85215</p>
        <p className={Style.text}><span className={Style.bold}>Phone: </span>480-654-2600</p>
        <p className={Style.text}><span className={Style.bold}>Fax: </span>480-654-2800</p>
        <p className={Style.text}><span className={Style.bold}>Email: </span><a href="mailto:info@powerpostal.com" className={Style.subtleButton}>Info@PowerPostal.com</a></p>
      </div>

    </div>
    <div className={Style.mapContainer}>
      <iframe 
        className={Style.map} 
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtwrHiiOlK4cRQVaDHsyWVFc&key=AIzaSyAGSdpZesorTJprfCK8IgLV-go95aXnaTU" 
        allowfullscreen title="Map" />
    </div>
  </div>
);