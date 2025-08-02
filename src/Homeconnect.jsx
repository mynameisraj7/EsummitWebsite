import "./Homeconnect.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Homeconnect() {

    useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });
}, []);


  return (
    <>
    <section id="contact" className="conback">
         <div className="contitle" data-aos="fade-down">
          <h2>Connect with us</h2>
          <div className="conline"></div>
          </div>
          <div className="concontainer">
               <form
  action="https://formsubmit.co/iconnectgjust@gmail.com"
  method="POST"
  className="usleft"
  data-aos="fade-right"
>
  <h2>Get in Touch</h2>

  <div className="frame1">
    <div>Full Name</div>
    <input type="text" name="name" placeholder="Aditya Thakur" required />
  </div>
  <div className="frame1">
    <div>Email</div>
    <input type="email" name="email" placeholder="some@example.com" required />
  </div>
  <div className="frame1">
    <div>Subject</div>
    <input type="text" name="_subject" placeholder="Startup Spotlight" required />
  </div>
  <div className="frame2">
    <div>Message</div>
    <textarea name="message" placeholder="I want to know about..." required></textarea>
  </div>

  {/* Hidden input to disable CAPTCHA */}
  <input type="hidden" name="_captcha" value="false" />

  <button className="contbutton" type="submit">Submit</button>
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