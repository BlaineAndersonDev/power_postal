// Required imports.
import React from "react";
// Component & Styling imports.
import Style from "./carousel.module.css";
import EmblaCarousel from "./carouselParts/EmblaCarousel";
// Image imports.
import pp1 from '../images/icon_location.svg';
import pp2 from '../images/icon_hours.svg';
import pp3 from '../images/icon_carriers.svg';

const images = [pp1, pp2, pp3];

const Carousel = () => (
  <div className="content">
    <EmblaCarousel autoplay delayLength={80000}>
      {images.map((image) =>
        <div></div>
      )}
      <img src={pp1} alt="Thing1" className={Style.carouselImage}/>
      <img src={pp1} alt="Thing1" className={Style.carouselImage}/>
      <img src={pp1} alt="Thing1" className={Style.carouselImage}/>
      <img src={pp1} alt="Thing1" className={Style.carouselImage}/>
      <img src={pp1} alt="Thing1" className={Style.carouselImage}/>
    </EmblaCarousel>
  </div>
);
export default Carousel

