/**Import React component from React Library
 * Import useDispatch and useSelector from react redux
 * Import Axios from axios
 * Import local functions from local files
*/

import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  removeFromCart,
  handleAddCartData,
  addToCart,
} from "../../../store/actions";
import produce from "immer";

/**
 * @authors:"madhavi itikala and Spandana"
 * @returns {Html}
 * Creating a functional component and returns UI on the browser.
 * Implementation of Cart Component using States.
 * This Cart Component describes about cart Items i.e we can add items into the cart and then we able to see price of each item  and Total amount of items.
 */

function Cart() {
  const dispatch = useDispatch();
  const userCartItems = useSelector(
    (state) => state?.user?.userData?.cartItems
  );
  const userData = useSelector((state) => state?.user?.userData);

  //   const [value1, setValue] = useState(1);

  const decrementValue = (value, index) => {
	let val = Number(value);
    const newUserData = produce(userData, (draft) => {
      draft.cartItems[index].userRequiredQuantity = String(val - 1);
    });
    dispatch(
      addToCart(newUserData.cartItems, () => {
        dispatch(handleAddCartData(newUserData));
      })
    );
  };
  const incrementValue = (value, index) => {
    let val = Number(value);
    const newUserData = produce(userData, (draft) => {
      draft.cartItems[index].userRequiredQuantity = String(val + 1);
    });
    dispatch(
      addToCart(newUserData.cartItems, () => {
        dispatch(handleAddCartData(newUserData));
      })
    );
  };

  const handleRemove = (index) => {
    dispatch(
      removeFromCart(index, () => {
        let newData = { ...userData };
        let filteredVal = newData.cartItems.filter((item, i) => i != index);
        newData.cartItems = filteredVal;
        dispatch(handleAddCartData(newData));
      })
    );
  };

  return (
    <div
      style={{ height: "50vh", overflowY: "scroll" }}
      className="container  p-5"
    >
      {userCartItems?.map((item, index) => (
        <>
          <div className="row mb-3">
            <div className="col-4">
              <img
                class="mb-3"
                src={item.image[0]}
                alt="image"
                style={{ width: "100px", height: "150px" }}
              />
            </div>
            <div className="col-8">
              <p>{item.productName}</p>
              <p>Rs {item.originalPrice}</p>
              <button disabled={item.userRequiredQuantity==1}
                className="btn btn-light"
                onClick={() => decrementValue(item.userRequiredQuantity, index)}
              >
                -
              </button>
              <button className="btn">{item.userRequiredQuantity}</button>
              <button
                className="btn btn-light"
                onClick={() => incrementValue(item.userRequiredQuantity, index)}
              >
                +
              </button>
              <p
                onClick={() => handleRemove(index)}
                style={{ float: "right", color: "red", cursor: "pointer" }}
              >
                Remove
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
export default Cart;
