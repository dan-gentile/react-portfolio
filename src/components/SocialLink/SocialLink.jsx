import React from "react";
import "./SocialLink.scss";

export default function SocialLink(props) {
  return (
    <li className="social-item">
      <a
        className="social-link"
        href={props.socialLink}
        target="_blank"
        rel="noreferrer"
      >
        {props.fontAwesomeIcon}
      </a>
    </li>
  );
}
