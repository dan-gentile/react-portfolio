import React from "react";
import "./Header.scss";
import logo from "../../Assets/roadiecoffee.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          width="50"
          height="50"
          alt="fox and rabbit logo"
          loading="lazy"
        />
      </div>
    </header>
  );
}
