import React from "react";

export default function BrandCard(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-image is-2by3">
        <figure class="image ">
          <img src={props.image} alt="brand" />
        </figure>
      </div>
    </div>
  );
}
