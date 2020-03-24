// Required imports.
import React from "react";
// Component & Stypng imports.
import Style from "./services.module.css";
// Image imports.
import icon from '../images/icon_hours.svg';

export default () => (
  <div className={Style.wrapper}>
    <div id={Style.overlay} ></div>

    <h2 id={Style.title} content="Services">Our Services</h2>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h4 className={Style.subTitle} content="Packaging Section">Shipping & Packaging Includes:</h4>
        <ul className={Style.listContainer}>
          <li className={Style.listItem}>Professional Packaging right in front of you.</li>
          <li className={Style.listItem}>Free quotes.</li>
          <li className={Style.listItem}>Shipping via USPS, UPS, FedEx & DHL.</li>
        </ul>
      </div>
    </div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h4 className={Style.subTitle} content="Personal Mailbox Section">Personal Mailboxes Include:</h4>
        <ul className={Style.listContainer}>
          <li className={Style.listItem}>A real street address, not a P.O. Box number.</li>
          <li className={Style.listItem}>Receipt notification</li>
          <li className={Style.listItem}>Full service mail & package receiving</li>
          <li className={Style.listItem}>Mail holding & forwarding</li>
          <li className={Style.listItem}>Package acceptance from all shipping carriers!</li>
        </ul>
      </div>
    </div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h4 className={Style.subTitle} content="USPS Services Section">USPS Services Include:</h4>
        <ul className={Style.listContainer}>
          <li className={Style.listItem}>Postage Stamps</li>
          <li className={Style.listItem}>Certified Mail</li>
          <li className={Style.listItem}>Metered Mail</li>
          <li className={Style.listItem}>Priority Mail®</li>
          <li className={Style.listItem}>Parcel Post®</li>
          <li className={Style.listItem}>First Class Mail®</li>
          <li className={Style.listItem}>Delivery Confirmation™</li>
          <li className={Style.listItem}>Return Receipt</li>
        </ul>
      </div>
    </div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h4 className={Style.subTitle} content="Other Services Section">Other Supplies & Services:</h4>
        <p className={Style.subText}></p>
        <ul className={Style.listContainer}>
          <li className={Style.listItem}>Notary Service</li>
          <li className={Style.listItem}>Milano Music Rentals</li>
          <li className={Style.listItem}>Mailing & Packaging supplies for home</li>
          <li className={Style.listItem}>Faxing</li>
          <li className={Style.listItem}>Copy & Binding</li>
          <li className={Style.listItem}>Laminating</li>
          <li className={Style.listItem}>Secure Document Shredding</li>
          <li className={Style.listItem}>Transfer Video to DVD</li>
          <li className={Style.listItem}>Gift Shop, Greeting Cards, Candles & more</li>
        </ul>
      </div>
    </div>

  </div>
);