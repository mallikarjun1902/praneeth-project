import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getAllCategoryList } from "../../../store/actions"
import { useDispatch, useSelector } from "react-redux"
function Landing() {
	const categoryList = useSelector((state) => state?.category?.category)

	// const data = categoryList.data
	// console.log(data)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllCategoryList())

	}, []);
	return (
		<>
			<div class="container d-flex">
				<div class="row">

					{categoryList?.map((each) => (
						<div className="col-4">
							<div>
								<h1 style={{ fontSize: "20px", textAlign: "center" }}>
									{each?.categoryName}
								</h1>
								<Link to={`/category/${each._id}`}>
									<img
										src={each.image}
										style={{
											width: "20vw",
											height: "40vh",
											marginRight: "2px",
										}}
									/>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}


export default Landing;
