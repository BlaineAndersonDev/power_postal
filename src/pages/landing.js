// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./landing.module.css";
// Image imports.
import UspsTruck from '../images/postal_truck_large.jpg';

export default () => (
  <div className={Style.wrapper}>
    <img 
      src={UspsTruck}
      className={Style.imageUnderlay}
      alt="LandingImage" />
    <div className={Style.textOverlay}> 
      <h1 className={Style.title}>Power Postal</h1>
      <p className={Style.subtitle}>Affordable & Reliable Shipping Services</p>
    </div>
  </div>
);