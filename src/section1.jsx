import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./section1.css"

export function Section1() {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: window,
    });

    gsap.to(".text p", {
      backgroundPositionX: "1%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".text p ",
        scrub: 2,
        start: "top 200px",
        end: "bottom top",
        pin: ".text ",
        pinSpacing: false
      },
    });
  }, []);

  return (
    <div>

      <div className="buttons" style={{ display: "flex", justifyContent: "space-between", top: "2vh", position: "sticky", marginTop: "2vh" }}>
        <button className="logo2" >
          <img className="logoimg" src="./Chronicle logo.svg" alt="" srcset="" />
        </button>
        <button className="join"><span id="text"><b>Join Beta</b></span></button>
      </div>
      <div className="header">
        <img className="headerimg" src="./mercor.png" alt="" />
        <h1 style={{ textAlign: "center" }}>Internship Assignment</h1>
      </div>
      <div className="container">
        <div className="text">
          <p id="target" style={{ opacity: 1 }}>In</p>
          <p id="target" style={{ opacity: 1 }}>Chronicle</p>
          <p id="target" style={{ opacity: 1 }}>everything</p>
          <p id="target" style={{ opacity: 1 }}>is</p>
          <p id="target" style={{ opacity: 1 }}>made</p>
          <p id="target" style={{ opacity: 1 }}>with</p>
          <p id="target" style={{ opacity: 1 }}>Blocks</p>
          <p id="target" style={{ opacity: 1 }}>that</p>
          <p id="target" style={{ opacity: 1 }}>come</p>
          <p id="target" style={{ opacity: 1 }}>with</p>
          <p id="target" style={{ opacity: 1 }}>pixel</p>
          <p id="target" style={{ opacity: 1 }}>perfect</p>
          <p id="target" style={{ opacity: 1 }}>design,</p>
          <p id="target" tyle={{ opacity: 1 }}>interactivity</p>
          <p id="target" tyle={{ opacity: 1 }}>and</p>
          <p id="target" tyle={{ opacity: 1 }}>motion</p>
          <p id="target" tyle={{ opacity: 1 }}>out</p>
          <p id="target" tyle={{ opacity: 1 }}>of</p>
          <p id="target" tyle={{ opacity: 1 }}>the</p>
          <p id="target" tyle={{ opacity: 1 }}>box.</p>
          <p id="target" tyle={{ opacity: 1 }}>Instead</p>
          <p id="target" tyle={{ opacity: 1 }}>of</p>
          <p id="target" tyle={{ opacity: 1 }}>designing</p>
          <p id="target" tyle={{ opacity: 1 }}>from</p>
          <p id="target" tyle={{ opacity: 1 }}>scratch,</p>
          <p id="target" tyle={{ opacity: 1 }}>simply</p>
          <p id="target" tyle={{ opacity: 1 }}>choose</p>
          <p id="target" tyle={{ opacity: 1 }}>the</p>
          <p id="target" tyle={{ opacity: 1 }}>right</p>
          <p id="target" tyle={{ opacity: 1 }}>one</p>
          <p id="target" tyle={{ opacity: 1 }}>from</p>
          <p id="target" tyle={{ opacity: 1 }}>our</p>
          <p id="target" tyle={{ opacity: 1 }}>library</p>
          <p id="target" tyle={{ opacity: 1 }}>of</p>
          <p id="target" tyle={{ opacity: 1 }}>blocks</p>
          <p id="target" tyle={{ opacity: 1 }}>and</p>
          <p id="target" tyle={{ opacity: 1 }}>see</p>
          <p id="target" tyle={{ opacity: 1 }}>the</p>
          <p id="target" tyle={{ opacity: 1 }}>magic</p>
          <p id="target" tyle={{ opacity: 1 }}>unfold.</p>


        </div>

      </div>

    </div>
  );
}

