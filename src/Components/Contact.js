import React from "react";
import location from "../Assests/Contact/location.png";
import email from "../Assests/Contact/email.png";
import phone from "../Assests/Contact/phone.png";
import facebook from "../Assests/Contact/facebook.png";
import linkedin from "../Assests/Contact/linkedin.png";
import twitter from "../Assests/Contact/twitter.png";
import "./Contact.css";
function Contact() {
  return (
    <section>
      <div className="contain">
        <div className="containerInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src={location} alt="location" />
                </span>
                <span>mathura,Uttar Pradesh</span>
              </li>
              <li>
                <span>
                  <img src={email} alt="" />
                </span>
                <span>lorem@gmail.com</span>
              </li>
              <li>
                <span>
                  <img src={phone} alt="" />
                </span>
                <span>1234567898</span>
              </li>
            </ul>
          </div>
          <ul class="socialLinks">
            <li>
              <a href=" ">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href=" ">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li>
              <a href=" ">
                <img src={twitter} />
              </a>
            </li>
          </ul>
        </div>
        < form action="" className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <div className="inputBox w50">
                <span className="inputLabel">Name</span>
                <input type="text" className="contactInput" required/>
                
              </div>
              <div className="inputBox w50">
                <span className="inputLabel">Email</span>
              <input type="email" required className="contactInput"/>
              </div>
              <div className="inputBox w50">
                <span className="inputLabel">Contact</span>
              <input type="text" required className="contactInput"/>
              </div>
              <div className="inputBox w100">
                <span className="inputLabel">Write Your Message here....</span>
              <textarea name="" required className="contactInput"></textarea>
              </div>
              <div className="inputBox w100">
              <button type="submit" className="submitButton">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
