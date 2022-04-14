import React from "react";
import fredrick from "../images/fredrick.jpeg";
export default function BusinessCard() {
  return (
    <div className="businessCard">
      <img className="cardImage" src={fredrick} />
      <div className="businessContent">
        <div className="personalInfo">
          <h3 className="info">Fredrick Maina</h3>
          <h6 className="info">Accountant</h6>
          <span className="info">
            <button>
              <i class="fa fa-envelope" aria-hidden="true"></i>Email
            </button>
            <button>
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>Linkedln
            </button>
          </span>
        </div>

        <div className="bio">
          <h5>About</h5>
          <p>
            Driven accountant with five years of experience supervising 100s of
            tax filings. Responsible for managing Avid Corp's auditing and tax
            filings.
          </p>
          <h5>Role</h5>
          <p>
            Performs accounting functions such as account analysis, auditing, or
            financial statement analysis. Accountants can find employment with
            an accounting firm or a large company with an internal accounting
            department, or they can set up an individual practice.
          </p>
        </div>
      </div>

      <div className="socialHandles">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </div>
    </div>
  );
}
