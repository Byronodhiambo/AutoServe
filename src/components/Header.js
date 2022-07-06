import React from "react";
import logo from "../images/AutoServe.png";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} width="60px" />
      <h3 className="companyName">AutoServe</h3>

      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}
