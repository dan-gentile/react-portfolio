import React from "react";
import "./ContactInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faMailbox } from "@fortawesome/pro-light-svg-icons";

export default function ContactInfo() {
  return (
    <div className="Contact-Info">
      <ul className="details">
        <li>
          <FontAwesomeIcon icon={faGlobeAmericas} /> Portland OR
        </li>
        <li>
          <FontAwesomeIcon icon={faMailbox} />
          <a href="mailto:dangentile@foxandrabbit.us"> dan@foxandrabbit.us</a>
        </li>
      </ul>
    </div>
  );
}
