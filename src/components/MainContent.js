import React from "react";
import Cover1 from "../images/cover1.jpg";
// import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";

function MainContent() {
  return (
    <div className="section">
      <div className="container is-clipped carousel">
        <div id="slider" className="carousel">
          <div className="card">
            <div className="card-image">
              <figure className="image is16by9 is-covered">
                <img src={Cover1} />
              </figure>
            </div>
            <div className="card-content">
              <div className="item-title">hello</div>
              <div className="item-description">just saying hi</div>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <figure className="image is16by9 is-covered">
                <img src={Cover1} />
              </figure>
            </div>
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
