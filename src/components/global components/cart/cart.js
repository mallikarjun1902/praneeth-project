//Importing React component from React Library
import React, { Component, useState } from "react";
import axios from "axios";
function Cart() {
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
		<div class="container  p-5">
			<div className="row">
				<div className="col-4">
					<img class="mb-3" src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chand-sitare-blouse-528053_800x.jpg?v=1637244810" style={{ width: "100px", height: "100px" }} />
				</div>
				<div className="col-8">
					<p>MERRY GO ROUND</p>
					<p>Rs.2,300</p>
					<button  className="btn btn-light" onClick={() => decrementValue()}>-</button>
					<button className="btn">{value}</button>
					<button  className="btn btn-light" onClick={() => incrementValue()}>+</button>
					<a href="#" style={{float:"right"}}>Remove</a>
					
				</div>
			</div>
			</div>

	)
}
export default Cart;