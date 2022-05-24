import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ImageCatalog from "./components/ImageCatalog";
import BussinesCard from "./components/BussinesCards";
import fredrick from "../src/images/fredrick.jpeg";
import girish from "../src/images/Girish.jpg";
import mitesh from "../src/images/mitesh.jpg";
import App from "./App";
function Page() {
  return (
    <>
      <App />
      {/* <Header />
      <MainContent />
      <div className="main-container">
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

      <Footer /> */}
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
