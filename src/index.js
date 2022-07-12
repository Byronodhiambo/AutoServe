import ReactDOM from "react-dom";
import React from "react";
import "bulma/css/bulma.css";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageCatalog from "./components/ImageCatalog";
import App from "./App";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Products" element={<ImageCatalog />} />
        <Route path="/Contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
