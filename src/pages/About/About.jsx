import React from "react";
import "./About.scss";
import Aside from "../../components/Aside/Aside";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import image from "../../Assets/profilepicture.jpg";

export default function About() {
  return (
    <div className="About">
      <Header header="index-header" />
      <Aside />
      <AboutMe />
      <div className="main-image">
        <img
          className="image"
          src={image}
          width="280px"
          height="280px"
          alt="profile"
        />
        <div className="skills">
          <p>SCSS // React // Javascript</p>
          <p>Node JS // Express JS // MongoDB</p>
        </div>
      </div>
      <Footer footer="index-footer" />
    </div>
  );
}
