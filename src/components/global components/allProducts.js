import React, { Component, useEffect } from 'react';
import { getAllProductList } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * @description data is going to be fetched from the database.
 * And mapping the data with the help of IDs then displaying data with 
 * respectively on the dashboard for the particular category.
 */
function AllProducts() {
	// let url = "619dd0abc0447210a8aa9f62"
	const categoryId = window.location.pathname.split('/')[2]
	const productList = useSelector((state) => state?.product?.product)
	const userData = useSelector((state) => state?.user)
	const filteredProducts = productList.filter((a) => a.categoryId === categoryId)
	console.log("specfic product values", filteredProducts)
	const dispatch = useDispatch()

	useEffect(() => {
		if (userData.isLoggedIn) dispatch(getAllProductList())

	}, [])

	return (

		<div>
			<div className="container d-flex flex-column p-3">
				<div className="row justify-content-between">
					{filteredProducts.map((each) => (
						<div className=" col-lg-4"  >
							<div className="d-flex flex-column">
								<Link to={`/category/product/${each._id}`}>
									<img src={each.image[0]} style={{ width: "20vw", height: "40vh", marginRight: "2px" }} />
								</Link>
								<h1 style={{ fontSize: "20px", marginTop: "15px" }}>{each.productName}</h1>
								<p>{each.offerPrice}</p>
							</div>
						</div>
					))}

				</div>
			</div>
		</div>
	);
}


export default AllProducts;
