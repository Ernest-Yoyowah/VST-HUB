import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <a href="/">VST HUB</a>
      </div>
      <ul className="nav_menu">
        <li>Home</li>
        <li>PlugIns</li>
        <li>Keys Rig</li>
        <li className="nav_plugins">Contact Us:</li>
      </ul>
    </div>
  );
};

export default Navbar;
