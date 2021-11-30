import axios from 'axios'
import * as types from "../type";
import url from "../../config"


/**
 * @description getting all the 
 * @param {String} data 
 * @return json file  
 */
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
          .get(`${url}/category`,{headers:headers})
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
        .post(`${url}/category`,body,{headers:headers})
        .then((response) => {
          gotData()
          console.log(response);
        })
        .catch((error) => console.log("error",error));
    };
}