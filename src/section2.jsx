import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import "./section2.css"

export const Section2 = () => {
  const cardsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let timeln = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        pin: ".cont2",
        pinSpacing: true,
        start: "top 200px",
        end: "+=2000",
        scrub: 1
      }
    });

    timeln.addLabel('card1');
    timeln.to('.card-1', {
      yPercent: 0,
      opacity: 1
    });

    timeln.from('.card-2', {
      yPercent: 75,
      opacity: 0
    });
    timeln.addLabel("card2");

    timeln.to(".card-1", {
      scale: 0.95,
      yPercent: -0.5,
      opacity: 0.5
    }, "-=0.3");

    timeln.to('.card-2', {
      yPercent: 0,
      opacity: 1
    });

    timeln.from('.card-3', {
      yPercent: 75,
      opacity: 0
    });
    timeln.addLabel('card3');

    timeln.to(".card-2", {
      scale: 0.98,
      yPercent: -0.4,
      opacity: 0.6
    }, "-=0.3");

    timeln.to(".card-3", {
      yPercent: 0,
      opacity: 1
    });

    timeln.to('.card-3', {});

  }, []);

  return (
    <div className='cont2'>
      <div className='cont3'>
        <div className='big-text'>
          Create at the speed of thought.
        </div>
        <div className='small-text'>
          Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.5vw", flex: "3", alignItems: "center", justifyContent: "center" }}>
        <div className="cards" ref={cardsRef}>
          <div className="card card-1" style={{ borderRadius: "10px" }}><h2> </h2></div>
          <div className="card card-2" style={{ borderRadius: "10px" }}><h2> </h2></div>
          <div className="card card-3" style={{ borderRadius: "10px" }}><h2> </h2></div>
        </div>
      </div>
    </div>
  );
};


