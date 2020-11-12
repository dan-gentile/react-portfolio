import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";
import PocketButlerImage from "../../Assets/pocketbutler-screen-shot.png";
import WeatherImage from "../../Assets/weather-screen-shot.png";
import GymBroImage from "../../Assets/gymbro-screenshot.png";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";

export default function Projects() {
  return (
    <div className="Projects">
      <Header header="projects-header" />
      <Navbar />
      <Project
        className="one"
        title={<FontAwesomeIcon icon={faUmbrellaBeach} size="1x" />}
        gitHub="https://github.com/dan-gentile/weather-dashboard"
        website="https://dan-gentile.github.io/weather-dashboard/"
        code="CSS Grid | jQuery | OpenWeather API"
        description="Get your current weather! Search via city, state (only available in the US) or country! This app uses the OpenWeather API. The layout was built with CSS Grid. Past three city searches are saved to local-storage and can be recalled on the dashboard."
        thumbnail={WeatherImage}
      />
      <Project
        className="two"
        title="Gym Bro"
        gitHub="https://github.com/dan-gentile/gym-bro"
        website="https://dan-gentile.github.io/gym-bro"
        code="Foundation | jQuery | WGER API"
        description="GymBro is a browser based app that randomly generates workouts and a music playlist based on users input."
        thumbnail={GymBroImage}
      />

      <Project
        className="three"
        title="Pocket Butler"
        gitHub="https://github.com/dan-gentile/pocket-butler"
        website="pocketbutler.herokuapp.com/"
        code="Sequelize | Node js | jQuery"
        description="A full stack CRUD application that allows the user to create tasks that then appear on an upcoming task list and on a calendar view"
        thumbnail={PocketButlerImage}
      />
      <Footer footer="projects-footer" />
    </div>
  );
}
