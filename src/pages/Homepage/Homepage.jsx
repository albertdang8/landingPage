import React from "react";

import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Homepage;
