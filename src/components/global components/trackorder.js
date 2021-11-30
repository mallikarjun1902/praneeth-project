import React, { Component } from 'react';

/**
 * @description: displays the trackorder page for asking the details of the user.
 * @return html page
 */
class Trackorder extends Component {
	render() {
		return (
			<>
				<h1 style={{ textAlign: "center" }}>Track your order</h1>
				<div class="container d-flex flex-row align-items-center p-5">
					<div class="card  w-50 p-3 mr-5">
						<label>Order Number</label>
						<input type="text" id="orderNumber" class="form-control"></input>
						<label>Email</label>
						<input type="email" id="email" class="form-control"></input>
						<button type="button" class="btn btn-primary mt-3">Track</button>
					</div>
					<div class="d-flex flex-column">
						<p>|</p>
						<p>|</p>
						<p>OR</p>
						<p>|</p>
						<p>|</p>
					</div>
					<div class="card w-50 p-3 ml-5">
						<label>Track Number</label>
						<input type="email" id="email" class="form-control"></input>
						<button type="button" class="btn btn-primary mt-3">Track</button>
					</div>

				</div>
			</>
		)
	}
}
export default Trackorder;