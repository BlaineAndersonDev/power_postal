import React, { useState, useEffect, useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import useInterval from "./useInterval";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import "./embla.css";

// Image imports.
import pp1 from '../../images/pp_storeinterior.png';
import pp2 from '../../images/pp_storefront.png';
import pp3 from '../../images/pp_storesupplies.png';
const images = [pp1, pp2, pp3];

const EmblaCarouselComponent = ({ autoplay, delayLength, children }) => {
  const [embla, setEmbla] = useState(null);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [delay] = useState(delayLength);
  const [isRunning] = useState(autoplay);

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  useInterval(
    () => {
      if (selectedIndex === scrollSnaps.length - 1) {
        scrollTo(0);
      } else {
        scrollNext();
      }
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    };
    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
    }
    return () => embla && embla.destroy();
  }, [embla]);

  return (
    <div className="content">
      <div className="embla">
        <EmblaCarouselReact
          autoplay delayLength={80000}
          className="embla__viewport"
          emblaRef={setEmbla}
          options={{ 
            align: 'center',
            containerSelector: '*',
            slidesToScroll: 1,
            containScroll: false,
            draggable: true,
            dragFree: false,
            loop: true,
            speed: 10,
            startIndex: 0,
            selectedClass: 'is-selected',
            draggableClass: 'is-draggable',
            draggingClass: 'is-dragging',
           }}
          htmlTagName="div"
        >
          <div className="embla__container">
            {images.map((Child, index) => {
              return (
                <div className="embla__slide" key={index}>
                  <img className="embla__slide__inner" src={Child} alt={Child} />
                </div>);
            })}
          </div>
        </EmblaCarouselReact>
        <div className="embla__dots">
          {scrollSnaps.map((snap, index) => (
            <DotButton
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              key={index}
            />
          ))}
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarouselComponent;
