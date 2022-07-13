import "./App.css";
import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ImageCatalog from "./components/ImageCatalog";
import BussinesCard from "./components/BussinesCards";
import fredrick from "../src/images/fredrick.jpeg";
import girish from "../src/images/Girish.jpg";
import mitesh from "../src/images/mitesh.jpg";
import Category from "./components/Category";
import Brand from "./components/Brand";

function App() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Category />
      <Brand />

      <div className="main-container section">
        <h1>Sales Team</h1>
        <div className="employees">
          <BussinesCard
            img={fredrick}
            name="Fredrick Maina"
            designation="Sales"
          />
          <BussinesCard img={girish} name="Girish Karnad" designation="Sales" />
          <BussinesCard img={mitesh} name="Mitesh Patel" designation="Sales" />
        </div>
        <ImageCatalog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
