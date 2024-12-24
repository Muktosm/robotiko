import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero_content">
            <div className="subHeading">
              <h3>AI & Robotic Engineering</h3>
            </div>
            <div className="heading">
              <h1>Changing Your Idea of What Robots Can Do.</h1>
            </div>
            <div className="paragraph">
              <p>
                Leo scelerisque dolor non ut dignissim aliquet sit nulla.
                Venenatis leo leo et in lorem netus adipiscing cursus. Amet nisi
                erat aliquet vitae eget. Elementum ut lacinia in sapien id dolor
                adipiscing dolor.
              </p>
            </div>
            <div className="background">
              <img src="/images/headerbg.png" alt="Hero image" />
              <div className="imageFloat">
                <h3>12 +</h3>
                <h5>Years Of Experience</h5>
                <p>
                  Placerat quis libero et diam tellus lectus sagittis quisque
                  hendrerit. Ipsum tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
