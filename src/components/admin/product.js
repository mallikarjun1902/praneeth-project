import React, { useState } from "react";
import axios from "axios";
import { getAllProductList } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import url from "../../config"

/**
 * @description :"It uses the states and fetching the product data from the backend."
 * We are giving access to the admin to maintain the data and perform operations on it.
 */
const Product = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state?.category?.category);
  const [productName, setProductName] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = () => {
    if (
      productName &&
      originalPrice &&
      offerPrice &&
      categoryId &&
      quantity &&
      image
    ) {
      const body = {
        productName,
        originalPrice,
        offerPrice,
        categoryId,
        quantity,
        image,
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization: `JWT uyt`,
      };
      axios
        .post(`${url}/products`, body, { headers: headers })
        .then((response) => {
          setSuccessMsg("Product added Successfully");
          console.log(response);
          dispatch(getAllProductList());
        })
        .catch((err) => {
          setError("Please fill all the fields");
          console.log(err);
        });
    }else{
      setError("Please fill all the fields");

    }
  };

  return (
    <div className="container p-5">
      <div className="card p-3">
        <h1 className="mb-3">Add a new Product</h1>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: error ? "red" : "green",
          }}
        >
          {error ? error : successMsg}
        </p>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Product Name"
          onChange={(event) => setProductName(event.target.value)}
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Original Price"
          onChange={(event) => setOriginalPrice(event.target.value)}
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Offer Price"
          onChange={(event) => setOfferPrice(event.target.value)}
        />
        <select
          id="items"
          className="form-control  mb-3"
          onChange={(event) => setCategoryId(event.target.value)}
        >
          {category?.map((val) => (
            <option value={val._id}>{val.categoryName}</option>
          ))}
        </select>
        <input
          type="text"
          className="form-control mb-3"
          id="img"
          placeholder="Enter Image URL"
          name="img"
          onChange={(event) => setImage(event.target.value)}
        />
        <input
          type="number"
          className="form-control  mt-3 mb-3"
          placeholder="Enter Quantity"
          onChange={(event) => setQuantity(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
