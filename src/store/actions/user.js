import * as types from "../type";
import BaseController from "../../controllers";



export const fetchingUserSuccess = (data) => ({
  type: types.ALL_USER_DATA,
  payload: data
});

export const fetchingUserSignUpData = (data) => ({
  type: types.USER_SIGN_UP,
  payload: data
});
export const userLoginData = (data) => ({
  type: types.USER_LOGIN,
  payload: data
});


export const getAllUserDate = () => {
  return (dispatch, getState) => {
    // const access_token = getState().common.tokenInfo.access_token;
    // const agencyId = getState().common.tokenInfo.agency_id;
    let url='http://localhost:1109/users'
    
    const success = (data) => {
      dispatch(fetchingUserSuccess(data)); 
    };
    const failure = (err) => {
      console.log(err);
    };
    BaseController.sendRequest(url,"get",null,false, null, success, failure);
  };
};

