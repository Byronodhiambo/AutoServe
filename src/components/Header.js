import React from "react";
import logo from "../images/AutoServe.png";

export default function Header() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} width="60px" />
      <h3 className="companyName">AutoServe</h3>

      <ul className="nav-items">
        <li>home</li>
        <li>services</li>
        <li>contacts</li>
      </ul>
    </nav>
  );
}
