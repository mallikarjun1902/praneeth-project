import React,{useState}  from 'react';
import axios from 'axios'
import {useDispatch} from "react-redux"
import {getAllCategoryList} from "../../store/actions"


const Category = () => {
    const dispatch = useDispatch()
    const [category,setCategory] = useState("")
    const [image,setImage] = useState("")
    const body = {
        categoryName:category
        ,image
    }
   
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `JWT uyt`
    }
    const postData=()=>{
        console.log(body)
    axios.post("http://localhost:1109/category",body,{headers:headers}).then((response)=>{
        console.log(response)
        dispatch(getAllCategoryList())
    })}
    return (
        <div className="container p-5">
            <div className="card p-3">
            <h1>Add a new category</h1>
            <input type="text" className="form-control mb-3" placeholder="Enter category Name" onChange ={(event)=>setCategory(event.target.value)} />
            <input type="text" className="form-control mb-3" id="img" placeholder="Enter Image URL" name="img" onChange={(event)=>setImage(event.target.value)}/>
            <div>
            <button class="btn btn-primary mt-3" type = "submit" onClick = {()=>postData()}>Post</button>
            </div>  
            </div>          
        </div>
    );
}

export default Category;

