import React from "react";

export default function PopularProductsCard(props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={props.image} alt="servicekit" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-5">{props.category}</p>
        </div>
      </div>
    </div>
  );
}
