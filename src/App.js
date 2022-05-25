// import logo from './logo.svg';
// import './App.css';
// import 'bulma/css/bulma.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import logo from "./images/AutoServe.png";
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";

import axios from "axios";
import jwt_decode from "jwt-decode";

import Context from "./Context";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    let user = localStorage.getItem("user");
    const products = await axios.get("http://localhost:3001/products");
    user = null; //user ? JSON.parse(user) : null;
    this.setState({ user, products: products.data });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            <nav
              className="navbar container is-fixed-top is-transparent"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand ">
                <img class="image " src={logo} width="112" height="28" />
                <h1>
                  <b className="navbar-item is-size-4 ">AutoServe</b>
                </h1>
                <label
                  role="button"
                  class="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </label>
              </div>
              <div
                className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}
              >
                <div class="navbar-start">
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                  <Link to="/shop" className="navbar-item">
                    Shop
                  </Link>
                  {this.state.user && this.state.user.accessLevel < 1 && (
                    <Link to="/add-product" className="navbar-item">
                      Add Product
                    </Link>
                  )}

                  <Link to="/contacts" className="navbar-item">
                    Contacts
                  </Link>
                </div>

                <div class="navbar-end">
                  <Link to="/cart" className="navbar-item">
                    My Cart
                    <span
                      className="tag is-primary"
                      style={{ marginLeft: "5px" }}
                    >
                      {Object.keys(this.state.cart).length}
                    </span>
                  </Link>

                  {!this.state.user ? (
                    <Link to="/login" className="navbar-item">
                      Login
                    </Link>
                  ) : (
                    <Link to="/" onClick={this.logout} className="navbar-item">
                      Logout
                    </Link>
                  )}
                </div>
              </div>
            </nav>
            <Routes>
              {/* <Route exact path="/" component={ProductList} /> */}
              <Route exact path="/" component={Product} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/shop" component={Product} />
              <Route exact path="/contact" component={Contact} />
            </Routes>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
