import "./Homemain.css";
import backvideo from "./assets/backvideo2.mp4";
import iconnectlogo from "./assets/iconnectlog.svg";
import esummitlogo from "./assets/esummitlogo.png";
import mainlogomobile from "./assets/mainlogomobile.gif";
import whitelogo from "./assets/whitelogo.gif";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function Homemain() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const [logoTimestamp] = useState(Date.now());


  const openGoogleCalendar = () => {
  const start = "20250825";
  const end = "20250828";
  const title = encodeURIComponent("E-Summit 2025");
  const details = encodeURIComponent("Haryana’s biggest Entrepreneurship Summit, hosted by iConnect at GJUS&T Hisar.");
  const location = encodeURIComponent("GJUS&T, Hisar, Haryana");
  
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  window.open(url, "_blank");
};

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


  useEffect(() => {
    setNavOpen(false); // close on route change
  }, [location]);

  return (
    <>
      <section className="heroback">
        <div className="header">
          <div className="glasscontainer">
            <div className='logo'>
              <a href="#home" onClick={(e) => handleScrollLink(e, "home")}>
                      <img src={esummitlogo} height="40px" width="221px" alt="E-Summit Logo" />
              </a>
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
                <li><a href="#faq" onClick={(e) => handleScrollLink(e, "faq")}>FAQs</a></li>
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
                <li><a href="#faq" onClick={(e) => {handleScrollLink(e, "faq");setNavOpen(false);}}>FAQs</a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>

        <video autoPlay muted loop className="bg-video">
              <source src={backvideo} type="video/mp4" />
        </video>


        <img className="centericon" src={iconnectlogo} alt="footer image" />
        <h4>Presents</h4>

        <div className="mainlogocrop">
          <img className="mainlogo" src={`${whitelogo}?t=${logoTimestamp}`} alt="main gif" />
        </div>

        <div className="mainlogomobilecrop">
          <img className="mainlogomobile" src={`${mainlogomobile}?t=${logoTimestamp}`} alt="mobile gif" />
        </div>

        <p>
          Haryana’s Biggest Entrepreneurship Summit is here — Turn Your Vision into Exceptional <span>Performance!</span>
        </p>
        <h2>25th - 27th August 2025</h2>
        <button onClick={openGoogleCalendar}>Save the Date</button>

        <div className="ssocials">
          <a href="https://www.instagram.com/iconnectgjust/"><i className='bx bxl-instagram'></i></a>
          <a href="https://x.com/iconnectgjust"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.whatsapp.com/channel/0029VaELUPEGU3BNfgEAmU0h"><i className='bx bxl-whatsapp'></i></a>
          <a href="https://www.linkedin.com/company/iconnect-gjust/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://www.youtube.com/@iConnectGJUST"><i className='bx bxl-youtube'></i></a>
        </div>

        <div className="scroll">Scroll Down<i className='bx bx-right-arrow-alt'></i></div>
      </section>
    </>
  );
}

export default Homemain;
