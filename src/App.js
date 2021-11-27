//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useSelector} from  "react-redux"

import Login from "./components/global components/login/login";
import Signup from "./components/global components/signup/signup";
import Forget from "./components/global components/forget/forget";

import Blouses from "./components/categories/blouses";
import Sarees from "./components/categories/sarees";
import Collections from "./components/categories/collections";
import Accessories from "./components/categories/accessories";
import Dresses from "./components/categories/dresses";
import HomeLiving from "./components/categories/home&living";
import Loungewear from "./components/categories/loungewear";
import Menswear from "./components/categories/menswear";
import Bestseller from "./components/categories/bestseller";
import About from "./components/categories/about";

import Navbar from "./components/global components/Navbar/Navbar";
import Footer from "./components/global components/footer/footercomponents";

import NavBar from "./components/global components/Navbar/Navbar";
import Saree1 from "./components/products/saree1";

import Trackorder from "./components/global components/order/trackorder";

import Landing from "./components/global components/landing/landing";
import Cart from "./components/global components/cart/cart";
import ErrorPage from "./components/global components/errorPage/errorPage"
import Product from "./components/admin/product"
import Category from "./components/admin/category"

function App() {
  const isLoggedIn=useSelector((state) =>state.user?.isLoggedIn)
  const pageRender = (Page,pageStr) => {
if(pageStr==="login" || pageStr==="signup" || pageStr==="about" || isLoggedIn ){
  // console.log("if....",Page)
  return (
      <>
      <NavBar/>
        <Page />
        <Footer />
      </>
    );


}
else{
  // console.log("else...",Page,pageStr)

  return (
    <>
    <NavBar/>
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
        <Route exact path="/add/product" render={() => pageRender(Product,"admin")} />
        <Route exact path="/add/category" render={() => pageRender(Category,'admin')} />
          <Route exact path="/signup" render={() => pageRender(Signup,"signup")} />
          <Route exact path="/" render={() => pageRender(Landing)} />

          <Route exact path="/login" render={() =>pageRender(Login,"login") } />
          <Route exact path="/forget" render={() =>pageRender(Forget)} />
          <Route exact path="/blouses" render={() =>pageRender(Blouses) } />
          <Route exact path="/category/:categoryId" render={() =>pageRender(Sarees)} />
          <Route
            exact
            path="/category/product/:productId"
            render={() => pageRender(Saree1)}
          />
          <Route exact path="/collections" render={() =>pageRender(Collections) } />
          <Route exact path="/accessories" render={() =>pageRender(Accessories) } />
          <Route exact path="/dresses" render={() =>pageRender(Dresses) } />
          <Route exact path="/homeliving" render={() =>pageRender(HomeLiving) } />
          <Route exact path="/loungewear" render={() => pageRender(Loungewear)} />
          <Route exact path="/menswear" render={() => pageRender(Menswear)} />
          <Route exact path="/bestseller" render={() =>pageRender(Bestseller)} />
          <Route exact path="/about" render={() => pageRender(About,"about")} />

          <Route exact path="/footer" render={() =>pageRender(Footer)} />

          <Route exact path="/products/1" render={() =>pageRender(Saree1) } />

          <Route exact path="/trackorder" render={() =>pageRender(Trackorder)} />

          <Route exact path="/cart" render={() => pageRender(Cart)} />
          

        </Switch>
      </Router>
    </>
  );
}
export default App;
