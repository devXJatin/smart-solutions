import React, { useState } from "react";
import location from "../Assets/Contact/location.png";
import email from "../Assets/Contact/email.png";
import phone from "../Assets/Contact/phone.png";
import facebook from "../Assets/Contact/facebook.png";
import linkedin from "../Assets/Contact/linkedin.png";
import twitter from "../Assets/Contact/twitter.png";
import "./Contact.css";
import {db} from '../Firebase/firebaseconfig';
import {collection, addDoc} from 'firebase/firestore'

function Contact() {

  const contactCollectionRef = collection(db, 'contacts');
  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //Save the contacts
  const [contactRecords, setContactRecords] = useState([]);

  //Handle the inputs
  const handleContactInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContacts({ ...contacts, [name]: value });
  };

  //Handle Submit button
  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const newRecord = { ...contacts, id: new Date().getTime().toString() };
    setContactRecords(...contactRecords, { newRecord });
    await addDoc(contactCollectionRef,newRecord);
    setContacts({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  console.log(contactRecords);
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
        <form action="" className="contactForm" onSubmit={handleContactSubmit}>
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <div className="inputBox w50">
                <span className="inputLabel">Name</span>
                <input
                  type="text"
                  className="contactInput"
                  required
                  autoComplete="off"
                  name="name"
                  id="name"
                  value={contacts.name}
                  onChange={handleContactInput}
                />
              </div>
              <div className="inputBox w50">
                <span className="inputLabel">Email</span>
                <input
                  type="email"
                  required
                  className="contactInput"
                  autoComplete="off"
                  name="email"
                  id="email"
                  value={contacts.email}
                  onChange={handleContactInput}
                />
              </div>
              <div className="inputBox w50">
                <span className="inputLabel">Contact</span>
                <input
                  type="text"
                  required
                  className="contactInput"
                  autoComplete="off"
                  name="phone"
                  id="phone"
                  value={contacts.phone}
                  onChange={handleContactInput}
                />
              </div>
              <div className="inputBox w100">
                <span className="inputLabel">Write Your Message here....</span>
                <textarea
                  name=""
                  required
                  className="contactInput"
                  autoComplete="off"
                  name="message"
                  id="message"
                  value={contacts.message}
                  onChange={handleContactInput}
                ></textarea>
              </div>
              <div className="inputBox w100">
                <button type="submit" className="submitButton">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
