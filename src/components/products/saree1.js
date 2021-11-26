import React, { useState } from "react";
import { useSelector } from "react-redux";

function Saree1() {
	const productId = window.location.pathname.split("/")[3];
	let getAllValues = useSelector((state) => state?.product?.product);
	getAllValues = getAllValues.filter((p) => p._id == productId);
	console.log("dsfdsf", getAllValues);
	const [value, setValue] = useState(1);

	const decrementValue = () => {
		if (value === 1) {
			// this.setState({value:1})
			setValue(1);
		} else {
			// this.setState({value:value-1})
			setValue(value - 1);
		}
	};
	const incrementValue = () => {
		// this.setState({value:value+1})
		setValue(value + 1);
	};

	return (
		<>
			<div class="container">
				<div class="row">
					<div class="col-7 mb-2 overflow-scroll" style={{ minHeight: "50vh" }}>
						{getAllValues[0]?.image?.map((img) => (
							<>
								<img
									src={img}
									style={{ height: "500px", width: "500px", padding: "10px" }}
								/>
							</>
						))}
					</div>
					<div class="col-5">
						<h1 style={{ fontSize: "25px", paddingTop: "10px" }}>
							{getAllValues[0].productName}
						</h1>
						<div>
							<span
								class="fa fa-star checked"
								style={{ color: "orange" }}
							></span>
							<span
								class="fa fa-star checked"
								style={{ color: "orange" }}
							></span>
							<span
								class="fa fa-star checked"
								style={{ color: "orange" }}
							></span>
							<span class="fa fa-star"></span>
							<span class="fa fa-star"></span>
						</div>
						<p>SKU: SUTAWS882</p>
						<h1 style={{ fontSize: "15px", textDecorationLine: "line-through" }}>MRP: RS. {getAllValues[0].originalPrice}</h1>
						<h1 style={{ fontSize: "15px" }}>OFFER PRICE: RS. {getAllValues[0].offerPrice}</h1>
						<p>Price inclusive of taxes</p>
						<p>Or 3 interest-free payments of ₹933 with </p>
						<div
							class="container d-flex"
							style={{
								borderRadius: "10px",
								border: "0px solid #e7e7e7",
								whiteSpace: "nowrap",
								height: "30px",
							}}
						>
							<button onClick={() => decrementValue()}>-</button>
							<button>{value}</button>
							<button onClick={() => incrementValue()}>+</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Saree1;
