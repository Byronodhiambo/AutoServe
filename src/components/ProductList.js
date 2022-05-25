import React from "react";

// import star from "../images/star.png";

// export default function ProductsList(props) {
//   return (
//     <div className="product-card">
//       {props.product.stock === 0 && (
//         <div className="product-banner">SOLD OUT</div>
//       )}
//       <img className="prod-image" src={props.product.img} />
//       <div className="prod-desc">
//         <img className="star" src={star} />
//         <p className="prod-rating">{props.product.rating}</p>
//         <p>{props.product.desc}</p>
//         <p className="bold">{props.product.price}</p>
//       </div>
//     </div>
//   );
// }

import ProductItem from "./ProductItem";
import withContext from "../withContext";

const ProductList = (props) => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
