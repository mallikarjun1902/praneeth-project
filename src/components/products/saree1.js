import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,handleAddCartData } from "../../store/actions";

function Saree1() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const productId = window.location.pathname.split("/")[3];
  let getAllValues = useSelector((state) => state?.product?.product);
  let userData = useSelector((state) => state?.user?.userData);

  getAllValues = getAllValues.filter((p) => p._id == productId);
  console.log("dsfdsf", getAllValues);
  const [quantity, setQuantity] = useState(1);

  const decrementValue = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const incrementValue = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    let newCart = [...userData?.cartItems];
	let productVal={...getAllValues[0]}
	productVal.userRequiredQuantity=String(quantity)
    newCart.push(productVal);
    console.log(newCart);
	let newAddedData={...userData}
	newAddedData.cartItems=newCart
    // userDate.cartItems=newCart
    dispatch(addToCart(newCart, () => {
		setMsg("Added to cart")
		dispatch(handleAddCartData(newAddedData))
	}));
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
              {getAllValues[0]?.productName}
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
            <h1
              style={{ fontSize: "15px", textDecorationLine: "line-through" }}
            >
              MRP: RS. {getAllValues[0]?.originalPrice}
            </h1>
            <h1 style={{ fontSize: "15px" }}>
              OFFER PRICE: RS. {getAllValues[0]?.offerPrice}
            </h1>
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
              <button className="btn btn-light" onClick={() => decrementValue()}>-</button>
              <button className="btn">{quantity}</button>
              <button className="btn btn-light" onClick={() => incrementValue()}>+</button>
            </div>

            <button
              style={{ marginTop: "20px", width: "-webkit-fill-available" }}
              className="btn btn-primary"
              onClick={() => handleAddToCart()}
            >
              Add to cart
            </button>
			<p style={{color:"green"}}>{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Saree1;
