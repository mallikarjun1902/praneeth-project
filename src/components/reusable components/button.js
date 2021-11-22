//Importing React component from React Library
import React from 'react';

/**
 * @author:"Akhilasai and spandana"
 * @param {*} props 
 * @returns {Html}
 * Creating Function Component with props passing as paramters and returns Html.
 */

function Button(props) {
  const { className, handleClick, value } = props;
  return (
    <button className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
