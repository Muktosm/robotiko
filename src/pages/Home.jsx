import React from "react";
import Hero from "../components/hero/Hero";
import Featurs from "../components/featurs/Featurs";
import Carousels from "../components/carousels/Carousels";
import WhyUs from "../components/why us/WhyUs";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Featurs />
      <Carousels />
      <WhyUs />
      <Testimonial />
    </>
  );
};

export default Home;
