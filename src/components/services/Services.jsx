import React from "react";
import "./Services.css";
import CommonButton from "../../common/commonButton/CommonButton";
import { Link } from "react-router";
const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services_content">
            <div className="top">
              <div className="services_text">
                <div className="sub_heading">Our Services</div>
                <div className="heading">
                  Revolutionize Your Industry with AI and Robotics
                </div>
              </div>
              <CommonButton commonButtonContent={"Discover More"} />
            </div>
            <div className="griding">
              <div className="card">
                <div className="img"></div>
                <div className="text">
                  <h5>Inspection</h5>
                  <p>
                    Augue congue turpis ut purus ut nibh sit. Et consectetur
                    elit volutpat blandit sed facilisis. At in orci vel a
                    vestibulum egestas. Ut faucibus.
                  </p>
                  <Link to={"/learnmore"}>Learn More</Link>
                </div>
              </div>
              <div className="card">
                <div className="img"></div>
                <div className="text">
                  <h5>Construction</h5>
                  <p>
                    Augue congue turpis ut purus ut nibh sit. Et consectetur
                    elit volutpat blandit sed facilisis. At in orci vel a
                    vestibulum egestas. Ut faucibus.
                  </p>
                  <Link to={"/learnmore"}>Learn More</Link>
                </div>
              </div>
              <div className="card">
                <div className="img"></div>
                <div className="text">
                  <h5>Manufacturing</h5>
                  <p>
                    Augue congue turpis ut purus ut nibh sit. Et consectetur
                    elit volutpat blandit sed facilisis. At in orci vel a
                    vestibulum egestas. Ut faucibus.
                  </p>
                  <Link to={"/learnmore"}>Learn More</Link>
                </div>
              </div>
              <div className="card">
                <div className="img"></div>
                <div className="text">
                  <h5>Public Safety</h5>
                  <p>
                    Augue congue turpis ut purus ut nibh sit. Et consectetur
                    elit volutpat blandit sed facilisis. At in orci vel a
                    vestibulum egestas. Ut faucibus.
                  </p>
                  <Link to={"/learnmore"}>Learn More</Link>
                </div>
              </div>
              <div className="card">
                <div className="img"></div>
                <div className="text">
                  <h5>Power & Utilities</h5>
                  <p>
                    Augue congue turpis ut purus ut nibh sit. Et consectetur
                    elit volutpat blandit sed facilisis. At in orci vel a
                    vestibulum egestas. Ut faucibus.
                  </p>
                  <Link to={"/learnmore"}>Learn More</Link>
                </div>
              </div>
              <div className="card">
                <div className="img"></div>
                <div className="text">
                  <h5>Management</h5>
                  <p>
                    Augue congue turpis ut purus ut nibh sit. Et consectetur
                    elit volutpat blandit sed facilisis. At in orci vel a
                    vestibulum egestas. Ut faucibus.
                  </p>
                  <Link to={"/learnmore"}>Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
