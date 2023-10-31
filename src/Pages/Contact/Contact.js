import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <form className="form-items">
        <div className="contact">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="name ..." id="name" />
        </div>
        <div className="contact">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="email ..." id="email" />
        </div>
        <div className="contact">
          <label htmlFor="name">Message</label>
          <textarea></textarea>
        </div>
        <div className="form-btn">
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
