import * as type from "../type";
  
  const initialState = {
    product:[],
    
    
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case type.PRODUCTS:
        return {
          ...state,
          product:action.payload,
        };
      
      default:
        return state;
    }
  }
  