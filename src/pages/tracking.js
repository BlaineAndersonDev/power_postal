// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./tracking.module.css";
// Image imports.
import CarrierUsps from '../images/carrier_usps.jpeg';
import CarrierUps from '../images/carrier_ups.jpeg';
import CarrierFedex from '../images/carrier_fedex.jpeg';
import CarrierDhl from '../images/carrier_dhl.jpeg';

export default () => (
  <div className={Style.wrapper}>
    <div className={Style.section}>
      <h1 className={Style.title}>Track Your Package</h1>
      <p className={Style.text}>Need up-to-date tracking information for your package? We’ll find out where it is and when it's going to be delivered.</p>
      <div className={Style.subsection}>
        <a href="https://tools.usps.com/go/TrackConfirmAction_input">
        <img 
          src={CarrierUsps}
          className={Style.carrierLogo}
          alt="USPSLogo" />
        </a>
      </div>
      <div className={Style.subsection}>
        <a href="https://www.ups.com/WebTracking?loc=en_US&WT.svl=PNRO_L1/">
          <img 
            src={CarrierUps}
            className={Style.carrierLogo}
            alt="UPSLogo" />
        </a>
      </div>
      <div className={Style.subsection}>
        <a href="https://www.dhl.com/TrackByNbr.asp?nav=TrackBynumber">
          <img 
            src={CarrierDhl}
            className={Style.carrierLogo}
            alt="DHLLogo" />
        </a>
      </div>
      <div className={Style.subsection}>
        <a href="https://www.fedex.com/apps/fedextrack/?action=track&cntry_code=us">
          <img 
            src={CarrierFedex}
            className={Style.carrierLogo}
            alt="FEDEXLogo" />
        </a>
      </div>
    </div>    
  </div>
);