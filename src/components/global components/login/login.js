//Importing React component from React Library
import React, { Component, useState } from "react";


//Importing Link from React Router Dom
import { Link,useHistory } from "react-router-dom";
//Importing reusable Components 
import Input from "../../reusable components/input"
import Button from "../../reusable components/button"
//imorting axios
import axios from 'axios'
import {loginUserAuth} from "../../../store/actions"
import {useDispatch} from "react-redux"
/**
 * @authors:"madhavi itikala and Spandana"
 * @returns {Html}
 * Creating a functional component and returns UI on the browser.
 * Implementation of Login Component using States.
 */
function Login() {
  const dispatch=useDispatch()
  const history=useHistory()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupVisible, setSignupVisible] = useState(false);
  const [invalidDetails, setInvalidDetails] = useState(false);
  const onSubmit = () => {
    
    const body = { userName, password };
    dispatch(loginUserAuth(body,()=>history.push('/')
    ))
    
    // axios.post("http://localhost:1109/login", body).then((response) => {
    //   console.log(response)
      
    //   // alert("logged in successfully")
    //   // window.location.href='/'
    //   }).catch(error => setInvalidDetails(true))

  };
  

  return (
    <>
      <div className="container d-flex flex-row mt-5 shadow-lg">
          <div className="col-6 w-75 p-5">
          <img style={{height:"300px"}} src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/109/assets/suta_ladies.png?v=17381125549598482878"/>
          </div>
            
            <div className="col-6 w-75 p-5">
              <h1 className="heading text-center">LOGIN</h1>
              <p className={{fontSize:"5px"}}>Please enter your e-mail and password:</p>
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
                  <p className="col-12 text-right">Forgot Password?</p>
                </Link>

                <div className="d-flex flex-column align-items-center">
                  
                  <Button
                    className="btn btn-dark"
                    handleClick={() => onSubmit()}
                    value="LOGIN"
                  >Submit</Button> 
                  <Link to="/signup">  
               <p className="mt-3">Don't have an account? Create one</p>
               </Link>
                </div>
                <p className="text-danger">{error}</p>
                {invalidDetails ? <a href="/signup">Create account</a> : ""}
               
              </div>
            </div>
          </div>

    </>
  );
}

export default Login;
