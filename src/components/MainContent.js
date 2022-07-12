import React from "react";
import Cover1 from "../images/cover1.jpg";
import bulmaCarousel from "bulma-carousel";

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
    <div>
      <div
        id="carousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div className="carousel-item active">
            <figure className="image is16by9 is-covered">
              <img src={Cover1} />
            </figure>

            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to Autoserve</h5>
              <p>Your best spare partner</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src={Cover1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Genuine parts</h5>
              <p>We sell all spare brands</p>
            </div>
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
  );
}

export default MainContent;
