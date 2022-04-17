import React from "react";
import BussinesCard from "./BussinesCards";
import fredrick from "../images/fredrick.jpeg";
import girish from "../images/Girish.jpg";
import mitesh from "../images/mitesh.jpg";
import ImageCatalog from "./ImageCatalog";

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

      <div className="employees">
        <BussinesCard
          img={fredrick}
          name="Fredrick Maina"
          designation="Accountant"
        />
        <BussinesCard img={girish} name="Girish Karnad" designation="C E O" />
        <BussinesCard img={mitesh} name="Mitesh Patel" designation="Manager" />
      </div>
      <ImageCatalog />
    </div>
  );
}

export default MainContent;
