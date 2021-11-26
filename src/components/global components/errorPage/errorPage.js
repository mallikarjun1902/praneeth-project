import React from "react";
import errorImg from "./error.png";
import {Link } from "react-router-dom"

const Errorpage = () => {
  return (
    <>
      <div className=" container row">
        <div className="col-4">
          <div>
            <h1 className="text-dark display-1 mt-4">401!</h1>
            <h4 className="mb-4">Please Authenticate!</h4>
            <p className="mb-5">
              Login or register to Get Started with SUTA
            </p>
            <Link
              className="btn btn-primary mb-5 waves-effect waves-light"
              to="/login"
            >
              <i className="mdi mdi-home"></i> Back to login
            </Link>
          </div>
        </div>
        <div className="col-lg-5">
          <img src={errorImg} alt="" className="img-fluid mx-auto d-block" />
        </div>
      </div>
    </>
  );
};

export default Errorpage;
