// import ReactDOM, { render } from "react-dom";
// import React from "react";

// ReactDOM.render(<h1>hello world</h1>, document.querySelector("#root"));

// const page = (
//   <div>
//     <img src="./AutoServe.png" width="400px" />
//     <h1>AUTO SERVE & HARDWARE SUPPLIES LTD</h1>
//     <ul>
//       <li>Your best spare partner</li>
//       <li>We sell all spare brands</li>
//       <li>We are located alon Dar es salaam road</li>
//       <li>Opening hours are 9 a.m - 5 p.m</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(page, document.querySelector("#root"));

// function Page() {
//   return (
//     <div>
//       <img src="./AutoServe.png" width="400px" />
//       <h1>AUTO SERVE & HARDWARE SUPPLIES LTD</h1>
//       <ul>
//         <li>Your best spare partner</li>
//         <li>We sell all spare brands</li>
//         <li>We are located alon Dar es salaam road</li>
//         <li>Opening hours are 9 a.m - 5 p.m</li>
//       </ul>
//     </div>
//   );
// }

// // ReactDOM.render(Page(), document.querySelector("#root"));
// ReactDOM.render(<Page />, document.querySelector("#root"));

import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// function Header() {
//   return (
//     <header>
//       <nav>
//         <img src=",/AutoServe.png" width="40px" />
//         <ul className="nav-items">
//           <li>home</li>
//           <li>services</li>
//           <li>contacts</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// function MainContent() {
//   return (
//     <>
//       <h1>AUTO SERVE & HARDWARE SUPPLIES LTD </h1>
//       <ol>
//         <li>Your best spare partner</li>
//         <li>We sell all spare brands</li>
//         <li>We are located alon Dar es salaam road</li>
//         <li>Opening hours are 9 a.m - 5 p.m</li>
//       </ol>
//     </>
//   );
// }
// function Footer() {
//   return (
//     <footer>
//       <small>
//         <p> @ 2022 Auto Serve Ltd. All rights reserved.</p>
//       </small>
//     </footer>
//   );
// }

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
