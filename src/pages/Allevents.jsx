import "./Allevents.css"
// import keyimage from "../assets/comingsoon.jpeg";
import startupspotlight from "../assets/startspot.jpeg";
import startupspace from "../assets/startspace.jpeg";
import caseclash from "../assets/caseclash.jpeg";
import influencer from "../assets/influencer.jpeg";
import aman from "../assets/aman.jpeg";
import yashika from "../assets/yashika.jpeg";
import braingame from "../assets/braingames.jpeg";
import auction from "../assets/auction.jpeg";
import esummitlogo from "../assets/esummitlogo.png";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link,useLocation} from 'react-router-dom';

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

  if (targetId === "home") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.location.href = `/#${targetId}`;
    }
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
        title: "Startup Auction",
        date: "26th August 2025",
        image:auction,
        description:" Startup Auction is where sharp strategy meets entrepreneurial spirit! Bid for startups, acquire expert mentors, and build a winning portfolio — all while competing head-to-head in a high-energy environment! ",
        ruleBookLink: "https://drive.google.com/drive/folders/12Sy2u64XXu2dFquV5dbsbMTk4gk_4mfR?usp=drive_link",
        registerLink: "https://lu.ma/ir5o6a7d",
      },
      {
        title: "Case Clash",
            date: "25th August 2025",
            image:caseclash,
            description:"Case Clash is where analytical minds meet strategic thinking! Tackle case studies from top companies, craft innovative solutions, and present your game-changing strategies to industry experts!",
            ruleBookLink: "https://drive.google.com/drive/folders/1W6m4dHyoPRm8GXGgR3mOXKUvvH7cmDXX",
            registerLink: "https://lu.ma/2vfojgem",
      },
    ];

    const events2 = [
      {
        
        title: "Business Quiz",
            date: "25th August 2025",
            image:braingame,
            description:"Put your business smarts to the test at the second edition of the Business Quiz at E-Summit 2025. Challenge yourself with two dynamic offline rounds covering startups, marketing, finance, and more.",
            ruleBookLink: "https://drive.google.com/drive/folders/1UAcrhGRwqaoyJCGYze8hZJj4sDgUqKN0",
            registerLink: "https://lu.ma/kpdbgsh7",
      },
      {
        title: "Influencer's Lab",
            date: "26th August 2025",
            image:influencer,
            description:"🎥 Light. Camera. Influence.Got 60 seconds to own your niche? ✨ Show off your creativity, storytelling, and influencer skills in the ultimate reel-making challenge! ",
            ruleBookLink: "https://drive.google.com/drive/folders/19aiGtNHhJIM5bWdGVzjOFUzkr9NLQt_d?usp=drive_link",
            registerLink: "https://lu.ma/3sd5fn68",
      },
      {
        title: "Session",
            date: "26th August 2025",
            image:aman,
            description:"We are thrilled to host Mr. Aman Rajput, Community Manager at Unstop, for an insightful session on “Acceleration/Incubation – Opportunities for Students & Faculties Early-Stage Entrepreneurs”.",
            ruleBookLink: "",
            registerLink: "https://lu.ma/zjhkuopy",
      },
      {
        title: "Session",
            date: "26th August 2025",
            image:yashika,
            description:"We are thrilled to host Ms. Yashika, Founder of YR IT Solutions, for an interactive session on “Innovation and Start-up Ecosystem Enablers.”",
            ruleBookLink: "",
            registerLink: "https://lu.ma/sicr5z51",
      },
      // {
      //   title: "Valid Event",
      //   date: "25th August 2025",
      //   image:keyimage,
      //   ruleBookLink: "https://example.com/rulebook4.pdf",
      //   registerLink: "https://lu.ma/event/evt-Ghi789",
      //   comingSoon: true
      // },
    ];


  return (
    <>

       {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Coming Soon</div>}



        <section className="kkeyback">

        <div className="header">
                  <div className="glasscontainer">
                    <div className='logo'>
                      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          <img src={esummitlogo} height="40px" width="221px" alt="E-Summit Logo" style={{ cursor: "pointer" }} />
                      </Link>
                      <div id="mobile" onClick={() => setNavOpen(!navOpen)}>
                      <i className='bx bx-menu'></i>
                    </div>
                    </div>
        
                    <div className="navlinks desktop-nav">
                      <ul id="navbar">
                        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
                        <li><a href="#about" onClick={(e) => handleScrollLink(e, "about")}>About</a></li>
                        <li><a href="#events" onClick={(e) => handleScrollLink(e, "events")}>Events</a></li>
                        <li><a href="#gallery" onClick={(e) => handleScrollLink(e, "gallery")}>Gallery</a></li>
                        <li><a href="#contact" onClick={(e) => handleScrollLink(e, "contact")}>Contact us</a></li>
                        <li><a href="#faq" onClick={(e) => handleScrollLink(e, "faq")}>FAQs</a></li>
                      </ul>
                    </div>
        
                    
                      <div className={`mobile-nav-wrapper ${navOpen ? "open" : ""}`}>
                    <div className="mobile-nav">
                      <ul id="navbar">
                        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
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
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <a href={event.ruleBookLink} className="ooutwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="iinwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="ffourcardcontainer" data-aos="fade-right">
        {events2.map((event, index) => (
          <div
            key={index}
            className={`ssmallcard ${flippedIndexesRow2.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlipRow2(index)}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                 <p>{event.description}</p>
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

      </section>
    </>
  )
}

export default Allevents