import React from "react";

import star from "../images/star.png";

export default function ProductsList(props) {
  return (
    <div className="product-card">
      {props.product.stock === 0 && (
        <div className="product-banner">SOLD OUT</div>
      )}
      <img className="prod-image" src={props.product.img} />
      <div className="prod-desc">
        <img className="star" src={star} />
        <p className="prod-rating">{props.product.rating}</p>
        <p>{props.product.desc}</p>
        <p className="bold">{props.product.price}</p>
      </div>
    </div>
  );
}
