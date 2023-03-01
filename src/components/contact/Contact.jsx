import React from "react";
import "./contact.css";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoMailUnreadOutline className="contact_icon" />
            <h3>Email</h3>
            <p>vna1697@gmail.com</p>
          </article>

          <article className="contact_option">
            <FaTelegramPlane className="contact_icon" />
            <h3>Telegram</h3>
            <p>t.me/zeph1697</p>
          </article>

          <article className="contact_option">
            <BsTelephone className="contact_icon" />
            <h3>Mobile Phone</h3>
            <p>+84 963 12 07 56</p>
          </article>
        </div>

        <div className="contact_form">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            required
          />
          <input
            type="number"
            className="phone"
            placeholder="Your phone number"
            required
          />
          <input
            type="text"
            className="mail"
            placeholder="Your mail address"
            required
          />
          <textarea
            type="text"
            className="comment"
            placeholder="What can I help?"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
