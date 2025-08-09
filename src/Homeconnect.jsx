import "./Homeconnect.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";


function Homeconnect() {

     const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const [status, setStatus] = useState(""); // For showing feedback

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch("https://email.kshyp.tech/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        // Check if the HTTP request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        console.log('API Response:', data); // For debugging
        
        // Check the status from the parsed response
        if (data.status === true) {
    setStatus(""); // remove inline text if you don’t need it
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
} else {
    setStatus("Failed to send message. Please try again.");
}

        
    } catch (error) {
        console.error('Error:', error);
        setStatus("Something went wrong. Try again later.");
    }
};





    useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });
}, []);


  return (
    <>

    {showToast && <div className="esummit-toast">✅ Submitted your request</div>}


    <section id="contact" className="conback">
         <div className="contitle" data-aos="fade-down">
          <h2>Connect with us</h2>
          <div className="conline"></div>
          </div>
          <div className="concontainer">
               <form onSubmit={handleSubmit} className="usleft" data-aos="fade-right">
  <h2>Get in Touch</h2>

  <div className="frame1">
    <div>Full Name</div>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Aditya Thakur"
      required
    />
  </div>

  <div className="frame1">
    <div>Email</div>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="some@example.com"
      required
    />
  </div>

  <div className="frame1">
    <div>Subject</div>
    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Startup Spotlight"
      required
    />
  </div>

  <div className="frame2">
    <div>Message</div>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="I want to know about..."
      required
    ></textarea>
  </div>

  <button className="contbutton" type="submit">Submit</button>

  {status && <p className="form-status">{status}</p>}
</form>



            <div className="usright" data-aos="fade-left">
                <div className="ussocials">
                    <h2>Follow us on</h2>
                     <div className="socials">
          <a href="https://www.instagram.com/iconnectgjust/"><i className='bx bxl-instagram'></i></a>
          <a href="https://x.com/iconnectgjust?t=GZGkd_h65aoTtg3M5MnmCg&s=08"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.whatsapp.com/channel/0029VaELUPEGU3BNfgEAmU0h"><i className='bx bxl-whatsapp' ></i></a>
          <a href="https://www.linkedin.com/company/iconnect-gjust/"><i className='bx bxl-linkedin' ></i></a>
          <a href="https://www.youtube.com/@iConnectGJUST"><i className='bx bxl-youtube' ></i></a>
        </div>
                </div>
                <div className="reachus" data-aos="fade-up">
                    <h2>Reach us at</h2>
                    <div className="reachmap">
                        <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwhosDyC78wZzD3UrnGzhkTgpITeQjjrw&q=Guru+Jambheshwar+University+of+Science+and+Technology,Hisar">
                        </iframe>
                    </div>
                </div>
            </div>
          </div>
    </section>
    </>
  )
}

export default Homeconnect