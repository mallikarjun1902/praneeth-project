import * as types from "../type";
import axios from 'axios'




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
      .post("http://localhost:1109/login",body)
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
      .post(`http://localhost:1109/${userId}/add_to_cart`,body)
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
      .delete(`http://localhost:1109/${userId}/add_to_cart/${index}`)
      .then((response) => {
        // dispatch(userLoginData(response.data))
        console.log(response);
        getData(response.data)
      })
      .catch((error) => console.log("error",error));
  };
};

