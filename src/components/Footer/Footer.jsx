import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <footer className={props.footer}>
      <p>This site was built with React and Sass</p>
    </footer>
  );
}
