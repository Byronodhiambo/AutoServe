import React from "react";

export default function BusinessCard(props) {
  return (
    <div className="card">
      <img className="cardImage" src={props.img} />
      <div className="cardContent">
        <div className="personalInfo">
          <h2 className="info">{props.name}</h2>
          <h6 className="info">{props.designation}</h6>
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
          <h3>About</h3>
          <p>
            Driven accountant with five years of experience supervising 100s of
            tax filings. Responsible for managing Avid Corp's auditing and tax
            filings.
          </p>
          <h3>Role</h3>
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
