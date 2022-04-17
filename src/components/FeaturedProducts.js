import React from "react";
import prodimage1 from "../images/REARRIGHTGASSHOCK.jpg";
import star from "../images/star.png";

export default function FeaturedProducts(params) {
  return (
    <div className="product-card">
      <img className="prod-image" src={prodimage1} />
      <div className="prod-desc">
        <img className="star" src={star} />
        <p className="prod-rating">5.0 (6) . Kenya</p>
        <p>The best quality Rear Right Gas Shock</p>
        <p className="bold">Kshs. 3,500</p>
      </div>
    </div>
  );
}
