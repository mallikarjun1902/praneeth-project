//Importing React component from React Library
import React, { Component, useState } from "react";


//Importing Link from React Router Dom
import { Link } from "react-router-dom";
//Importing reusable Components 
import Input from "../../reusable components/input"
import Button from "../../reusable components/button"
//imorting axios
import axios from 'axios'
/**
 * @authors:"madhavi itikala and Spandana"
 * @returns {Html}
 * Creating a functional component and returns UI on the browser.
 * Implementation of Login Component using States.
 */
function Login() {
  const onSubmit = () => {
    const success = (data) => {
      console.log(data);
      if (data.length == 0) {
        setInvalidDetails(true);
        setError("Invalid credentials");
        // setSignupVisible(true)
      } else {
        setError("");
      }

      console.log(data);
    };
    const failure = (err) => {
      console.log(err);
    };

    const body = { userName, password };
    axios.post("http://localhost:2000/login", body).then((response) => {
      console.log(response)
    });
  console.log(body);
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupVisible, setSignupVisible] = useState(false);
  const [invalidDetails, setInvalidDetails] = useState(false);

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center">
            <div
              className="card p-3 shadow-lg"
              style={{ borderRadius: "10px", width: "600px" }}
            >
            
              <h1 className="heading text-center">Login to Suta</h1>
              <div className="form">
                <label
                  for="email"
                  className="col-12 font-weight-bold"
                  style={{ fontSize: "10px" }}
                >
                  Username or Email
                </label>
                <Input
                  className="form-control col-12"
                  id="email"
                  type="text"
                  handleChange={(child) => setUserName(child)}
                />
                <label
                  for="passsword"
                  className="col-12 font-weight-bold"
                  style={{ fontSize: "10px" }}
                >
                  Password
                </label>
                <Input
                  className="form-control col-12"
                  id="password"
                  type="password"
                  handleChange={(child) => setPassword(child)}
                />
                <Link to="/forget">
                  <p className="col-12 text-right">Forget Password?</p>
                </Link>

                <div className="d-flex flex-column align-items-center">
                  <Link to ="/landing">
                  <Button
                    className="btn btn-primary"
                    handleClick={() => onSubmit()}
                    value="Submit"
                  >Submit</Button>  
                </Link>
                </div>
                <p className="text-danger">{error}</p>
                {invalidDetails ? <a href="./signup">Create account</a> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
