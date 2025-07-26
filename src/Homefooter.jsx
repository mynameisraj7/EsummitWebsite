import "./Homefooter.css";
import iconnectlogo from "./assets/esumiconlogo.png";
import esummitlogo from "./assets/esummitlogo.png";
import whiteline from "./assets/whiteline.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Homefooter() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });
}, []);


  return (
    <>
      <section className="footerblack">
          <div className="footcontainer">
            <div className="foottop">
            <div className="footleft" data-aos="fade-right">
            <div className="imgcontent">
              <img src={esummitlogo} alt="footer image" />
              <img src={whiteline} alt="footer image" />
              <img src={iconnectlogo} alt="footer image" />
            </div>
            <div className="lowerimg">
              E-Summit GJUS&T Hisar is Haryana’s largest entrepreneurial fest,<br/> 
              organized by the Team iConnect under PDUIIC to inspire and empower<br/>
               future leaders and prosper nations growth
            </div>
            
            </div>
            <div className="address" data-aos="fade-up">
                <h2>Address</h2>
                <p>iConnect Office, PDUIIC building,<br/>
                    GJUS&T, Hisar,<br/>
                    Haryana - 125001</p>
            </div>
            <div className="footright" data-aos="fade-left">
              <div className="footcontact">
                <h2>Contact</h2>
                <div className="contactcontent">
                <div className="conleft">
                  <h3>For accommodation query's</h3>
                  <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9012345678 (Yuvansh)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9012345678 (Yuvansh)</p>
                  </div>
                  <h3>For Event query's</h3> 
                 <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9012345678 (Vansh)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9012345678 (Vansh)</p>
                  </div>
                </div>
                <div className="conright">
                   <h3>For other query's</h3>
                  <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9012345678 (Naina)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9012345678 (Naina)</p>
                  </div>
                <h3>You can also mail us at</h3> 
                 <div className="phonecont">
                     <i class='bx bx-envelope' ></i>
                     <p>iconnectgjust@gmail.com</p>
                  </div>
                </div>
                </div>
                <div className="context">
                  Team iConnect under PDUIIC is conducting the fest and is dedicated to help you with your query’s . 
                </div>
              </div>
            </div>
            </div>
            <div className="divider" data-aos="zoom-in"></div>
            <div className="footbottom" data-aos="fade-up">
              <div>Build️ with ❤️ by Team iConnect</div>
              <div>© Team iConnect, PDUIIC, GJUS&T, Hisar. All Rights Reserved</div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Homefooter;
