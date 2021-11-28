import React from "react";
const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="form-control mt-3 mb-3"
        onChange={(event) => props.handleChange(event.target.value)}
        value={props.value}
        onKeyPress={(e) => props.onKeyPress(e.key)}
      />
    </>
  );
};
export default Input;
