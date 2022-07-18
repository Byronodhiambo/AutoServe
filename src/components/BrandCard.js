import React from "react";

export default function BrandCard(props) {
  return (
    <div class="card" style={{ width: "8rem" }}>
      <div class="card-image ">
        <img src={props.image} alt="brand" />
      </div>
    </div>
  );
}
