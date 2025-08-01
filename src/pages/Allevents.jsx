import "./Allevents.css"
import keyimage from "../assets/comingsoon.jpeg";
import esummitlogo from "../assets/esummitlogo.png";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Allevents() {

  const [showEsummitMessage, setShowEsummitMessage] = useState(false);

    const handleEsummitClick = (e) => {
    e.preventDefault();
    setShowEsummitMessage(true);
    setTimeout(() => {
      setShowEsummitMessage(false);
    }, 2500);
  };






    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
    setNavOpen(false); // close on route change
  }, [location]);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,   // animations repeat when scrolled back
        mirror: true,  // animate on scroll up too
      });
    }, []);

    const handleScrollLink = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = -0;
      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.location.href = `/#${targetId}`;
    }
    setNavOpen(false);
  };
    
    
      const [flippedIndexesRow1, setFlippedIndexesRow1] = useState([]);
const [flippedIndexesRow2, setFlippedIndexesRow2] = useState([]);

const toggleFlipRow1 = (index) => {
  setFlippedIndexesRow1((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};

const toggleFlipRow2 = (index) => {
  setFlippedIndexesRow2((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};

    
    
      const events = [
      {
        title: "Startup Spotlight",
        date: "28th August 2025",
        // ruleBookLink: "https://example.com/rulebook1.pdf",
        // registerLink: "https://lu.ma/event/evt-5CxCjcLVGb938PV",
        comingSoon:true,
      },
      {
        title: "Ideathon",
        date: "29th August 2025",
        // ruleBookLink: "https://example.com/rulebook2.pdf",
        // registerLink: "https://lu.ma/event/evt-Abc123",
        comingSoon:true,
      },
      {
        title: "Pitch Parade",
        date: "30th August 2025",
        // ruleBookLink: "https://example.com/rulebook3.pdf",
        // registerLink: "https://lu.ma/event/evt-Def456",
        comingSoon:true,
      },
      {
        title: "Tech Expo",
        date: "31st August 2025",
        // ruleBookLink: "https://example.com/rulebook4.pdf",
        // registerLink: "https://lu.ma/event/evt-Ghi789",
        comingSoon:true,
      },
    ];

    const events2 = [
      {
        title: "Startup Spotl",
        date: "28th August 2025",
        ruleBookLink: "https://example.com/rulebook1.pdf",
        registerLink: "https://lu.ma/event/evt-5CxCjcLVGb938PV",
      },
      {
        title: "Ideat",
        date: "29th August 2025",
        ruleBookLink: "https://example.com/rulebook2.pdf",
        registerLink: "https://lu.ma/event/evt-Abc123",
      },
      {
        title: "P Parade",
        date: "30th August 2025",
        ruleBookLink: "https://example.com/rulebook3.pdf",
        registerLink: "https://lu.ma/event/evt-Def456",
      },
      {
        title: "Techpo",
        date: "31st August 2025",
        ruleBookLink: "https://example.com/rulebook4.pdf",
        registerLink: "https://lu.ma/event/evt-Ghi789",
      },
    ];


  return (
    <>

       {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Coming Soon</div>}



        <section className="kkeyback">

        <div className="header">
                  <div className="glasscontainer">
                    <div className='logo'>
                      <img src={esummitlogo} height="45px" width="230px" />
                      <div id="mobile" onClick={() => setNavOpen(!navOpen)}>
                      <i className='bx bx-menu'></i>
                    </div>
                    </div>
        
                    <div className="navlinks desktop-nav">
                      <ul id="navbar">
                        <li><a href="#home" onClick={(e) => handleScrollLink(e, "home")}>Home</a></li>
                        <li><a href="#about" onClick={(e) => handleScrollLink(e, "about")}>About</a></li>
                        <li><a href="#events" onClick={(e) => handleScrollLink(e, "events")}>Events</a></li>
                        <li><a href="#gallery" onClick={(e) => handleScrollLink(e, "gallery")}>Gallery</a></li>
                        <li><a href="#contact" onClick={(e) => handleScrollLink(e, "contact")}>Contact us</a></li>
                        <li><a href="#faq" onClick={(e) => handleScrollLink(e, "faq")}>FAQ's</a></li>
                      </ul>
                    </div>
        
                    
                      <div className={`mobile-nav-wrapper ${navOpen ? "open" : ""}`}>
                    <div className="mobile-nav">
                      <ul id="navbar">
                        <li><a href="#home" onClick={(e) => {handleScrollLink(e, "home");setNavOpen(false);}}>Home</a></li>
                        <li><a href="#about" onClick={(e) => {handleScrollLink(e, "about");setNavOpen(false);}}>About</a></li>
                        <li><a href="#events" onClick={(e) => {handleScrollLink(e, "events");setNavOpen(false);}}>Events</a></li>
                        <li><a href="#gallery" onClick={(e) => {handleScrollLink(e, "gallery");setNavOpen(false);}}>Gallery</a></li>
                        <li><a href="#contact" onClick={(e) => {handleScrollLink(e, "contact");setNavOpen(false);}}>Contact us</a></li>
                        <li><a href="#faq" onClick={(e) => {handleScrollLink(e, "faq");setNavOpen(false);}}>FAQ's</a></li>
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>



      <div className="kkeytitle" data-aos="fade-down">
        <h2>All Events</h2>
        <div className="kkeyline"></div>
      </div>

         <div className="ffourcardcontainer" data-aos="fade-right">
        {events.map((event, index) => (
          <div
            key={index}
            className={`ssmallcard ${flippedIndexesRow1.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlipRow1(index)}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img src={keyimage} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                <p>
                  Inviting students to bring forth impactful solutions to real-world problems, pitch them like entrepreneurs, and battle it out for recognition, rewards, and a chance to shine in front of seasoned experts.
                </p>
                {/* <a href={event.ruleBookLink} className="ooutwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="iinwhite" target="_blank" rel="noopener noreferrer">Register Now</a> */}

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

        {/* <div className="ffourcardcontainer" data-aos="fade-right">
        {events2.map((event, index) => (
          <div
            key={index}
            className={`ssmallcard ${flippedIndexesRow2.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlipRow2(index)}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img src={keyimage} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                <p>
                  Inviting students to bring forth impactful solutions to real-world problems, pitch them like entrepreneurs, and battle it out for recognition, rewards, and a chance to shine in front of seasoned experts.
                </p>
                <a href={event.ruleBookLink} className="ooutwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="iinwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
              </div>
            </div>
          </div>
        ))}
        </div> */}

      </section>
    </>
  )
}

export default Allevents