//Importing React Component from react library
import React, { useState,useEffect } from "react";
//import User Components from Local Files
// import controller from "../../controller/control";
// import PhoneInput from "react-phone-number-Input";
// import Login from "../login/login"
import Button from "../../reusable components/button"
import Input from "../../reusable components/input"
import {Link} from "react-router-dom"

/**
 * @author:"Madhavi itikala and Spandana"
 * @returns {Html}
 * Creating a functional component and returns UI on the browser.
 * Implementation of Signup Component having email validation and password validation.
 * Created Function for password validation , password validation required many functions to check conditions.  
 * We checked the Input string must contain Uppercase characters,Lowercase characters,Numbers and Special CHracters characters.
 * We checked the email is valid or invalid.Email should contain '@' symbol and so on...
 * Created Two page Registration in Single Page using States.
 */

export default function Signup() {
    const [userName,setUserName] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const [bday, setBirthday] = useState("");
    const [validatemsg, setValidateMsg] = useState("");
    const [validatemsg1, setValidateMsg1] = useState("");
    const [error, setError] = useState("");
    const [check, setCheck] = useState(false);
    const [buttonClick, setButton] = useState(false);
    const [signupVisible, setSignupVisible] = useState(true);
    const [visible, setVisible] = useState(false);
  
  
  const validateEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      setValidateMsg1("Valid Email");
      return true;
    } else {
      setValidateMsg1("Please enter a valid email");
      return false;
    }
  };
  const isUpper = (pswd) => {
    let format = /[A-Z]/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };
  const isLower = (pswd) => {
    let format = /[a-z]/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };

  const specialTest = (pswd) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };
  const isNumber = (pswd) => {
    let hasNumber = /\d/;
    if (hasNumber.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };

  const validate = (password) => {
    // let pswd=this.state.password
    let length = password.length;

    if (
      length >= 8 &&
      isUpper(password) &&
      isLower(password) &&
      specialTest(password) &&
      isNumber(password)
    ) {
      // console.log("Strong password")
      setValidateMsg("strong password");
      return true;
    } else {
      // console.log("Please enter a valid password")
      setValidateMsg("Please enter a valid password");
      return false;
    }
  };
  const submitDetails = async () => {
    setButton(true);

    if (validateEmail(email) && check) {
      const body = {
       
        userName,
        email,
        password,
        phoneNumber,
        bday,
      };

      let url = "http://localhost:2000/signup";

      const success = (data) => {
        
        console.log(data);
        if (data) {
         
          setError("User created successfully");
          setSignupVisible(false);
          

        }
        setError("");
      };
      const failure = (err) => {
        console.log("Error", err);
      };
     
      window.location.href = "/login";
      } 
  };



  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="card d-flex flex-column align-items-center p-3 shadow-lg">
         
          <h1 style={{ marginBottom: "30px" }}>Sign Up for Suta</h1>
              <Input
                type="text"
                placeholder="Enter firstname"
                value={firstName}
                handleChange={(child) => setFirstName(child)}
              />
               <Input
                type="text"
                placeholder="Enter lastName"
                value={lastName}
                handleChange={(child) => setLastName(child)}
              />
              <Input
                type="email"
                placeholder="Enter Email"
                value={email}
               
                handleChange={(child) => {
                  setEmail(child);
                  validateEmail(child);
                  
                }}
              />
              <p>{validatemsg1}</p>
              <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                handleChange={(child) => {
                  setPassword(child);
                  validate(child);
                }}
              />
              <p>{validatemsg}</p>
              <div style={{ width: "40rem" }} className="d-flex flex-row mt-3">
                <input type="checkbox" onClick={() => setCheck(!check)} />
                <p className="font-weight-bold" style={{ fontSize: "10px" }}>
                  By tapping Sign Up & Accept, you acknowledge that you have
                  read the Privacy Policy and agree to the Terms of Service.
                  We'll send you a message to verify this number. Messaging
                  rates may apply. Snapchatters can always capture or save your
                  messages, such as by taking a screenshot or using a camera. Be
                  mindful of what you Snap!
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center mt-3">
                  <Link to = "/login">
                  <Button value = "signUp" className="btn btn-primary" handleClick={()=>submitDetails()}></Button>  
                  </Link>
              </div>
                {buttonClick ? (
                  check ? (
                    ""
                  ) : (
                    <p style={{ color: "red" }}>
                      please accept terms and conditions
                    </p>
                  )
                ) : (
                  ""
                )}
                {buttonClick ? (
                  check ? (
                    <p style={{ color: "green" }}>User created sucessfully</p>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
        
        </div>
     
    </>
  );
 }
