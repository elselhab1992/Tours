import React from "react";
import "./About.css";
import about from "../../assets/about.png";

const About = () => {
  return (
    <section className="about-section">
      <div>
        <img src={about} alt="about-img" />
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          loveholidays is the UK’s fastest-growing travel agent. We’re on a
          mission to open the world to everyone. We’ve become the
          fastest-growing travel agent by offering unlimited choice, unmatched
          ease, and unmissable value. We believe that holidays refresh and renew
          us. That travel makes new connections and turns strangers into
          friends. We believe it shouldn’t be an expensive luxury.
        </p>
      </div>
    </section>
  );
};

export default About;
