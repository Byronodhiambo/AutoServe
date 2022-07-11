import React from "react";
import Cover1 from "../images/cover1.jpg";
import bulmaCarousel from "bulma-carousel";
// import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";

function MainContent() {
  var carousels = bulmaCarousel.attach(".carousel");

  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  var element = document.querySelector("#carousel");
  if (element && element.bulmaCarousel) {
    element.bulmaCarousel.on("before-show", function (state) {
      console.log(state);
    });
  }
  return (
    <div className="section">
      <div className="container is-clipped carousel">
        <div id="carousel" className="carousel" data-slides-to-scroll="2">
          <div className="item-1">
            {/* <div className="card-image"> */}
            <figure className="image is16by9 is-covered">
              <img src={Cover1} />
            </figure>
            {/* </div> */}
            <div className="card-content">
              <div className="item-title">hello</div>
              <div className="item-description">just saying hi</div>
            </div>
          </div>

          <div className="item-2">
            {/* <div className="card-image"> */}
            <figure className="image is16by9 is-covered">
              <img src={Cover1} />
            </figure>
            {/* </div> */}
            <div className="card-content">
              <div className="item-title">hello</div>
              <div className="item-description">just saying hi</div>
            </div>
          </div>
        </div>
        <h1>AUTO SERVE & HARDWARE SUPPLIES LTD </h1>
        <ul>
          <li>Your best spare partner</li>
          <li>We sell all spare brands</li>
          <li>We are located alon Dar es salaam road</li>
          <li>Opening hours are 9 a.m - 5 p.m</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
