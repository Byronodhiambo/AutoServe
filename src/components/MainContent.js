import React from "react";
import BussinesCard from "./BussinesCards";
function MainContent() {
  return (
    <div className="container">
      <h1>AUTO SERVE & HARDWARE SUPPLIES LTD </h1>
      <ul>
        <li>Your best spare partner</li>
        <li>We sell all spare brands</li>
        <li>We are located alon Dar es salaam road</li>
        <li>Opening hours are 9 a.m - 5 p.m</li>
      </ul>
      <br></br>
      <h2>Our employees</h2>

      <BussinesCard />
    </div>
  );
}

export default MainContent;
