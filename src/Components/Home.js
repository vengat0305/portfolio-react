import React from "react";
import "./Home.css";
const Home = () => {
  // fun
  const homeScroll = (e) => {
    return window.scrollTo(100, 0);
  };

  const skillScroll = (e) => {
    return window.scrollTo(0, 650);
  };

  const aboutScroll = (e) => {
    return window.scrollTo(0, 1150);
  };
  const projectsScroll = (e) => {
    return window.scrollTo(0, 1700);
  };

  return (
    <header className="homeContainer">
      <div className="homeNav">
        <h1>
          Web<span>Dev</span>
        </h1>
        <ol className="homeList">
          <li onClick={() => homeScroll()}>Home</li>
          <li id="skillBtn" onClick={() => skillScroll()}>
            Skills
          </li>
          <li onClick={() => aboutScroll()}>About</li>
          <li onClick={() => projectsScroll()}>Projects</li>
        </ol>
      </div>
      <div className="headerContainer">
        <div className="headerContent">
          <h1>I'm Shan!</h1>
          <h2>FrontEnd Developer</h2>
          <p>Turning Ideas Into Interactive Reality!</p>
          <div className="socialIcon">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
        </div>
        <>
          <img
            className="headerImage"
            src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg"
          />
        </>
      </div>
    </header>
  );
};

export default Home;
