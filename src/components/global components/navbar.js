import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoryList,
  handleAdminDataVisible,
} from "../../store/actions";
import Cart from "./cart";
import Checkout from "./checkout";
/**
 * @description It displays the navbar with all kinds of categories which are present in site.
 * @returns Navbar
 */
const NavBar = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state?.category?.category);
  const userData = useSelector((state) => state?.user);
  const userRole = useSelector((state) => state?.user?.userData?.role);


  useEffect(() => {
    if (userData.isLoggedIn) dispatch(getAllCategoryList());
  }, []);

  console.log("userRole----userRole", userRole);

  const [cartvisible, setCartVisible] = useState(false);
  const[logout,setLogout] = useState(false);
  return (
    <>
      <div class="topnav d-flex flex-row justify-content-between align-items-center">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            INR
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                USD
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                CAD
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                EUR
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                GBP
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                SGD
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                LKR
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                MYR
              </a>
            </li>
          </ul>
        </div>
        <Link to="/dashboard">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQHoLzcESdhA6Q/company-logo_200_200/0/1559797278843?e=2159024400&v=beta&t=CV3e8vd6TzwirT4uYCRmt4juKTqc7IqYSdkjkAV_odk"
            class=""
            height="100"
            width="100"
          />
        </Link>
        <div class="d-flex flex-row">
          <form class="form-inline ml-3">
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          {userData.isLoggedIn?(<>
         
            <img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png" onClick = {()=>window.location.href='/'} style={{width:"40px",height:"40px"}}/>
            
         
          </>):
          (
          <> 
           <Link to="/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
              style={{ height: "50px", width: "50px", padding: "10px" }}
            />
          </Link></>)}
        

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGsPHNDTRSXj2zKf1LQR3pvWEttfSMrN2yw&usqp=CAU"
            style={{ height: "50px", width: "50px", padding: "10px" }}
          />

          
          <button
            type="button"
            class="btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dIdyyUTo69D6o_niUIZNG_IZ1GoCgsExybjLwrb7WqduxwgV5p7_PCnVZk2L-P8v-KE&usqp=CAU"
            style={{ height: "30px", width: "30px" }}
          />
          </button>

          <Link to="/trackorder">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR8264afNa5wCMsyZEqkmVEFmR45HmB5fkg&usqp=CAU"
              style={{ height: "50px", width: "50px", padding: "10px" }}
            />
          </Link>

          {userRole === "admin" ? (
            userData.adminDataVisible ? (
              <a
                style={{
                  cursor: "pointer",
                  alignSelf: "center",  
                  color: "blue",
                }}
                onClick={() => dispatch(handleAdminDataVisible(false))}
              >
                View Site
              </a>
            ) : (
              <a
                style={{
                  cursor: "pointer",
                  alignSelf: "center",
                  color: "blue",
                }}
                onClick={() => dispatch(handleAdminDataVisible(true))}
              >
                ADMIN
              </a>
            )
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                CART
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Cart />
            </div>
            <div class="modal-footer d-flex flex-column">
              <p>Add Order Note</p>
              <p>Shipping calculated at checkout</p>
              <Link to="/checkout">
                <button type="button" class="btn btn-dark">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-sm  navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid d-flex flex-row justify-content-center justify-content-space-between">
          <ul
            class="navbar-nav"
            style={{ display: "-webkit-box", overflow: "auto" }}
          >
            {userData.adminDataVisible ? (
              <>
             
                <li class="nav-item">
                  <Link class="nav-link" to="/add/product">
                    PRODUCTS
                  </Link>
                </li>{" "}
                <li class="nav-item">
                  <Link class="nav-link" to="/add/category">
                    CATEGORY
                  </Link>
                </li>
              </>
            ) : (
              categoryList?.map((each) => (
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to={`/category/${each._id}`}
                    style={{ textTransform: "uppercase" }}
                  >
                    {each.categoryName}
                  </Link>
                </li>
              ))
            )}
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/about"
                style={{ textTransform: "uppercase" }}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
