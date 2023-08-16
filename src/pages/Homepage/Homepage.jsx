import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import CallToAction from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Homepage;
