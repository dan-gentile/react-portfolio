import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="Projects">
      <Header header="projects-header" />
      <Project />
      <Footer footer="projects-footer" />
    </div>
  );
}
