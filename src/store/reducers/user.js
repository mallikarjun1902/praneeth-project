import * as type from "../type";
  
  const initialState = {
    allUsers:[],
    userSignupDate:[],
    userLoginData:[],
    isLoggedIn:false
    
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case type.USER_LOGIN:
        return {
          ...state,
          userLoginData:action.payload
        };
      case type.USER_SIGN_UP:
        return {
          ...state,
          userSignupDate:action.payload
        };
      case type.ALL_USER_DATA:
        return {
          ...state,
          allUsers: action.payload,
          isLoggedIn: true,
        };
      
  
      default:
        return state;
    }
  }
  