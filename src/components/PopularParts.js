import React from "react";
import servicekit from "../images/servicekit.png";
import PopularProductsCard from "./PopularProductsCard";
import Break_Discs from "../images/brakedisc.png";
import suspension from "../images/suspension.png";
import oil from "../images/oil.png";
import Batteries from "../images/Batteries.png";
import engine from "../images/engine.png";

export default function PopulaParts() {
  return (
    <div className="section">
      <div className="container">
        <div>
          <h1 class="title">Popular Parts for your Car</h1>
          <h5 class="subtitle">View a selection of our most popular parts</h5>
        </div>
        <div className="d-flex flex-wrap">
          <PopularProductsCard image={servicekit} category="Service Kit" />
          <PopularProductsCard
            image={Break_Discs}
            category="Brake Discs & Pads"
          />
          <PopularProductsCard image={suspension} category="Suspension" />
          <PopularProductsCard image={oil} category="Oil & Lubricants" />
          <PopularProductsCard image={Batteries} category="Batteries" />
          <PopularProductsCard image={engine} category="Engine Parts" />
          <PopularProductsCard image={servicekit} category="" />
        </div>
      </div>
    </div>
  );
}
