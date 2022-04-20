import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import prodimage1 from "../images/REARRIGHTGASSHOCK.jpg";
import prodimage2 from "../images/prodimage2.jpg";
import prodimage3 from "../images/prodimage3.jpg";
import prodimage4 from "../images/prodimage4.jpg";
import prodimage5 from "../images/prodimage5.jpg";
import prodimage6 from "../images/prodimage6.jpg";
import prodimage7 from "../images/prodimage7.jpg";
import prodimage8 from "../images/prodimage8.jpg";
import prodimage9 from "../images/prodimage9.jpg";

export default function ImageCatalog() {
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
      <div className="prod-catalog">
        <FeaturedProducts
          img={prodimage1}
          rating="5.0 (6) . Kenya"
          desc="The best quality Rear Right Gas Shock"
          price="Kshs. 3,500"
        />
        <FeaturedProducts
          img={prodimage2}
          rating="4.0 (15) . Kenya"
          desc="The best quality Air Filter"
          price="Kshs. 4,500"
        />
        <FeaturedProducts
          img={prodimage3}
          rating="4.6 (2) . Kenya"
          desc="The best quality Oil Filter"
          price="Kshs. 8,000"
        />
        <FeaturedProducts
          img={prodimage4}
          rating="3.9 (17) . Kenya"
          desc="The best quality Breake Pad & Shoe"
          price="Kshs. 3,400"
        />
        <FeaturedProducts
          img={prodimage5}
          rating="4.8 (9) . Kenya"
          desc="The best quality Condenser"
          price="Kshs. 8,000"
        />
        <FeaturedProducts
          img={prodimage6}
          rating="4.2 (10) . Kenya"
          desc="The best quality Radiator"
          price="Kshs. 7,000"
        />
        <FeaturedProducts
          img={prodimage7}
          rating="5.0 (14) . Kenya"
          desc="The best quality Gasket"
          price="Kshs. 1,300"
        />
        <FeaturedProducts
          img={prodimage8}
          rating="4.4 (13) . Kenya"
          desc="The best quality Shock Absober"
          price="Kshs. 2,800"
        />
        <FeaturedProducts
          img={prodimage9}
          rating="4.7 (5) . Kenya"
          desc="The best quality Fan & Motor"
          price="Kshs. 5,500"
        />
      </div>
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
