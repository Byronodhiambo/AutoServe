import React from "react";
import FeaturedProducts from "../components/ProductList";
import FeaturedProductsData from "../components/FeaturedProductsData";

export default function ImageCatalog() {
  const Products = FeaturedProductsData.map((product) => {
    return <FeaturedProducts key={product.id} product={product} />;
  });
  return (
    <div className="service">
      <h1>Products</h1>
      <div className="image-container">
        <div className="image1"></div>
        <div>
          <div className="image2"></div>
          <div className="image3"></div>
        </div>
        <div>
          <div className="image4"></div>
          <div className="image5"></div>
        </div>
        <div className="image6"></div>
      </div>
      <div className="container">
        <p>
          Regular maintenance reduces the probability of a car breakdown and, at
          the same time, extends the vehicle’s life. If there is no proper
          maintenance of your car parts they can easily get damaged. This is the
          main reason why you have to take your vehicle to the proper
          maintenance and also through the proper servicing, you could diagnose
          the issues of your vehicle before it causes serious damage. In
          addition, preventive maintenance is cheaper than carrying out a car
          repair, so you will also be taking care of your pocket.
        </p>
        <p>
          Not everything can be repaired. Sometimes, to keep your car or vehicle
          running you need to replace! Spare parts can be classified into two
          groups: repairables and consumables.
        </p>
        <p>
          A good maintenance involves also to know some consumable parts of the
          vehicle that must be periodically replaced and besides are not
          repairable. Did you know? Vehicles have some commodities that have a
          specific and limited use and have to be replaced after a certain and
          easily predictable time. Failure and neglect can cause serious damage
          and that is why, generally, the replacement period is less than one
          year. Among the most common consumable parts are the following: engine
          oil, brake pad, coolant, tire, etc.
        </p>
      </div>

      <h1>Featured Parts</h1>
      <div className="prod-catalog">{Products}</div>
    </div>
  );
}

// const nums = [1, 2, 3, 4, 5];
// const squared = nums.map((num) => num * num);
// console.log(squared);

// const names = ["james", "kimani"];
// const capitalised = names.map(
//   (name) => name.charAt(0).toLocaleUpperCase() + name.slice(1)
// );
// console.log(capitalised);

// const array = ["red", "yellow", "blue"];

// const h3elements = array.map((element) => `<h3>element</h3>`);
// console.log(h3elements);
