import "./Homeabout.css";
import lowball from "./assets/purpleball.png";
import highball from "./assets/purpleballhigh.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Homeabout() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false ,mirror: true});
  }, []);

  return (
    <>
      <section id="about" className="abback">
        <div className="abtitle" data-aos="fade-down">
          <h2>About E-Summit</h2>
          <div className="abline"></div>
        </div>

        <div className="ablowball">
          <img src={lowball} alt="Low Purple Ball" />
        </div>
        <div className="abhighball">
          <img src={highball} alt="High Purple Ball" />
        </div>

        <div className="absection">
          <div className="abcont">
            <div className="ableft" data-aos="fade-right">
              <div className="ableftup">
                <h3>What is E-Summit ?</h3>
                <p>
                  E-Summit is GJUS&T Hisar's flagship entrepreneurship event,
                  bringing together innovators, entrepreneurs, and leaders to
                  foster the spirit of entrepreneurship and innovation.
                </p>
              </div>
              <div className="ableftbel">
                <h3>Our Mission</h3>
                <p>
                  To create a platform that nurtures entrepreneurial mindsets,
                  facilitates networking, and provides valuable insights into the
                  startup ecosystem.
                </p>
              </div>
            </div>

            <div className="abright" data-aos="fade-left">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/a9VaCmRaQNE"
                  title="E-Summit Promo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="ablower" data-aos="fade-left">
            <div className="abox">
              <h2>200K+</h2>
              <p>Social Media Impressions</p>
            </div>
            <div className="abox">
              <h2>5K+</h2>
              <p>Footfall last year</p>
            </div>
            <div className="abox">
              <h2>12+</h2>
              <p>Events</p>
            </div>
            <div className="abox">
              <h2>200K+</h2>
              <p>Social Media Impressions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeabout;
