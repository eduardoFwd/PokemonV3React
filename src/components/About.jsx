import React from "react";
import "../styles/About.css";
import { infoAbout } from "../assets/imports/info";
import pokeball from "../assets/images/aboutPokeball.png"
function About() {
  return (
    <div className="about-container">
      {
      Object.keys(infoAbout).map((key) => {
        const value = infoAbout[key];
        return (
          <div key={key} className="card-about" style={{ backgroundColor:value[2] }}>
            <img src={pokeball} />
            <div className="header">{value[0]}</div>
            <div className="main">{value[1]}</div>
          </div>
        );
      })
      }
    </div>
  );
}

export default About;
