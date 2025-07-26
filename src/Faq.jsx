import "./Faq.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Faq() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });
}, []);


  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const questions = [
    {
      question: "Who can participate in E-Summit 2025?",
      answer: "All students from universities and colleges across India are eligible for inter-university events. Select sessions and competitions are also open exclusively to GJUS&T students. Please check event-specific eligibility before registering."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, there are no registration fees for any E-Summit 2025 events. All sessions, competitions, and activities are completely free to attend and participate in."
    },
    {
      question: "What are the participation formats for different events?",
      answer: "Here is a summary of participation formats:Startup Spotlight: Individual or Team (up to 4 members).Startup Auction: Team (4 members).Brand-storm 60: Team (2 to 4 members).Business Quiz: Individual only.Case Clash: Team (2 to 4 members).Poster Presentation (Startup Space): Individual or Team (up to 4).Sessions (Accelerator & Lean Startup Bootcamp): Individual attendees.Make sure all team members are from the same college where applicable."
    },
    {
      question: "Can I register for more than one event?",
      answer: "Yes. You can register for multiple events, but make sure that the event timings do not overlap. The complete event schedule is listed on the website to help you plan accordingly."
    },
    {
      question: "Are the events online or offline?",
      answer: "All events in E-Summit 2025 are offline and will be held at Guru Jambheshwar University of Science & Technology (GJUS&T), Hisar. Venue details are mentioned on the Events page"
    },
    {
      question: "What should I prepare for different events?",
      answer: "Preparation varies by event:Startup Spotlight: Prepare a startup pitch and presentation.Startup Auction: Understand basic startup metrics and strategy.Brand-storm 60: Be ready to design logos, taglines, and concepts within a time limit.Business Quiz: Brush up on business, finance, startups, and current affairs.Case Clash: Practice quick analysis of real business cases and strategic thinking.Sessions: Come prepared to take notes and engage.Guidelines will be sent post-registration."
    },
    {
      question: "What do participants and winners receive?",
      answer: "Participation certificates for all valid entries.Prizes, goodies, and certificates for winners.Access to mentorship and networking opportunities.Recognition on E-Summit social media handles and during the closing ceremony."
    },
  ];

  return (
    <section id="faq" className="footerimg">
      <div className="faqtitle" data-aos="fade-down">
        <h2>{isMobile ? "FAQs" : "Frequently Asked Question"}</h2>
        <div className="faqline"></div>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item"  data-aos="fade-down" data-aos-delay={index * 100}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question} <i className='bx bx-chevron-down'></i>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
