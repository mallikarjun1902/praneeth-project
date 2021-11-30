//Importing React component from React Library
import React, { Component, useState } from "react";

//Importing Link from React Router Dom
import { Link, useHistory } from "react-router-dom";
//Importing reusable Components
import Input from "../reusable components/input";
import Button from "../reusable components/button";
//imorting axios
import axios from "axios";
import { loginUserAuth } from "../../store/actions";
import { useDispatch } from "react-redux"; 

/**
 * @authors:"madhavi itikala and Spandana"
 * @returns {Html}
 * @description Creating a functional component and returns UI on the browser.
 * Implementation of Login Component using States.
 */

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupVisible, setSignupVisible] = useState(false);
  const [invalidDetails, setInvalidDetails] = useState(false);
  const onSubmit = () => {
    if (userName && password) {
      const body = { userName, password };
      dispatch(
        loginUserAuth(body, () => {
          // alert("logged in successfully")
          history.push("/dashboard");
        },()=>{
          setError("Please Enter valid username and password");
        })
      );
    } else {
      setError("Please Enter valid username and password");
    }
  };

  return (
    <>
      <div className="container d-flex flex-row mt-5 shadow-lg">
        <div className="col-6 w-75 p-5">
          <img
            style={{ height: "300px" }}
            src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/109/assets/suta_ladies.png?v=17381125549598482878"
          />
        </div>
      
        <div className="col-6 w-75 p-5">
          <h1 className="heading text-center">LOGIN</h1>
          {/* <p className={{fontSize:"5px"}}>Please enter your e-mail and password:</p> */}
          <div className="form">
            <p style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}>
              {error}
            </p>

            <Input
              className="form-control col-12"
              id="email"
              type="text"
              placeholder="Enter username"
              handleChange={(child) => setUserName(child)}
              onKeyPress={(key) => (key === "Enter" ? onSubmit() : "")}
            />

            <Input
              className="form-control col-12"
              id="password"
              type="password"
              placeholder="Enter password"
              handleChange={(child) => setPassword(child)}
              onKeyPress={(key) => (key === "Enter" ? onSubmit() : "")}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/forget">
                <p>Forgot Password?</p>
              </Link>
              {/* <Link to="/signup">Create account</Link> */}
            </div>

            <div className="d-flex flex-column align-items-center">
              <Button
                className="btn btn-dark"
                handleClick={() => onSubmit()}
                value="LOGIN"
              >
                Submit
              </Button>

              <p className="mt-3">
                Don't have an account?<Link to="/signup">Create one</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
