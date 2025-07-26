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
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
    },
    {
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
    },
    {
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
    },
    {
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
    },
    {
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
    },
    {
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
    },
    {
      question: "How many members can form a team",
      answer: "One to four members can participate depending upon the event."
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
          <div key={index} className="faq-item"  data-aos="fade-up" data-aos-delay={index * 100}>
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
