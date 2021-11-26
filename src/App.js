//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  const pageRender = (Page) => {
    return (
      <>
      <NavBar/>
        <Page />
        <Footer />
      </>
    );
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signup" render={() => pageRender(Signup)} />
          <Route exact path="/" render={() => pageRender(Landing)} />

          <Route exact path="/login" render={() =>pageRender(Login) } />
          <Route exact path="/forget" render={() =>pageRender(Forget)} />
          <Route exact path="/blouses" render={() =>pageRender(Blouses) } />
          <Route exact path="/category/:categoryId" render={() =>pageRender(Sarees)} />
          <Route
<<<<<<< HEAD
           exact path="/product" render={() => <Product />} />
           <Route
           exact path="/category" render={() => <Category />} />
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
          exact path = "/category/:categoryId" render={()=><Sarees/>}/>
          <Route 
          exact path = "/category/description/:categoryId" render={()=><Saree1/>}/>
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
=======
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
          <Route exact path="/about" render={() => pageRender(About)} />
>>>>>>> b5b67797824533b9a55046c514affece3e9d3ee8

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
