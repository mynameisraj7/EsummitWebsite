import "./Keyevents.css";
import keyimage from "./assets/keyeventimage.png";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Keyevents() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // animations repeat when scrolled back
    mirror: true,  // animate on scroll up too
  });
}, []);


  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const toggleFlip = (index) => {
    setFlippedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="events" className="keyback">
      <div className="keytitle" data-aos="fade-down">
        <h2>Key Events</h2>
        <div className="keyline"></div>
      </div>

      <div className="fourcardcontainer" data-aos="fade-right">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className={`smallcard ${flippedIndexes.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={keyimage} loading="lazy" />
                <h2>Startup Spotlight</h2>
                <div className="smallcardtext">
                  <p>28th August 2025</p>
                  <a href="">Know More</a>
                </div>
              </div>
              <div className="card-back">
                <h2>Startup Spotlight</h2>
                <p>
                  Inviting students to bring forth impactful solutions to real-world problems, pitch them like entrepreneurs, and battle it out for recognition, rewards, and a chance to shine in front of seasoned experts.
                </p>
                <button className="outwhite">Rule Book</button>
                <button className="inwhite">Regiser Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="morecardscont" data-aos="fade-up">
        <a href="" className="morecards">View More Events</a>
      </div>
    </section>
  );
}

export default Keyevents;
