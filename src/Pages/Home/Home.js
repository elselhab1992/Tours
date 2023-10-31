import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import desktopHero from "../../assets/hero.jpg";
import mobileHero from "../../assets/mobile.avif";

const Home = () => {
  return (
    <main className="main-container">
      <div className="main-content">
        {/* desktop image */}
        <div className="desktop-img">
          <img src={desktopHero} alt="banner" />
        </div>
        {/* mobile image */}
        <div className="mobile-img">
          <img src={mobileHero} alt="banner" />
        </div>
        <div className="main-text">
          <h1>Love Holidays</h1>
          <p>We offer a wide range of tours & hotels all over the world</p>
          <Link to="./tours">
            <button>Our Tours</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
