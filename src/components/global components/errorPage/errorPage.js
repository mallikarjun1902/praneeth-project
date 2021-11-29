import React,{ Component,useEffect }  from "react";
import {Link } from "react-router-dom"
import {getAllProductList} from '../../../store/actions'
import {useDispatch,useSelector} from 'react-redux'
function Errorpage () {
  const dispatch=useDispatch()
  const productList = useSelector((state) =>state?.product?.product)
  console.log(productList.length) 
  useEffect(()=>{
    dispatch(getAllProductList())
    
},[])

  return (
    <>
      <div>

<div className="container d-flex flex-column p-3">
    <div className="row justify-content-between">
        {productList.map((each,index)=>{
          if(index<12){
          return (
          
            <div className=" col-lg-4"  >
            <div className = "d-flex flex-column">
            <Link to={'/'}>
        <img src = {each.image[0]} style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>
        </Link>
       <h1 style = {{fontSize:"20px",marginTop:"15px"}}>{each.productName}</h1>
       <p>{each.offerPrice}</p>
        </div>
        </div> 
)
          }
          
         })}
        
    </div>
</div>
    </div>
    </>
  );
};

export default Errorpage;
