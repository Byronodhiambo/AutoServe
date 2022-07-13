import React from "react";
import servicekit from "../images/servicekit.png";
import PopularProductsCard from "./PopularProductsCard";

export default function PopulaParts() {
  return (
    <div className="section">
      <div className="container">
        <div>
          <h1 class="title">Popular Parts for your Car</h1>
          <h5 class="subtitle">View a selection of our most popular parts</h5>
        </div>
        <PopularProductsCard image={servicekit} category="Service Kit" />
        <PopularProductsCard image={servicekit} category="Service Kit" />
        <PopularProductsCard image={servicekit} category="Service Kit" />
        <PopularProductsCard image={servicekit} category="Service Kit" />
        <PopularProductsCard image={servicekit} category="Service Kit" />
      </div>
    </div>
  );
}
