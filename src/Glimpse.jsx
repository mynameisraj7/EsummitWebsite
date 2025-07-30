import "./Glimpse.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import logo1 from "./assets/glimpse1.JPG";
import logo2 from "./assets/glimpse2.JPG";
import logo3 from "./assets/glimpse3.JPG";
import logo4 from "./assets/glimpse4.JPG";
import logo5 from "./assets/glimpse5.JPG";
import logo6 from "./assets/glimpse6.JPG";
import logo7 from "./assets/glimpse7.JPG";
import lowball from "./assets/purpleball.png"
import highball from "./assets/purpleballhigh.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const sponsorLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

function Glimpse() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });
}, []);


  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // hide default slick arrows
    dots: true,
    autoplay: false,
    speed: 500,
  };

  let sliderRef = null;

  return (
    <section id="gallery" className="glimpseback">
      <div className="glimtitle" data-aos="fade-down">
        <h2>Glimpses of E-Summit ‘24</h2>
        <div className="glimline"></div>
      </div>
      <div className="lowball" data-aos="fade-right">
        <img src={lowball} />
      </div>
      <div className="highball" data-aos="fade-left">
        <img src={highball} />
      </div>

      <div className="carousel-wwrapper" data-aos="zoom-in">
        <div className="carousel-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {sponsorLogos.map((logo, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="carousel-img"
                />
              </div>
            ))}
          </Slider>

          {/* Custom arrows container */}
          <div className="custom-arrows-wrapper">
            <div
              className="custom-arrow prev"
              onClick={() => sliderRef && sliderRef.slickPrev()}
            >
              <i class='bx bx-chevron-left'></i>
            </div>
            <div
              className="custom-arrow next"
              onClick={() => sliderRef && sliderRef.slickNext()}
            >
              <i class='bx bx-chevron-right'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Glimpse;
