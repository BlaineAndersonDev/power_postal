// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./about.module.css";
// Image imports.
import PPExterior from '../images/pp_exterior.png';

export default () => (
  <div className={Style.wrapper}>
    <div className={Style.section}>
      <h1 className={Style.title}>Welcome to Power Postal At Las Sendas</h1>
      <p className={Style.text}>Power Postal at Las Sendas is independently family-owned and operated shipping location in Mesa, AZ. We pride ourselves on being your neighborhood "mom and pop" small business. Power Postal at Las Sendas has been a community fixture for nearly ten years.</p>
      <p className={Style.text}>Conveniently located on the NW corner of Power and McDowell, we are your one-stop shop for all of your business and shipping needs in Mesa, AZ.</p>
      <p className={Style.text}>We are experts in packing so no need to worry about your item getting to its destination in one piece. Whether it's luggage, artwork, or small fragile items we know how to pack it. We'll also provide you with all of your shipping options by price and carrier.</p> 
      <p className={Style.text}>Email us your print or copy job, or if you need it now just bring us your flash drive or portable storage device and we'll print it out while you wait. Our personal mailbox service provides you with a physical address to receive packages at a safe and secure location. We'll call, email or text you when they arrive.</p>
      <p className={Style.text}> Our fast FRIENDLY customer service will exceed your expectations!</p>
    </div>
    <div className={Style.section}>
      <img 
        src={PPExterior}
        className={Style.imageUnderlay}
        alt="LandingImage" />
    </div>
  </div>
);