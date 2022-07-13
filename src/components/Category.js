import React from "react";
import servicekit from "../images/servicekit.png";
import CategoryCard from "./CategoryCard";
import Break_Discs from "../images/brakedisc.png";
import suspension from "../images/suspension.png";
import oil from "../images/oil.png";
import Batteries from "../images/Batteries.png";
import engine from "../images/engine.png";
import Shocks from "../images/shocks.png";

export default function PopulaParts() {
  return (
    <div className="section">
      <div className="container">
        <div>
          <h1 class="title">Popular Parts for your Car</h1>
          <h5 class="subtitle">View a selection of our most popular parts</h5>
        </div>
        <div className="d-flex flex-wrap">
          <CategoryCard image={servicekit} category="Service Kit" />
          <CategoryCard image={Break_Discs} category="Brake Discs & Pads" />
          <CategoryCard image={suspension} category="Suspension" />
          <CategoryCard image={oil} category="Oil & Lubricants" />
          <CategoryCard image={Batteries} category="Batteries" />
          <CategoryCard image={engine} category="Engine Parts" />
          <CategoryCard image={Shocks} category="Shocks" />
        </div>
      </div>
    </div>
  );
}
