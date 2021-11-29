import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, handleAddCartData,removeFromCart } from "../../store/actions";


function Saree1() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [msg, setMsg] = useState("");
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [productindex,setProductIndex]=useState("")

  let getAllValues = useSelector((state) => state?.product?.product);
  let userData = useSelector((state) => state?.user?.userData)
  const productId = window.location.pathname.split("/")[3]

  useEffect(() => {
    getAllValues = getAllValues.filter((p) => p._id == productId);
    checkProductExits()

  }, [])

  const checkProductExits=()=>{
    
    userData.cartItems.filter((e,index) => {
      if (e._id == productId){ 
      setIsAddToCart(true)
      setProductIndex(index)
      }
    })
  }



  const handleRemove = (index) => {
    dispatch(
      removeFromCart(index, () => {
        let newData = { ...userData };
        let filteredVal = newData.cartItems.filter((item, i) => i != index);
        newData.cartItems = filteredVal;
        dispatch(handleAddCartData(newData));
        checkProductExits()
      })
    );
  };

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
    console.log({ ...userData })
    let newCart = [...userData?.cartItems];
    let productVal = { ...getAllValues[0] }
    productVal.userRequiredQuantity = String(quantity)
    newCart.push(productVal);
    // console.log(newCart);
	let newAddedData={...userData}
	newAddedData.cartItems=newCart
    // userDate.cartItems=newCart
    dispatch(addToCart(newCart, () => {
      setMsg("Added to cart")
      dispatch(handleAddCartData(newAddedData))
      checkProductExits()
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
              className="btn btn-dark"
              onClick={() => isAddToCart?handleRemove(productindex):handleAddToCart()}
            >
              {isAddToCart ? ("Remove from cart") : ("Add to cart")}
            </button>
            <p style={{ color: "green" }}>{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Saree1;
