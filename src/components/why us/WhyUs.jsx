import React from "react";
import "./WhyUs.css";
import { IoStar } from "react-icons/io5";
const WhyUs = () => {
  return (
    <>
      <section className="why_us">
        <div className="container">
          <div className="why_us_content">
            <div className="left">
              <div className="title">
                <div className="sub_heading">Why Choose Us</div>
                <div className="heading">
                  The Top Reasons to Partner with Us
                </div>
              </div>
              <div className="icon_box">
                <div>
                  <img src="/images/cpu.png" alt="icon " />
                  <div className="title">
                    <h5>Expertise in AI and Robotics</h5>
                    <p>
                      In non vel fermentum aliquam sed amet lorem ultrices
                      lacus. Cras eget tincidunt lectus risus id ultrices.
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/images/cpu.png" alt="icon " />
                  <div className="title">
                    <h5>Robotics System Integration</h5>
                    <p>
                      In non vel fermentum aliquam sed amet lorem ultrices
                      lacus. Cras eget tincidunt lectus risus id ultrices.
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/images/cpu.png" alt="icon " />
                  <div className="title">
                    <h5>Cutting-Edge Technologies</h5>
                    <p>
                      In non vel fermentum aliquam sed amet lorem ultrices
                      lacus. Cras eget tincidunt lectus risus id ultrices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image_box">
              <div className="card">
                <p className="rating">4.8</p>
                <div className="icon">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <div className="title">
                  <div className="heading">Google Review</div>
                  <div className="text">
                    Erat fusce placerat luctus ultrices dolor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
