import React, { Component, useState } from "react";

function Forget() {
  const onSubmitPassword = () => {
    setPass(true);
    return true;

  };
  const [pass, setPass] = useState(false);
  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-3 p-5">
        <div className="card w-50 d-flex flex-column align-items-center p-5">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="New Password"
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Confirm Password"
          />
          <button className="btn btn-primary" onClick={() => onSubmitPassword()}>
            Submit
          </button>
          {setPass ? (
            <>
              <p>password changed successfully</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

    </>)
}

export default Forget;
