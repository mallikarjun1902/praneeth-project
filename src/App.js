//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/global components/login/login"
import Signup from "./components/global components/signup/signup"
import Forget from "./components/global components/forget/forget"
import Landing from "./components/global components/Navbar/Navbar"
import Blouses from "./components/categories/blouses"
import Sarees from "./components/categories/sarees"
function App() {
  return (
    <>
      <Router>
      <Switch>

          <Route
           exact path="/signup" render={() => <Signup />} />

          <Route 
          exact path="/login" render={() => <Login />} />
          <Route 
          exact path="/forget" render={() => <Forget />} />
          <Route 
          exact path = "/blouses" render={()=><Blouses/>}/>
          <Route 
          exact path = "/sarees" render={()=><Sarees/>}/>
        </Switch>
      </Router>
    </>
  );
}
export default App;