import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const menuBtn = document.getElementsByClassName("menu-btn")[0];
const hamburger = document.getElementsByClassName("menu-btn_burger")[0];
const nav = document.getElementsByClassName("nav")[0];
const navMenu = document.getElementsByClassName("menu-nav")[0];
const navItems = document.getElementsByClassName("menu-nav__item");

let showMenu = false;

// if (menuBtn) {
//   menuBtn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     console.log("clicked");
//     toggleMenu();
//   });
// }

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach((element) => {
      element.classList.add("open");
    });
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((element) => {
      element.classList.remove("open");
    });
    showMenu = false;
  }
};

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const handleChange = () => {
    if (menuState === false) setMenuState(true);
    if (menuState === true) setMenuState(false);
  };
  return (
    <>
      <div
        className={menuState === true ? "menu-btn open" : "menu-btn"}
        onClick={handleChange}
      >
        <span
          className={
            menuState === true ? "menu-btn__burger open" : "menu-btn__burger"
          }
        ></span>
      </div>
      <nav className={menuState === true ? "nav open" : "nav"}>
        <ul className={menuState === true ? "menu-nav open" : "menu-nav"}>
          <li
            className={
              menuState === true ? "menu-nav__item open" : "menu-nav__item"
            }
          >
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "menu-nav__link active"
                  : "menu-nav__link"
              }
            >
              Home
            </Link>
          </li>
          <li
            className={
              menuState === true ? "menu-nav__item open" : "menu-nav__item"
            }
          >
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects"
                  ? "menu-nav__link active"
                  : "menu-nav__link"
              }
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
