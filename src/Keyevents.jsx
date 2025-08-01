import "./Keyevents.css";
// import keyimage from "./assets/keyeventimage.png";
import keyimage from "./assets/comingsoon.jpeg";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


function Keyevents() {

  useEffect(() => {
  AOS.init({
    duration: 800,
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


  const events = [
  {
    title: "Startup Spotlight",
    date: "28th August 2025",
    ruleBookLink: "https://drive.google.com/drive/folders/17-VHfysMSGAW12h3ioUXRk01vzeHPcSb?usp=drive_link",
    registerLink: "https://unstop.com/p/startup-spotlight-e-summit25-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1523983",
  },
  {
    title: "Startup Space",
    date: "29th August 2025",
    ruleBookLink: "https://example.com/rulebook2.pdf",
    registerLink: "https://lu.ma/event/evt-Abc123",
  },
  {
    title: "Startup Auction",
    date: "30th August 2025",
    ruleBookLink: "https://example.com/rulebook3.pdf",
    registerLink: "https://lu.ma/event/evt-Def456",
  },
  {
    title: "Brand Strom",
    date: "31st August 2025",
    ruleBookLink: "https://example.com/rulebook4.pdf",
    registerLink: "https://lu.ma/event/evt-Ghi789",
  },
];


  return (
    <section id="events" className="keyback">
      <div className="keytitle" data-aos="fade-down">
        <h2>Key Events</h2>
        <div className="keyline"></div>
      </div>

      <div className="fourcardcontainer" data-aos="fade-right">
        {events.map((event, index) => (
          <div
            key={index}
            className={`smallcard ${flippedIndexes.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={keyimage} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="smallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="card-back">
                <h2>{event.title}</h2>
                <p>
                  Inviting students to bring forth impactful solutions to real-world problems, pitch them like entrepreneurs, and battle it out for recognition, rewards, and a chance to shine in front of seasoned experts.
                </p>
                <a href={event.ruleBookLink} className="outwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="inwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="morecardscont" data-aos="fade-up">
        <Link to="/more-events" className="morecards">View More Events</Link>

      </div>
    </section>
  );
}

export default Keyevents;
