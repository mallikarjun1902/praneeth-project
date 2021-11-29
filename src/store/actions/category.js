import axios from 'axios'
import * as types from "../type";


export const categoryDate=(data)=>({
    type: types.CATEGORY,
    payload: data
})

export const getAllCategoryList=()=>{
    return (dispatch, getState) => {
        const token=getState().user?.userDate?.token
        console.log(token)
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`
        }
        axios
          .get("http://localhost:1109/category",{headers:headers})
          .then((response) => {
            dispatch(categoryDate(response.data))
            console.log(response);
          })
          .catch((error) => console.log("error",error));
      };
}
export const postCategoryList=(body,gotData)=>{
  return (dispatch, getState) => {
      const token=getState().user?.userDate?.token
      console.log(token)
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
      axios
        .post("http://localhost:1109/category",body,{headers:headers})
        .then((response) => {
          gotData()
          console.log(response);
        })
        .catch((error) => console.log("error",error));
    };
}