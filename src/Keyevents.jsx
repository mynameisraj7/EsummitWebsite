import "./Keyevents.css";
import startupspotlight from "./assets/startspot.jpeg";
import startupspace from "./assets/startspace.jpeg";
import keyimage from "./assets/comingsoon.jpeg";
import braingame from "./assets/braingames.jpeg";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


function Keyevents() {


  const [showEsummitMessage, setShowEsummitMessage] = useState(false);

    const handleEsummitClick = (e) => {
    e.preventDefault();
    setShowEsummitMessage(true);
    setTimeout(() => {
      setShowEsummitMessage(false);
    }, 2500);
  };



  
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
    date: "26th August 2025",
    image:startupspotlight,
    description:"A startup pitching competition where students present innovative ideas, pitch like entrepreneurs, and compete for recognition, rewards, and expert feedback at E-Summit ’25.",
    ruleBookLink: "https://drive.google.com/drive/folders/17-VHfysMSGAW12h3ioUXRk01vzeHPcSb?usp=drive_link",
    registerLink: "https://unstop.com/p/startup-spotlight-e-summit25-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1523983",
  },
  {
    title: "Startup Space",
    date: "25th August 2025",
    image:startupspace,
    description:"Startup Space at E-Summit ’25 invites students to visually showcase their startup ideas, research, or prototypes—transforming bold concepts into stories that inform, impress, and inspire.",
    ruleBookLink: "https://drive.google.com/drive/folders/1s9zKPV_1rujPAw192zijRREI-ct6qZqg",
    registerLink: "https://unstop.com/p/startup-space-e-summit25-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1530197",
  },
  {
    title: "Business Quiz",
    date: "25th August 2025",
    image:braingame,
    description:"Put your business smarts to the test at the second edition of the Business Quiz at E-Summit 2025. Challenge yourself with two dynamic offline rounds covering startups, marketing, finance, and more.",
    ruleBookLink: "https://drive.google.com/drive/folders/1UAcrhGRwqaoyJCGYze8hZJj4sDgUqKN0",
    registerLink: "https://lu.ma/kpdbgsh7",
  },
  {
    title: "Brand Strom",
    date: "31st August 2025",
    image:keyimage,
    // ruleBookLink: "https://example.com/rulebook4.pdf",
    // registerLink: "https://lu.ma/event/evt-Ghi789",
    comingSoon:true,
  },
];


  return (
    <>

     {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Coming Soon</div>}

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
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="smallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="card-back">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                {/* <a href={event.ruleBookLink} className="outwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="inwhite" target="_blank" rel="noopener noreferrer">Register Now</a> */}
                 {event.comingSoon ? (
                    <>
                      <a onClick={handleEsummitClick} className="outwhite" role="button">Rule book</a>
                      <a onClick={handleEsummitClick} className="inwhite" role="button">Register Now</a>
                    </>
                  ) : (
                    <>
                      <a href={event.ruleBookLink} className="outwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                      <a href={event.registerLink} className="inwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
                    </>
                  )}

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="morecardscont" data-aos="fade-up">
        <Link to="/more-events" className="morecards">View all Events</Link>

      </div>
    </section>
    </>
  );
}

export default Keyevents;
