import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ImageCatalog from "./components/ImageCatalog";
import BussinesCard from "./components/BussinesCards";
import fredrick from "../src/images/fredrick.jpeg";
import girish from "../src/images/Girish.jpg";
import mitesh from "../src/images/mitesh.jpg";
function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <div className="main-container"></div>
      <div className="employees">
        <BussinesCard
          img={fredrick}
          name="Fredrick Maina"
          designation="Accountant"
        />
        <BussinesCard img={girish} name="Girish Karnad" designation="C E O" />
        <BussinesCard img={mitesh} name="Mitesh Patel" designation="Manager" />
      </div>
      <ImageCatalog />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
