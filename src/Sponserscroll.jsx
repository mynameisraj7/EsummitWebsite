import "./Sponserscroll.css";
import logo1 from "./assets/sponimg1.png";
import logo2 from "./assets/sponimg1.png";
import logo3 from "./assets/sponimg1.png";
import logo4 from "./assets/sponimg1.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const sponsorLogos = [logo1, logo2, logo3, logo4];

function Sponserscroll() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // allow repeat on scroll
    mirror: true,  // animate again on scroll up
  });
}, []);


  return (
    <section className="sponserimg">
      <div className="sponsertitle" data-aos="fade-left">
        <h2>Our Past Sponsors</h2>
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
