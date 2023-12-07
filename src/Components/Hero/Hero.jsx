import React from "react";
import "./Hero.css";

import arrow_btn from "../../assets/arrow_btn.png";

const Hero = ({ heroData, setHeroCount, heroCount }) => {
  return (
    <div className="hero">
      <div className="hero_text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero_explore">
        <p>Latest PlugIns</p>
        <img src={arrow_btn} alt="next" />
      </div>

      <div className="hero-dot_play">
        <ul className="hero_dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
