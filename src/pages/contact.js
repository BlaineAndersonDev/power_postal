// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./contact.module.css";
// Image imports.
import PPExterior from '../images/pp_exterior.png';

let googleURL = `https://www.google.com/maps/embed/v1/place?q=Skyward+Therapies+LLC,+6239+E+Brown+Rd+Suite+112+Room+7,+Mesa,+AZ+85205&key=AIzaSyAGSdpZesorTJprfCK8IgLV-go95aXnaTU`


export default () => (
  <div className={Style.wrapper}>
    <div className={Style.section}>

      <div className={Style.subsection}>
        <p className={Style.title}>Hours</p>
        <p className={Style.text}><span className={Style.bold}>Mon-Fri:</span> 8:30AM - 6:00PM</p>
        <p className={Style.text}><span className={Style.bold}>Sat:</span> 9:30AM - 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>Sun:</span> Closed</p>
      </div>

      <div className={Style.subsection}>
        <p className={Style.title}>Holiday Hours</p>
        <p className={Style.text}><span className={Style.bold}>Thanksgiving:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>Black Friday:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>Christmas Eve:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>Christmas Day:</span> Closed</p>
        <p className={Style.text}><span className={Style.bold}>New Years Day:</span> Closed</p>
        <p className={Style.text}>Call for additional holiday hours</p>
      </div>

      <div className={Style.subsection}>
        <p className={Style.title}>Carrier Pickup Times</p>
        <p className={Style.text}><span className={Style.bold}>FedEx Ground:</span> 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>FedEx Express:</span> 5:00PM</p>
        <p className={Style.text}><span className={Style.bold}>UPS Ground:</span> 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>UPS Express:</span> 4:00PM</p>
        <p className={Style.text}><span className={Style.bold}>USPS:</span> Varies Daily (usually around 3:00PM)</p>
      </div>

      <div className={Style.subsection}>
        <p className={Style.title}>Location</p>
        <p className={Style.text}><span className={Style.bold}>Power Postal At Las Sendas</span></p>
        <p className={Style.text}>2824 N Power Rd</p>
        <p className={Style.text}>Suite 113 Mesa, AZ 85215</p>
        <p className={Style.text}><span className={Style.bold}>Phone: </span>480-654-2600</p>
        <p className={Style.text}><span className={Style.bold}>Fax: </span>480-654-2800</p>
        <p className={Style.text}><span className={Style.bold}>Email: </span>Info@PowerPostal.com</p>
      </div>

    </div>
    <div className={Style.mapContainer}>
      <iframe 
        className={Style.map} 
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtwrHiiOlK4cRQVaDHsyWVFc&key=AIzaSyAGSdpZesorTJprfCK8IgLV-go95aXnaTU" 
        allowfullscreen />
    </div>
  </div>
);