// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./landing.module.css";

export default () => (
  <div className={Style.wrapper}>
    <div className={Style.textOverlay}> 
      <h1 className={Style.title}>Power Postal</h1>
      <p className={Style.subtitle}>Affordable & Reliable Shipping Services</p>
    </div>
  </div>
);