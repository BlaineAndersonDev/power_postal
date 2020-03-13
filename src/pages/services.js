// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./services.module.css";
// Image imports.
import icon from '../images/icon_hours.svg';

export default () => (
  <div className={Style.wrapper}>
    <div id={Style.overlay}></div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h1 className={Style.subTitle}>Packaging</h1>
        <li className={Style.subText}>We take care of the packaging so you can be stress free.</li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
      </div>
    </div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h1 className={Style.subTitle}>Packaging</h1>
        <li className={Style.subText}>We take care of the packaging so you can be stress free.</li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
      </div>
    </div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h1 className={Style.subTitle}>Packaging</h1>
        <li className={Style.subText}>We take care of the packaging so you can be stress free.</li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
      </div>
    </div>

    <div className={Style.section}>
      <img 
        src={icon}
        className={Style.icon}
        alt="LandingImage" 
      />
      <div className={Style.subSection}>
        <h1 className={Style.subTitle}>Packaging</h1>
        <li className={Style.subText}>We take care of the packaging so you can be stress free.</li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
        <li className={Style.subText}>Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text </li>
      </div>
    </div>

  </div>
);