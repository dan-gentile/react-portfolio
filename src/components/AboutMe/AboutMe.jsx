import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import SocialLink from "../SocialLink/SocialLink";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="About-Me">
      <h1>DAN GENTILE</h1>
      <h3>Front End Web Developer</h3>
      <ContactInfo />
      <ul className="social">
        <SocialLink
          socialLink="https://github.com/dan-gentile"
          fontAwesomeIcon={<FontAwesomeIcon icon={faGithubSquare} size="2x" />}
        />
        <SocialLink
          socialLink="https://twitter.com/dangentile"
          fontAwesomeIcon={<FontAwesomeIcon icon={faTwitterSquare} size="2x" />}
        />
        <SocialLink
          socialLink="https://www.linkedin.com/in/dangentile/"
          fontAwesomeIcon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
        />
      </ul>
      <div className="about">
        <p>
          As a former concert roadie I found myself at the intersection of
          design ideals and technical reality. The needs of concert designers is
          no different then web designers and I find myself right at home making
          their dreams a reality. When I am not working on your web app you can
          find me making coffee and going for a run.
        </p>
      </div>
    </div>
  );
}
