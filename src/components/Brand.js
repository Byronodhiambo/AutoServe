import React from "react";
import servicekit from "../images/servicekit.png";
import BrandCard from "./BrandCard";
import Toyota from "../images/toyota.png";
import Suzuki from "../images/suzuki.png";
import Honda from "../images/honda.png";
import Mazda from "../images/mazda.png";
import Mitsubishi from "../images/mitsubishi.png";
import Nissan from "../images/nissan.png";
import Subaru from "../images/subaru.png";

export default function PopulaParts() {
  return (
    <div className="section">
      <div className="container">
        <div>
          <h1 class="title">Popular Parts for your Car</h1>
          <h5 class="subtitle">View a selection of our most popular parts</h5>
        </div>
        <div className="d-flex flex-wrap">
          <BrandCard image={Suzuki} brand="Suzuki" />
          <BrandCard image={Toyota} brand="Toyota" />
          <BrandCard image={Honda} brand="Honda" />
          <BrandCard image={Mazda} brand="Mazda" />
          <BrandCard image={Mitsubishi} brand="Mitsubishi" />
          <BrandCard image={Nissan} brand="Nissan" />
          <BrandCard image={Subaru} brand="Subaru" />
        </div>
      </div>
    </div>
  );
}
