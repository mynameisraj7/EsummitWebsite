import "./Sponserscroll.css";
import logo1 from "./assets/sponser1.jpg";
import logo2 from "./assets/sponser2.png";
import logo3 from "./assets/sponser3.jpg";
import logo4 from "./assets/sponser4.png";
import logo5 from "./assets/sponser5.jpg";
import logo6 from "./assets/sponser6.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const sponsorLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

function Sponserscroll() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,   // allow repeat on scroll
    mirror: true,  // animate again on scroll up
  });
}, []);


  return (
    <section className="sponserimg">
      <div className="sponsertitle" data-aos="fade-left">
        <h2>Our Sponsors</h2>
        <div className="sponserline" data-aos="fade-right" ></div>

        <div className="carousel-wrapper" data-aos="zoom-in" >
          <div className="carousel-track">
            {[...sponsorLogos, ...sponsorLogos, ...sponsorLogos].map((logo, index) => (
              <div className="carousel-item" key={index}  data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={logo} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponserscroll;
