/**Import React component from React Library
 * Import useSelector from React Redux
 */
import React from 'react';
import { useSelector } from 'react-redux'

/**
 * @authors :"madhavi itikala and Spandana"
 * @returns {Html}
 * @description Creating a functional component and returns UI on the browser.
 * Implementation of Login Component using States.
 */

const Checkout = () => {
	const userAddress = useSelector((state) => state?.user?.userData?.address) || "Hyderabad"
	const userCartItems = useSelector((state) => state?.user?.userData?.cartItems);
	let subtotal = 0
	userCartItems.map((item) => {
		subtotal += Number(item.originalPrice)
	})
	console.log(subtotal)

	return (
		<div className="container d-flex flex-column align-items-center p-5 mt-3">
			<div className="row">
				<div className="col-6">
					{userAddress}
					<p>Shipping Address</p>
				</div>
				<div className="col-6">
					{userCartItems?.map(item => (<>
						<div className="row">
							<div className="col-3 mb-3">
								<img height="80" width="80" src={item.image} alt="image" />
							</div>
							<div className="d-flex flex-row justify-content-between col-9">
								<p>{item.productName}</p>
								<p>{item.originalPrice}</p>
							</div>
						</div>

					</>))}
					<hr />

					<div className="row ">
						<input type="text" placeholder="Apply coupon" />
						<button type="button" className="btn btn-dark ml-3">Apply</button>
					</div>
					<hr />
					<div className="row">
						<div className="col-6">
							<p>Subtotal</p>
						</div>
						<div className="col-6">
							<p>{subtotal}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<p>Shipping</p>
						</div>
						<div className="col-6">
							<p>Calculate at next step</p>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-6">
							<p>Total</p>
						</div>
						<div className="col-6">
							<p>{subtotal}</p>
						</div>
					</div>



				</div>
				<button type="button" className="btn btn-dark mt-3">Continue to shopping</button>
			</div>
		</div>
	);
}

export default Checkout;
