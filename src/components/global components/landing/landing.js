import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Landing() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1109/category")
      .then((response) => {
          setCategory(response.data)
        console.log(response);
      })
      .catch((error) => console.log(error));
  },[]);

  return (
    <>
      <div class="container d-flex">
        <div class="row">
            {console.log(category)}
          {category?.map((each) => ( 
            <div className="col-4">
              <div>
                <h1 style={{ fontSize: "20px", textAlign: "center" }}>
                  {each?.categoryName}
                </h1>
                <Link to="/sarees">
                  <img
                    src={each.image}
                    style={{
                      width: "20vw",
                      height: "40vh",
                      marginRight: "2px",
                    }}
                  />
                </Link>
              </div>
            </div>
  ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
