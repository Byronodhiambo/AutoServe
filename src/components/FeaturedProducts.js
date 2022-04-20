import React from "react";

import star from "../images/star.png";

export default function FeaturedProducts(props) {
  return (
    <div className="product-card">
      {props.stock === 0 && <div className="product-banner">SOLD OUT</div>}
      <img className="prod-image" src={props.img} />
      <div className="prod-desc">
        <img className="star" src={star} />
        <p className="prod-rating">{props.rating}</p>
        <p>{props.desc}</p>
        <p className="bold">{props.price}</p>
      </div>
    </div>
  );
}
