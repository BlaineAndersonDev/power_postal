// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./about.module.css";
// import Carousel from "../components/carousel.js";
import EmblaCarousel from "../components/carouselParts/EmblaCarousel";


export default () => (
  <div className={Style.wrapper}>
    <div className={Style.section}>
      <h1 className={Style.title}>Welcome to Power Postal At Las Sendas</h1>
      <p className={Style.text}>Power Postal at Las Sendas is a family-owned & independent shipping outlet in Mesa, AZ. We pride ourselves on being your neighborhood "mom and pop" small business community fixture for nearly twenty years.</p>
      <p className={Style.text}>No matter if its luggage, artwork, or small fragile items, we are experts in packing and will make sure your item arrives safely. We also provide all the shipping options from all major carriers at once for your convenience.</p> 
      <p className={Style.text}> Our fast & FRIENDLY customer service will exceed your expectations!</p>
    </div>
    <div className={Style.section}>
      <EmblaCarousel />
    </div>
  </div>
);