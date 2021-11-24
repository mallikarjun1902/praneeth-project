import * as types from "../type";
// import BaseController from "../../controllers";
import axios from 'axios'




export const userLoginData = (data) => ({
  type: types.LOGIN,
  payload: data
});


export const loginUserAuth = (body,getData) => {
  return (dispatch, getState) => {
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': 'JWT fefege...'
    // }
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

