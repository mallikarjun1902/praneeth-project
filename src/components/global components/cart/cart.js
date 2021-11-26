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
			<div className="card">
			<div class=" row p-5 ">


				<div className="col-4">
					<img class="mb-3" src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chand-sitare-blouse-528053_800x.jpg?v=1637244810" style={{ width: "190px", height: "160px" }} />
				</div>
				<div className="col-6 p-5">
					<p>MERRY GO ROUND</p>
					<p>Rs.2,300</p>
					<button style={{height:"40px", width:"60px"}} onClick={() => decrementValue()}>-</button>
					<button style={{height:"40px", width:"100px"}}>{value}</button>
					<button style={{height:"40px", width:"60px"}} onClick={() => incrementValue()}>+</button>
					<a href="#" style={{float:"right"}}>Remove</a>

				</div>

				<div className="col-4">
				<img class="mb-3" src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chand-sitare-blouse-528053_800x.jpg?v=1637244810" style={{ width: "190px", height: "160px" }} />
				</div>
				<div className="col-6 p-5">
					<p>MERRY GO ROUND</p>
					<p>Rs.2,300</p>
					<button style={{height:"40px", width:"60px"}} onClick={() => decrementValue()}>-</button>
					<button style={{height:"40px", width:"100px"}}>{value}</button>
					<button style={{height:"40px", width:"60px"}} onClick={() => incrementValue()}>+</button>
					<a href="#" style={{float:"right"}}>Remove</a>
				</div>

				<div className="col-4">
				<img class="mb-3" src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chand-sitare-blouse-528053_800x.jpg?v=1637244810" style={{ width: "190px", height: "160px" }} />
				</div>
				<div className="col-6 p-5" >
					<p>MERRY GO ROUND</p>
					<p>Rs.2,300</p>
					<button style={{height:"40px", width:"60px"}} onClick={() => decrementValue()}>-</button>
					<button style={{height:"40px", width:"100px"}}>{value}</button>
					<button style={{height:"40px", width:"60px"}} onClick={() => incrementValue()}>+</button>
					<a href="#" style={{float:"right"}}>Remove</a>
				</div>

				<div class="justify-content-end" >
					<p>Add Order Note</p>
					<p>Shipping calculated at checkout</p>
					<button class="btn btn-primary" style={{ width: "200px", height: "50px", float: "right" }}>CHECKOUT: Rs.1,900</button>
				</div>
			</div>
			</div>

		</div>

	)
}
export default Cart;