import React,{useState} from 'react';
import axios from 'axios'

const Product = () => {
    const [productName,setProductName] =useState("")
    const [originalPrice,setOriginalPrice] =useState("")
    const [offerPrice,setOfferPrice] = useState("")
    const [categoryId,setCategoryId] = useState("")
    const [quantity,setQuantity] = useState("")
    const [image,setImage] = useState("")
    const body={ productName,
        originalPrice,
        offerPrice,
        categoryId,
        quantity,
        image}
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `JWT uyt`
          }
    axios.post("http://localhost:1109/products", body,{headers:headers}).then((response) => {
        console.log(response)
      });
    return (
        <div className="container p-5">
            <div className="card p-3">
                <h1 className="mb-3">Add a new Product</h1>
                <input type="text" className="form-control mb-3" placeholder="Enter Product Name" onChange={(event)=>setProductName(event.target.value)}/>
                <input type="number" className="form-control mb-3" placeholder="Enter Original Price" onChange={(event)=>setOriginalPrice(event.target.value)} />
                <input type="number" className="form-control mb-3" placeholder="Enter Offer Price" onChange={(event)=>setOfferPrice(event.target.value)}/>
                <select id="items" className="form-control" onChange={(event)=>setCategoryId(event.target.value)}>
                    <option value="item-1">Item 1</option>
                    <option value="item-2">Item 2</option>
                    <option value="item-3">Item 3</option>
                    <option value="item-4">Item 4</option>
                </select>
                <input type="file" className="mt-3" id="img" name="img" accept="image/*" onChange={(event)=>setImage(event.target.value)}/>
                <input type="number" className="form-control  mt-3 mb-3" placeholder="Enter Quantity" onChange={(event)=>setQuantity(event.target.value)}/>
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}

export default Product;
