//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/global components/login";
import Signup from "./components/global components/signup";
import Forget from "./components/global components/forget";
import AllProducts from "./components/global components/allProducts";
import About from "./components/global components/about";

// import Navbar from "./components/global components/Navbar/Navbar";
import Footer from "./components/global components/footer";

import NavBar from "./components/global components/navbar";
import SingleProduct from "./components/global components/singleProduct";
import Trackorder from "./components/global components/trackorder";
import Landing from "./components/global components/landing";
import Cart from "./components/global components/cart";
import ErrorPage from "./components/global components/errorPage/errorPage";
import AdminProducts from "./components/admin/product";
import AdminCategory from "./components/admin/category";
import Checkout from './components/global components/checkout';
 
/**
 * @description rendering all the compomnents of the site here
 * using router,switch,route. And the user can render to that particular webpage accordingly.
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
