import * as types from "../type";
import axios from 'axios'
import url from "../../config"

/**
 * @description getting all api calls regarding the user 
 * like login,add to cart,login authentication,remove from the cart.
 * 
 */
export const userLoginData = (data) => ({
  type: types.LOGIN,
  payload: data
});
export const handleAdminDataVisible = (data) => ({
  type: types.ADMIN_DATA_VISIBLE,
  payload: data
});

export const handleAddCartData = (data) => ({
  type: types.ADD_TO_CART,
  payload: data
});

export const handleRemoveFromCart = (data) => ({
  type: types.ADD_TO_CART,
  payload: data
});

export const loginUserAuth = (body,getData,failure) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/login`,body)
      .then((response) => {
        dispatch(userLoginData(response.data))
        getData(response.data)
        // console.log(response);
      })
      .catch((error) => {
        failure()
        console.log("error",error)
      });
  };
};


export const addToCart = (body,getData) => {
  return (dispatch, getState) => {
    console.log(body)
    const userId=getState().user?.userData?._id
    console.log(userId)
    axios
      .post(`${url}/${userId}/add_to_cart`,body)
      .then((response) => {
        // dispatch(handleAddCartData(body))
        console.log(response);
        getData(response.data)
      })
      .catch((error) => console.log("error",error));
  };
};


export const removeFromCart = (index,getData) => {
  return (dispatch, getState) => {
    const userId=getState().user?.userData?._id

    console.log(userId)
    
    axios
      .delete(`${url}/${userId}/add_to_cart/${index}`)
      .then((response) => {
        // dispatch(userLoginData(response.data))
        console.log(response);
        getData(response.data)
      })
      .catch((error) => console.log("error",error));
  };
};

