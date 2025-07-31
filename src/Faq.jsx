import "./Faq.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Faq() {

  useEffect(() => {
  AOS.init({
    duration: 800,
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
      answer: "E-Summit 2025 is open to all university and college students across India. While some events are exclusive to GJUS&T students, the majority are inter-university and welcome participants from any institution or academic background. Each event will clearly specify its eligibility criteria."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, there is no registration fee for participating in any event under E-Summit 2025. All competitions, workshops, and sessions are free. Just bring your energy, ideas, and the will to learn."
    },
    {
      question: "What are the participation formats for different events?",
      answer: "Participation format varies from event to event. Some events, like the Business Quiz, are designed for individual participants, while others such as Startup Auction, Brand-storm 60, and Case Clash require teams ranging from two to four members. Startup Spotlight allows both individual and team participation. Speaker sessions and workshops are also open to solo attendees. The format and team size will be mentioned clearly on the event registration page."
    },
    {
      question: "Can I register for more than one event?",
      answer: "Yes, participants are allowed and encouraged to register for multiple events, as long as the schedule allows it. Be sure to check the event dates and timings to avoid clashes between sessions."
    },
    {
      question: "Are all the events offline?",
      answer: "While most of the flagship events are scheduled to be conducted offline at Guru Jambheshwar University of Science & Technology (GJUS&T), Hisar, some events may be planned as online sessions. Details about the event mode—whether online or offline—will be specified in the event descriptions and updated on the website accordingly."
    },
    {
      question: "How will I recieve event updates and important information?",
      answer: "After registering, participants will receive updates through email and WhatsApp. It is important to provide accurate contact details during registration. All essential announcements such as event timings, venue updates, guidelines, and results will also be shared via official social media handles and the website."
    },
    {
      question: "What do participants and winners receive?",
      answer: "All participants will receive official digital certificates. Winners will receive prizes, goodies, and on-stage recognition during the closing ceremony. Many events also offer mentorship, networking opportunities, and social media features for standout performers."
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
