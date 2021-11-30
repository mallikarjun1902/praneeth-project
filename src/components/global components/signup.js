//Importing React Component from react library
import React, { useState, useEffect } from "react";
//import User Components from Local Files
import PhoneInput from "react-phone-number-input";
import Button from "../reusable components/button";
import Input from "../reusable components/input";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import mainUrl from "../../config"


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
  const history = useHistory();
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [buttonClick, setButton] = useState(false);
  const [signupVisible, setSignupVisible] = useState(true);
  const [role, setRole] = useState('');

  const handleValidateEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      setValidateEmail("");
      return true;
    } else {
      setValidateEmail("Please enter a valid email");
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

  const handleValidatePassword = (password) => {
    let length = password.length;

    if (
      length >= 8 &&
      isUpper(password) &&
      isLower(password) &&
      specialTest(password) &&
      isNumber(password)
    ) {
      setValidatePassword("");
      return true;
    } else {
      setValidatePassword("Please enter a valid password");
      return false;
    }
  };
  const submitDetails = async () => {
    setButton(true);

    if (
      handleValidateEmail(email) &&
      check &&
      handleValidatePassword(password) && role
    ) {
      const body = {
        userName,
        email,
        password,
        phoneNumber,
        gender,
        address,
        role
      };

      let url = `${mainUrl}/signup`;

      axios
        .post(url, body)
        .then((response) => {
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container d-flex flex-column flex-md-row align-items-center p-5 mt-3 shadow-lg">
        <div className="col-6 w-75 p-5">
          <img
          
            style={{ height: "300px" }}
            src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/109/assets/suta_ladies.png?v=17381125549598482878"
          />
        </div>
        <div className="col-6 w-75 p-3">
          <h1 class="mb-3">REGISTER</h1>
          
          <select
          id="items"
          placeholder="Enter"
          className="form-control mt-3 mb-3"
          onChange={(event) => setRole(event.target.value)}
        >
          {/* {category?.map((val) => (
            <option value={val._id}>{val.categoryName}</option>
          ))} */}
            <option value="" disabled selected>Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>

        </select>
        {buttonClick&&!role ? (
            <p style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}>
              Please select a role
            </p>
          ) : (
            ""
          )}
          <Input
            type="text"
            placeholder="Enter Name"
            value={userName}
            handleChange={(child) => setuserName(child)}
            onKeyPress={(key)=>console.log()}
          />
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            handleChange={(child) => {
              setEmail(child);
              handleValidateEmail(child);
            }}
            onKeyPress={(key)=>console.log()}

          />
          {validateEmail ? (
            <p style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}>
              {validateEmail}
            </p>
          ) : (
            ""
          )}
          <Input
            type="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            value={password}
            handleChange={(child) => {
              setPassword(child);
              handleValidatePassword(child);
            }}
            onKeyPress={(key)=>console.log()}

          />
          {validatePassword ? (
            <p style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}>
              {validatePassword}
            </p>
          ) : (
            ""
          )}

          <PhoneInput
            className="form-control mb-3 mt-3"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={() => setGender("female")}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Female
            </label>
            <input
              class="form-check-input ml-1"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={() => setGender("male")}
            />
            <label class="form-check-label ml-3" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <Input
            type="text"
            placeholder="Enter address"
            value={address}
            handleChange={(child) => setAddress(child)}
            onKeyPress={(key)=>console.log()}

          />
          <div style={{ width: "40rem" }} className="d-flex flex-row mt-3">
            <input
              type="checkbox"
              onClick={() => setCheck(!check)}
              style={{ marginRight: "10px" }}
            />
            <p
              className="font-weight-bold"
              style={{ fontSize: "10px", color: buttonClick?check?"black": "red" : "" }}
            >
              Accept Terms and Conditions
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center mt-3">
            <Button
              value="CREATE MY ACCOUNT"
              className="btn btn-dark"
              handleClick={() => submitDetails()}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
