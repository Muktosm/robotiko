import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <section className="aboutUs">
        <div className="container">
          <div className="aboutUs_content">
            <div className="about_us_text">
              <p className="sub_heading">About Us</p>
              <h4 className="heading">
                Innovating the Future with AI and Robotics
              </h4>
            </div>
            <div className="objective">
              <div className="automation">
                <div className="bg"></div>
                <h3 className="heading">Automation</h3>
                <p>
                  Tincidunt nisi orci sodales non. Netus integer nunc mi nibh
                  cursus vitae ut nulla lobortis. Risus duis bibendum.
                </p>
              </div>
              <div className="precision">
                <div className="bg"></div>
                <h3 className="heading">Precision</h3>
                <p>
                  Tincidunt nisi orci sodales non. Netus integer nunc mi nibh
                  cursus vitae ut nulla lobortis. Risus duis bibendum.
                </p>
              </div>
              <div className="accuracy">
                <div className="bg"></div>
                <h3 className="heading">Accuracy</h3>
                <p>
                  Tincidunt nisi orci sodales non. Netus integer nunc mi nibh
                  cursus vitae ut nulla lobortis. Risus duis bibendum.
                </p>
              </div>
            </div>
            <div className="sponsor">
              <div>
                <img src="/images/logo1.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo2.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo3.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo4.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo5.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo6.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo7.png" alt="Logo" />
              </div>
              <div>
                <img src="/images/logo8.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
