import React from 'react'
import './Home.scss'
import { BsArrowRight } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import ColorBends from '../ColorBends/ColorBends';

const Home = () => {
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
  return (
   <div id="home" className="home">
  <div className="home-left">
   <div className="home-title">  &nbsp; &lt; / &gt; Full Stack Developer</div>
   <div className="home-heading">
  <h1>Hi, I'm</h1>
  <h1 className="home-name">Kawin</h1>
  </div>
   <h1 className="home-subheading">A passionate Mern stack developer</h1>
   <div className="home-description">
    I build scalable full-stack applications using React, Node.js, MongoDB, and Express.
    Passionate about writing clean code, improving performance, and creating impactful solutions.

  </div>
  <div className="home-buttons">
  <button
    className="project-button"
    onClick={() => scrollToSection('projects')}
  >
    &nbsp;View Projects <BsArrowRight />
  </button>

  <button
    className="contact-button"
    onClick={() => scrollToSection('contact')}
  >
    &nbsp;Contact Me &nbsp;<CiMail />
  </button>
</div>
  </div>
  

  <div className="home-right">
      <div className="color-bends-background">
    <ColorBends
      colors={["#10B981"]}
      speed={1.0}
      frequency={1.5}
      noise={0.08}
      bandWidth={0.30}
      rotation={100}
      fadeTop={0.80}
      iterations={2}
      intensity={1.1}
    />
  </div>
    <div className="circle"></div>
    <div className="home-image">
      <img src="/kawin_r.png" alt="Kawin" />
    </div>
  </div>
</div>
  )
}

export default Home