import React,{useState}  from 'react';
import axios from 'axios'
import {useDispatch} from "react-redux"
import {getAllCategoryList,postCategoryList} from "../../store/actions"

/**
 * 
 */

const Category = () => {
    const dispatch = useDispatch()
    const [category,setCategory] = useState("")
    const [image,setImage] = useState("")
    const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
    const body = {
        categoryName:category
        ,image
    }
   
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `JWT uyt`
    }
    const postData=()=>{
        if(category && image){
            console.log(body)
      dispatch(postCategoryList(body,()=>{
        setSuccessMsg("Category Added Successfully")
            dispatch(getAllCategoryList())
      }))}
      else{
                setError("Please fill all fields")
            }
    // axios.post("http://localhost:1109/category",body,{headers:headers}).then((response)=>{
    //     console.log(response)
    //     setSuccessMsg("Category Added Successfully")
    //     dispatch(getAllCategoryList())
    // })
    //     }
        
}
    return (
        <div className="container p-5">
            <div className="card p-3">
            
            <h1>Add a new category</h1>
            <p style={{ fontSize: "12px", fontWeight: "bold", color: error?"red":"green" }}>{error?error:successMsg}</p>

            <input type="text" className="form-control mb-3" placeholder="Enter category Name" onChange ={(event)=>setCategory(event.target.value)} />
            <input type="text" className="form-control mb-3" id="img" placeholder="Enter Image URL" name="img" onChange={(event)=>setImage(event.target.value)}/>
            
            <button class="btn btn-primary mt-3" type = "submit" onClick = {()=>postData()}>Add</button>
            
            </div>          
        </div>
    );
}

export default Category;

