import * as type from "../type";

const initialState = {
  userData: {},
  isLoggedIn: false,
  adminDataVisible: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true,
      };
    case type.ADMIN_DATA_VISIBLE:
      return {
        ...state,
        adminDataVisible: action.payload,
      };
    case type.ADD_TO_CART:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}
