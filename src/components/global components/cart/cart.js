//Importing React component from React Library
import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Cart() {
	const userCartItems = useSelector((state) => state?.user?.userData?.cartItems);
	const [value, setValue] = useState(1);

	const decrementValue = () => {
		if (value === 1) {
			setValue(1);
		} else {

			setValue(value - 1);
		}
	};
	const incrementValue = () => {

		setValue(value + 1);
	};

	return (
		<div style={{height:'50vh',overflowY:'scroll'}} className="container  p-5">
			{userCartItems?.map(item => (
				<>
					<div  className="row mb-3">
						<div className="col-4">
							<img class="mb-3" src={item.image[0]} alt="image" style={{ width: "100px", height: "150px" }} />
						</div>
						<div className="col-8">
							<p>{item.productName}</p>
							<p>Rs {item.originalPrice}</p>
							<button className="btn btn-light" onClick={() => decrementValue()}>-</button>
							<button className="btn">{value}</button>
							<button className="btn btn-light" onClick={() => incrementValue()}>+</button>
							<a href="#" style={{ float: "right" }}>Remove</a>

						</div>
					</div>
				</>
			))}

		</div>

	)
}
export default Cart;