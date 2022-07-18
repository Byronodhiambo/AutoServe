import React from "react";
import BussinesCard from "../components/BussinesCards";
import fredrick from "../images/fredrick.jpeg";
import girish from "../images/Girish.jpg";
import mitesh from "../images/mitesh.jpg";

export default function Contact() {
  return (
    <>
      <div className="container">
        <h1>Sales Team</h1>
        <div className="employees">
          <BussinesCard
            img={fredrick}
            name="Fredrick Maina"
            designation="Sales"
          />
          <BussinesCard img={girish} name="Girish Karnad" designation="Sales" />
          <BussinesCard img={mitesh} name="Mitesh Patel" designation="Sales" />
        </div>
      </div>
    </>
  );
}
