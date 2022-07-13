import "./App.css";
import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import MainContent from "./components/Carousel";
import Footer from "./components/Footer";
import ImageCatalog from "./components/ImageCatalog";
import BussinesCard from "./components/BussinesCards";
import fredrick from "../src/images/fredrick.jpeg";
import girish from "../src/images/Girish.jpg";
import mitesh from "../src/images/mitesh.jpg";
import PopulaParts from "./components/PopularParts";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <PopulaParts />

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
