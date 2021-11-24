import axios from 'axios'
import * as types from "../type";


export const productData=(data)=>({
    type: types.PRODUCTS,
    payload: data
})

export const getAllProductList=()=>{
    return (dispatch, getState) => {
        const token=getState().user?.userDate?.token
        console.log(token)
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`
        }
        axios
          .get("http://localhost:1109/products",{headers:headers})
          .then((response) => {
            dispatch(productData(response.data))
            console.log(response);
          })
          .catch((error) => console.log("error",error));
      };
}