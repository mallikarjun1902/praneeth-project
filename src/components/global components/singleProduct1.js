import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, handleAddCartData,removeFromCart } from "../../store/actions";

/**
 * @description It displays the product details like star rating, productname, price ,MRP
 * and adding to the cart facitities.
 * It displays the details according to the product respectively.
 */
function Saree1() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [msg, setMsg] = useState("");
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [productindex,setProductIndex]=useState("")

  let getAllProducts = useSelector((state) => state?.product?.product);
  let userData = useSelector((state) => state?.user?.userData)
  const productId = window.location.pathname.split("/")[3]
  let productDetails = getAllProducts.filter((p) => p._id == productId);

  useEffect(() => {
    checkProductExits(userData?.cartItems)
  },[])
   
   const checkProductExits=(products)=>{
    console.log(products.length)
     if(products.length){
    products?.filter((e,index) => {
       if (e._id == productId){ 
         setIsAddToCart(true)
         setProductIndex(index)
        }
        else{
          setIsAddToCart(false)
         setProductIndex('')
        }
      })
    }else{
      setIsAddToCart(false)
      setProductIndex('')
    }
   }
    
    const handleRemove = (index) => {
    dispatch(
      removeFromCart(index, () => {
        let newData = { ...userData };
        let filteredVal = newData.cartItems.filter((item, i) => i != index);
        newData.cartItems = filteredVal;
        checkProductExits(filteredVal)
        dispatch(handleAddCartData(newData));
        setMsg("")
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
    let newCart = [...userData?.cartItems];
    let productVal = { ...productDetails[0] }
    productVal.userRequiredQuantity = String(quantity)
    newCart.push(productVal);
	let newAddedData={...userData}
	newAddedData.cartItems=newCart
    dispatch(addToCart(newCart, () => {
      setMsg("Added to cart")
      dispatch(handleAddCartData(newAddedData))
      checkProductExits(newCart)

    }));
  };
console.log(isAddToCart)
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-7 mb-2 overflow-scroll" style={{ minHeight: "50vh" }}>
            {productDetails[0]?.image?.map((img) => (
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
              {productDetails[0]?.productName}
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
              MRP: RS. {productDetails[0]?.originalPrice}
            </h1>
            <h1 style={{ fontSize: "15px" }}>
              OFFER PRICE: RS. {productDetails[0]?.offerPrice}
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
              className={isAddToCart?"btn btn-dark":"btn btn-primary"}
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
