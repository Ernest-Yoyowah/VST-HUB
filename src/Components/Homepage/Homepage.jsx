import React from "react";
import "./Homepage.css";
import { Carousel } from "react-bootstrap"; // Import Carousel component

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <h1>Your Ultimate Piano Rig</h1>
          <p>
            Unlock the full potential of your music with the best piano plugins
            and gear.
          </p>
          <a href="#featured-plugins" className="cta-button">
            Explore Now
          </a>
        </div>
      </section>

      <section id="featured-plugins" className="featured-plugins">
        <div className="container">
          <h2>Featured Piano Plugins</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-0"
                src="https://www.sweetwater.com/insync/media/2019/06/062019-insync-ProductionRig.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Plugin 1</h3>
                <p>Description for Plugin 1.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-0"
                src="https://www.sweetwater.com/insync/media/2019/07/ceb02b61-072619-insync-virtualkeyrig.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Plugin 2</h3>
                <p>Description for Plugin 1.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-0"
                src="https://i.ytimg.com/vi/h4S7wob7--s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAf919lBY0C8zwwgeRnLMfzCiFA2wCAU"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Plugin 3</h3>
                <p>Description for Plugin 1.</p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Add more Carousel.Items for additional plugins */}
          </Carousel>
        </div>
      </section>

      <section className="build-rig">
        <div className="container">
          <h2>Build Your Piano Rig</h2>
          <p>
            Discover the essential gear and plugins for keyboardists and
            pianists.
          </p>
          {/* Add information about keyboards, MIDI controllers, software, etc. */}
        </div>
      </section>

      <section className="tutorials">
        <div className="container">
          <h2>Guides and Tutorials</h2>
          <p>
            Learn tips and tricks to optimize your piano rig and improve your
            playing.
          </p>
          {/* Add tutorials, guides, and educational content */}
        </div>
      </section>

      <section className="community">
        <div className="container">
          <h2>Join the Community</h2>
          <p>
            Connect with fellow musicians, share your experiences, and get
            inspired.
          </p>
          {/* Add links to forums, social media, or a dedicated community section */}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
