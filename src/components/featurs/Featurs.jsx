import React from "react";
import "./Featurs.css";
import CommonButton from "../../common/commonButton/CommonButton";
const Featurs = () => {
  return (
    <>
      <section className="featurs">
        <div className="container">
          <div className="featurs_content">
            <div className="featur_text">
              <div>
                <div className="sub_heading">Feature</div>
                <div className="heading">
                  Empowering Industries with Intelligent Automation
                </div>
              </div>
              <CommonButton commonButtonContent={"Discover More"} />
            </div>
            <div className="featurs">
              <div className="img"></div>
              <div className="right">
                <div className="meachin_learning">
                  <img src="/images/cpu.png" alt="cpu image" />
                  <div className="text_area">
                    <div className="heading">Machine Learning</div>
                    <div className="text">
                      Integer nunc mi nibh cursus vitae ut nulla lobortis. Risus
                      duis bibendum.
                    </div>
                  </div>
                </div>
                <div className="sensor_integration">
                  <img src="/images/cpu.png" alt="cpu image" />
                  <div className="text_area">
                    <div className="heading">Sensor Integration</div>
                    <div className="text">
                      Integer nunc mi nibh cursus vitae ut nulla lobortis. Risus
                      duis bibendum.
                    </div>
                  </div>
                </div>
                <div className="computer_vision">
                  <img src="/images/cpu.png" alt="cpu image" />
                  <div className="text_area">
                    <div className="heading">Computer Vision</div>
                    <div className="text">
                      Integer nunc mi nibh cursus vitae ut nulla lobortis. Risus
                      duis bibendum.
                    </div>
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

export default Featurs;
