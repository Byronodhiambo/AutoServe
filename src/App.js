import "./App.css";
import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ImageCatalog from "./components/ImageCatalog";

import Category from "./components/Category";
import Brand from "./components/Brand";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Category />
      <Brand />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
