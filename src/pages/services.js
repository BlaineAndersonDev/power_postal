// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./services.module.css";
// Image imports.
import PP01 from '../images/services02.jpg';

export default () => (
  <div className={Style.wrapper}>
    <div id={Style.overlay}></div>
    <div className={Style.section}>
      <div className={Style.section}>
        <h1 className={Style.subTitle}>Our Specialized Services Include:</h1>
        <li className={Style.subText}>Shipping via USPS, FedEx, UPS, & DHL</li>
        <li className={Style.subText}>Expert Packaging</li>
        <li className={Style.subText}>Low Cost Personal Mailboxes</li>
        <li className={Style.subText}>Faxing</li>
        <li className={Style.subText}>Copy & Binding Services</li>
        <li className={Style.subText}>Laminating</li>
        <li className={Style.subText}>Notary Service</li>
        <li className={Style.subText}>Office and Mailing Supplies</li>
        <li className={Style.subText}>Packing and Shipping Supplies</li>
        <li className={Style.subText}>Gift Shop, Greeting Cards, Candles</li>
        <li className={Style.subText}>Secure Document Shredding</li>
        <li className={Style.subText}>Transfer Video to DVD</li>
        <li className={Style.subText}>Milano Music Rentals</li>
        <li className={Style.subText}></li>
      </div>
      <div className={Style.section}>
        <h1 className={Style.subTitle}>Our Personal Mailboxes Include:</h1>
        <li className={Style.subText}>A Real Street Address, not a P.O. Box Number</li>
        <li className={Style.subText}>Receipt Notification</li>
        <li className={Style.subText}>Full-service Mail and Package Receiving</li>
        <li className={Style.subText}>Mail Holding and Forwarding</li>
        <li className={Style.subText}>Package Acceptance from all Shipping Carriers</li>
      </div>
      <div className={Style.section}>
        <h1 className={Style.subTitle}>USPS Postal Services Include:</h1>
        <li className={Style.subText}>Postage Stamps</li>
        <li className={Style.subText}>Certified Mail</li>
        <li className={Style.subText}>Metered Mail</li>
        <li className={Style.subText}>Priority Mail®</li>
        <li className={Style.subText}>Parcel Post®</li>
        <li className={Style.subText}>First Class Mail®</li>
        <li className={Style.subText}>Delivery Confirmation™</li>
        <li className={Style.subText}>Return Receipt</li>
      </div>
    </div>
  </div>
);