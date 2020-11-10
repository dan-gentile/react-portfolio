import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Project.scss";
import { faCode, faDesktopAlt } from "@fortawesome/pro-light-svg-icons";

export default function Project(props) {
  return (
    <article className={props.className}>
      <div className="info">
        <h2>{props.title}</h2>
        <ul className="links">
          <li>
            <FontAwesomeIcon
              icon={faGithubAlt}
              size="xl"
              style={{ marginRight: "4px" }}
            />
            <a href={props.gitHub} target="_blank" rel="noreferrer">
              GitHub |
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faDesktopAlt}
              size="xl"
              style={{ marginRight: "4px", marginLeft: "4px" }}
            />
            <a href={props.website} target="_blank" rel="noreferrer">
              Website
            </a>
          </li>
        </ul>
        <div className="code">
          <FontAwesomeIcon icon={faCode} style={{ marginRight: "4px" }} />
          <p>{props.code}</p>
        </div>
        <div class="description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="thumbnail">
        <a target="_blank" rel="noreferrer" href={props.thumbnail}>
          <img
            className="thumbnail-image"
            src={props.thumbnail}
            alt="screenshot"
          />
        </a>
      </div>
    </article>
  );
}
