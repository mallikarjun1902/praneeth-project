import * as type from "../type";
  
  const initialState = {
    category:[],
    
    
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case type.CATEGORY:
        return {
          ...state,
          category:action.payload,
        };
      
      default:
        return state;
    }
  }
  