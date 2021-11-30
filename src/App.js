//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./components/global components/Login/Login";
import Signup from "./components/global components/Signup/Signup";
import Forget from "./components/global components/Forget/Forget";

import AllProducts from "./components/global components/AllProducts/AllProducts";

import About from "./components/global components/About/About";

import Navbar from "./components/global components/Navbar/Navbar";
import Footer from "./components/global components/Footer/Footercomponents";

import NavBar from "./components/global components/Navbar/Navbar";
import SingleProduct from "./components/global components/SingleProduct/SingleProduct";

import Trackorder from "./components/global components/Order/Trackorder";

import Landing from "./components/global components/Landing/Landing";
import Cart from "./components/global components/Cart/Cart";
import ErrorPage from "./components/global components/ErrorPage/ErrorPage";
import AdminProducts from "./components/admin/Product";
import AdminCategory from "./components/admin/Category";
import Checkout from './components/global components/Checkout/Checkout'

/**
 * 
 */
function App() {
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const pageRender = (Page, pageStr) => {
    if (
      pageStr === "login" ||
      pageStr === "signup" ||
      pageStr === "about" ||
      pageStr === "forget" ||
      isLoggedIn
    ) {
      return (
        <>
          <NavBar />
          <Page />
          <Footer />
        </>
      );
    } else {

      return (
        <>
          <NavBar />
          <ErrorPage />
          <Footer />
        </>
      );
    }
  };

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/add/product"
            render={() => pageRender(AdminProducts, "admin")}
          />
          <Route
            exact
            path="/add/category"
            render={() => pageRender(AdminCategory, "admin")}
          />
          <Route
            exact
            path="/signup"
            render={() => pageRender(Signup, "signup")}
          />
          <Route exact path="/dashboard" render={() => pageRender(Landing)} />

          <Route exact path="/" render={() => pageRender(Login, "login")} />
          <Route
            exact
            path="/forget"
            render={() => pageRender(Forget, "forget")}
          />
          <Route
            exact
            path="/category/:categoryId"
            render={() => pageRender(AllProducts)}
          />
          <Route
            exact
            path="/category/product/:productId"
            render={() => pageRender(SingleProduct)}
          />
          <Route
            exact
            path="/about"
            render={() => pageRender(About, "about")}
          />

          <Route exact path="/footer" render={() => pageRender(Footer)} />


          <Route
            exact
            path="/trackorder"
            render={() => pageRender(Trackorder)}
          />

          <Route exact path="/cart" render={() => pageRender(Cart)} />
          <Route
            exact
            path="/checkout"
            render={() => pageRender(Checkout)}
          />
        </Switch>
      </Router>
    </>
  );
}
export default App;
