import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const closeMenu = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        V<span>s</span>T Plug<span>In</span>s
      </a>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="#home" className="nav__link" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#plugins" className="nav__link" onClick={closeMenu}>
            PlugIns
          </a>
        </li>
        <li className="nav__item">
          <a href="#rig" className="nav__link" onClick={closeMenu}>
            Keys Rig
          </a>
        </li>
        <li className="nav__item">
          <a href="#footer" className="nav__link" onClick={closeMenu}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
