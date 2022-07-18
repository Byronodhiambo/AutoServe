import React from "react";
import logo from "../images/AutoServe.png";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <nav class="nav navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img className="logo" src={logo} w />
          {/* <h3 className="companyName">AutoServe</h3> */}
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <Link to="/" class="navbar-item">
              Home
            </Link>
          </a>
          <a class="navbar-item">
            <Link to="/Shop" class="navbar-item">
              Shop
            </Link>
          </a>
          <a class="navbar-item">
            <Link to="/Contacts" class="navbar-item">
              Contacts
            </Link>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>
                  <Link to="/Contacts" class="navbar-item">
                    Cart
                  </Link>
                </strong>
              </a>
              <a class="button is-light">
                <Link to="/Contacts" class="navbar-item">
                  My Account
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
