import React from "react";
import Cover3 from "../images/cover3.jpg";
import Cover4 from "../images/cover4.jpg";
import Cover2 from "../images/cover2.jpg";
import bulmaCarousel from "bulma-carousel";

function Carousel() {
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
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
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

        <div class="carousel-inner bg-info">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={Cover4} class="d-block w-100 h-100" alt="AUTO SERVE" />

            <div class="carousel-caption d-none d-md-block align-items-center justify-content-center ">
              <h1 className="display-4">AUTO SERVE & HARDWARE SUPPLIES LTD </h1>

              <h3>Your best spare partner</h3>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="5000">
            <img src={Cover3} class="d-block w-100 h-100" alt="AUTO SERVE" />
            <div class="carousel-caption d-none d-md-block align-items-center justify-content-center">
              <h1 className="display-4">Genuine parts</h1>
              <h3>We sell all spare brands</h3>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="5000">
            <img src={Cover2} class="d-block w-100 h-100" alt="AUTO SERVE" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="display-4">Our Shop</h1>
              <h3>We are located alon Dar es salaam road</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
