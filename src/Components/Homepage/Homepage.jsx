import React from "react";
import "./Homepage.css";
import { Carousel } from "react-bootstrap"; // Import Carousel component

const Homepage = () => {
  return (
    <div className="homepageMain" id="home">
      {/* Introduction Section */}
      <section className="introduction">
        <div className="container mCon">
          <p>
            Elevate your music with our curated selection of piano plugins and
            gear. Whether you're a seasoned pianist or just starting, discover
            the tools that unlock the full potential of your creativity.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="heroMain">
        <div className="container mCon">
          <h1>Your Ultimate Keyboard Rig</h1>
          <p>
            Unlock the full potential of your music with the best piano plugins
            and gear.
          </p>
          <a href="#about-keyboard-rig" className="cta-button">
            Explore Now
          </a>
        </div>
      </section>

      {/* About Keyboard Rig Section */}
      <section id="about-keyboard-rig" className="about-keyboard-rig section">
        <div className="container">
          <h2>About Keyboard Rigs</h2>
          <p>
            A keyboard rig is the heart of musical expression, combining
            keyboards, synthesizers, and accessories to create captivating
            sounds. It's a essential setup for musicians, offering a world of
            creative possibilities.
          </p>
          <p>
            Build your keyboard rig to unlock your musical potential – whether
            performing live, recording, or practicing at home. Explore a rich
            palette of sounds and textures that elevate your music to new
            heights.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
