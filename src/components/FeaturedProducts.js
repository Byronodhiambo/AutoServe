import React from "react";
import Products from "./ProductList";
import FeaturedProductsData from "../components/FeaturedProductsData";

export default function FeaturedProducts() {
  const Items = FeaturedProductsData.map((product) => {
    return <Products key={product.id} product={product} />;
  });
  return (
    <div className="container">
      <h1 class="title">Featured Parts</h1>
      <div className="prod-catalog">{Items}</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
