//Importing React component from React Library
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/global components/login/login"
import Signup from "./components/global components/signup/signup"
import Forget from "./components/global components/forget/forget"
import Landing from "./components/global components/landing/landing"
function App() {
  return (
    <>
      <Router>
      <Switch>
          <Route
           exact path="/" render={() => <Landing />} />

          <Route
           exact path="/signup" render={() => <Signup />} />

          <Route 
          exact path="/login" render={() => <Login />} />
          <Route 
          exact path="/forget" render={() => <Forget />} />
        </Switch>
      </Router>
    </>
  );
}
export default App;