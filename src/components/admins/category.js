import React,{useState}  from 'react';
import axios from 'axios'

const Category = () => {
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
    axios.post("http://localhost:1109/products",body,{headers:headers}).then((response)=>{
        console.log(response)
    })}
    return (
        <div className="container p-5">
            <div className="card p-3">
            <h1>Add a new category</h1>
            <input type="text" className="form-control mb-3" placeholder="Enter category Name" onChange ={(event)=>setCategory(event.target.value)} />
            <input type="file" id="img" name="img" accept="image/*" onChange = {(event)=>setImage(event.target.value)}></input>
            <div>
            <button class="btn btn-primary mt-3" type = "submit" onClick = {()=>postData()}>Post</button>
            </div>  
            </div>          
        </div>
    );
}

export default Category;

