import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ImageCatalog from "./components/ImageCatalog";

function Page() {
  return (
    <>
      <Header />
      <div className="main-container">
        <MainContent />
        <ImageCatalog />
      </div>
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
