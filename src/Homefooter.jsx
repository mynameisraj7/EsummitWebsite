import "./Homefooter.css";
import iconnectlogo from "./assets/iconnectlog.svg";
import esummitlogo from "./assets/esummitlogo.png";
import whiteline from "./assets/whiteline.png";


function Homefooter() {
  return (
    <>
      <section className="footerblack">
          <div className="footcontainer">
            <div className="foottop">
            <div className="footleft">
            <div className="imgcontent">
              <img src={esummitlogo} alt="footer image" />
              <img src={whiteline} alt="footer image" />
              <img src={iconnectlogo} alt="footer image" />
            </div>
            <div className="lowerimg">
              E-Summit GJUS&T Hisar is Haryana’s largest entrepreneurial fest,<br/> 
              organized by the Team iConnect,PDUIIC to inspire and empower<br/>
               future leaders and prosper nations growth
            </div>
            
            </div>
            <div className="address">
                <h2>Address</h2>
                <p>Ground Floor, PDUIIC,<br/>
                    GJUS&T, Hisar,<br/>
                    Haryana - 125001</p>
            </div>
            <div className="footright">
              <div className="footcontact">
                <h2>Contact</h2>
                <div className="contactcontent">
                <div className="conleft">
                  <h3>For Accomodation queries</h3>
                  <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 7011964796 (Yuvansh)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9729561035 (Tushar)</p>
                  </div>
                  <h3>For Event queries</h3> 
                 <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9813709139 (Vansh)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 7015537609 (Krish)</p>
                  </div>
                </div>
                <div className="conright">
                   <h3>For other queries</h3>
                  {/* <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9467905906 (Naina)</p>
                  </div> */}
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 6281482740 (Rohit)</p>
                  </div>
                <h3>You can also mail us at</h3> 
                 <div className="phonecont">
                     <i class='bx bx-envelope' ></i>
                     <p>iconnectgjust@gmail.com</p>
                  </div>
                </div>
                </div>
                <div className="context">
                  Team iConnect under PDUIIC is conducting the fest and is dedicated to help you with your querys . 
                </div>
              </div>
            </div>
            </div>
            <div className="divider"></div>
            <div className="footbottom">
              <div>Build️ with ❤️ by Team iConnect</div>
              <div>© Team iConnect, PDUIIC, GJUS&T, Hisar. All Rights Reserved</div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Homefooter;
