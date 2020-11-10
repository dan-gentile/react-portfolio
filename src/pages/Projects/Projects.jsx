import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";
import PocketButlerImage from "../../Assets/pocketbutler-screen-shot.png";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="Projects">
      <Header header="projects-header" />
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
