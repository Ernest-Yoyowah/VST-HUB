import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_logo">VST HUB</div>
      <ul className="nav_menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav_plugins">Plugins</li>
      </ul>
    </div>
  );
};

export default Navbar;
