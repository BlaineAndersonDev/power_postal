import React from "react";
import ReactDOM from "react-dom";
import EmblaCarousel from "./carouselParts/EmblaCarousel";
import "./carouselParts/base.css";
import "./carouselParts/reset.css";

const Carousel = () => (
  <div className="content">
    <EmblaCarousel autoplay delayLength={2000}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </EmblaCarousel>
  </div>
);
export default Carousel

