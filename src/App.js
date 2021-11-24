//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/global components/login/login"
import Signup from "./components/global components/signup/signup"
import Forget from "./components/global components/forget/forget"

import Blouses from "./components/categories/blouses"
import Sarees from "./components/categories/sarees"
import Collections from "./components/categories/collections"
import Accessories from "./components/categories/accessories"
import Dresses from "./components/categories/dresses"
import HomeLiving from "./components/categories/home&living"
import Loungewear from "./components/categories/loungewear"
import Menswear from "./components/categories/menswear"
import Bestseller from "./components/categories/bestseller"
import About from "./components/categories/about"

import Navbar from "./components/global components/Navbar/Navbar"
import Footer from "./components/global components/footer/footercomponents"

import NavBar from "./components/global components/Navbar/Navbar"
import Sarees1 from "./components/products/saree1"

import Trackorder from "./components/global components/order/trackorder"

import Landing from "./components/global components/landing/landing"
import Cart from "./components/global components/cart/cart"

function App() {
  
  return (
    <>
      <Router>
      <Switch>

          <Route
           exact path="/signup" render={() => <Signup />} />
          <Route
           exact path="/" render={() => <Landing />} />

          <Route 
          exact path="/login" render={ ()=><Login/>}/>
          <Route 
          exact path="/forget" render={() => <Forget />} />
          <Route 
          exact path = "/blouses" render={()=><Blouses/>}/>
          <Route 
          exact path = "/sarees" render={()=><Sarees/>}/>
           <Route 
          exact path = "/collections" render={()=><Collections/>}/>
          <Route 
          exact path = "/accessories" render={()=><Accessories/>}/>
         <Route 
          exact path = "/dresses" render={()=><Dresses/>}/>
           <Route 
          exact path = "/homeliving" render={()=><HomeLiving/>}/>
        <Route 
          exact path = "/loungewear" render={()=><Loungewear/>}/>
          <Route 
          exact path = "/menswear" render={()=><Menswear/>}/>
          <Route 
          exact path = "/bestseller" render={()=><Bestseller/>}/>
          <Route 
          exact path = "/about" render={()=><About/>}/>

           <Route
           exact path="/footer" render={() => <Footer />} />

          <Route
           exact path="/products/1" render={() => <Sarees1 />} />

          <Route
           exact path="/trackorder" render={() => <Trackorder />} />

          <Route
           exact path="/cart" render={() => <Cart />} />

        </Switch>

      </Router>
    </>
  );
}
export default App;