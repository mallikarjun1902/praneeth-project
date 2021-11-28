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

export const loginUserAuth = (body,getData) => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:1109/login",body)
      .then((response) => {
        dispatch(userLoginData(response.data))
        getData(response.data)
        // console.log(response);
      })
      .catch((error) => console.log("error",error));
  };
};

