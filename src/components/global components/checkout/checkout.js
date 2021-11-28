import React from 'react';
import {useSelector} from 'react-redux'


const Checkout = () => {
    const userAddress=useSelector((state)=>state?.user?.userData?.address)||"Hyderabad"
    return (
        <div className="container d-flex flex-column align-items-center">
            <div className = "row">
            <div className="card w-100 col-6">
                {userAddress}
                <p>Shipping Address</p>
            </div>
            <div className="card w-100 col-6">
                <p>Cart Items</p>
            </div>
            <button type="button" className="btn btn-dark">Continue to shopping</button>
        </div>
        </div>
    );
}

export default Checkout;
