import React from "react";
import Slider from "react-slick";

import anishaImg from "../../assets/images/avatar-anisha.png";
import aliImg from "../../assets/images/avatar-ali.png";
import richardImg from "../../assets/images/avatar-richard.png";
import shanaiImg from "../../assets/images/avatar-shanai.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="testSlider">
      <h2 className="boop2">What they've said</h2>

      <Slider {...settings} className="testimonial-container">
        <div>
          <div className="testimony-card">
            <img
              src={anishaImg}
              className="testimonyImg"
              alt="Ali Bravo's image"
            />
            <h3>Anisha Li</h3>
            <p className="testimony">
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused."
            </p>
          </div>
        </div>
        <div>
          <div className="testimony-card">
            <img
              src={aliImg}
              className="testimonyImg"
              alt="Ali Bravo's image"
            />
            <h3>Ali Bravo</h3>
            <p className="testimony">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>
        <div>
          <div className="testimony-card">
            <img
              src={richardImg}
              className="testimonyImg"
              alt="Ali Bravo's image"
            />
            <h3>Richard Watts</h3>
            <p className="testimony">
              "Manage allows us to provide structure and process. It keeps us
              organized and focused. I can't stop recommending them to everyone
              I talk to!"
            </p>
          </div>
        </div>
        <div>
          <div className="testimony-card">
            <img
              src={shanaiImg}
              className="testimonyImg"
              alt="Ali Bravo's image"
            />
            <h3>Shanai Gough</h3>
            <p className="testimony">
              "Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in sync without
              being intrusive."
            </p>
          </div>
        </div>
      </Slider>

      <div className="testimonial-container">
        <a className="start-btn">Get Started</a>
      </div>
    </div>
  );
};

export default Testimonials;

{
  /* <div className="testimony-slider boop2">
  <div className="testimony-card">
    <img
      src={anishaImg}
      className="testimonyImg"
      alt="Ali Bravo's image"
    />
    <h3>Anisha Li</h3>
    <p className="testimony">
      "We have been able to cancel so many other subscriptions since
      using Manage. There is no more cross-channel confusion and
      everyone is much more focused."
    </p>
  </div>
  <div className="testimony-card">
    <img
      src={aliImg}
      className="testimonyImg"
      alt="Ali Bravo's image"
    />
    <h3>Ali Bravo</h3>
    <p className="testimony">
      "Manage has supercharged our team's workflow. The ability to
      maintain visibility on larger milestones at all times keeps
      everyone motivated."
    </p>
  </div>
  <div className="testimony-card">
    <img
      src={richardImg}
      className="testimonyImg"
      alt="Ali Bravo's image"
    />
    <h3>Richard Watts</h3>
    <p className="testimony">
      "Manage allows us to provide structure and process. It keeps us
      organized and focused. I can't stop recommending them to everyone
      I talk to!"
    </p>
  </div>
  <div className="testimony-card">
    <img
      src={shanaiImg}
      className="testimonyImg"
      alt="Ali Bravo's image"
    />
    <h3>Shanai Gough</h3>
    <p className="testimony">
      "Their software allows us to track, manage and collaborate on our
      projects from anywhere. It keeps the whole team in sync without
      being intrusive."
    </p>
  </div>
</div> */
}
