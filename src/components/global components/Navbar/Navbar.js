import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
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
        
        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHoLzcESdhA6Q/company-logo_200_200/0/1559797278843?e=2159024400&v=beta&t=CV3e8vd6TzwirT4uYCRmt4juKTqc7IqYSdkjkAV_odk" class="" height="100" width="100"/>
        <div class="d-flex flex-row">
        <form class="form-inline ml-3">
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <a href="/login">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
              style={{ height: "50px", width: "50px"  ,padding:"10px" }}
            />
          </a>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGsPHNDTRSXj2zKf1LQR3pvWEttfSMrN2yw&usqp=CAU"
            style={{ height: "50px", width: "50px" ,padding:"10px" }}
          />
          <a href="/cart">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dIdyyUTo69D6o_niUIZNG_IZ1GoCgsExybjLwrb7WqduxwgV5p7_PCnVZk2L-P8v-KE&usqp=CAU"
            style={{ height: "50px", width: "50px",padding:"10px" }}
          /></a>
          <a href="/trackorder">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR8264afNa5wCMsyZEqkmVEFmR45HmB5fkg&usqp=CAU"
            style={{ height: "50px", width: "50px",padding:"10px" }}
          /></a>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-sm  navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid d-flex flex-row justify-content-center justify-content-space-between">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/sarees">
                SAREES
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/blouses">
                BLOUSES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/menswear">
                MEN'S WEAR
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/collections">
                COLLECTIONS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/accessories">
                ACCESSORIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/loungewear">
                LOUNGE WEAR
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dresses">
                DRESSES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/homeliving">
                HOME & LIVING
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/bestseller">
                BEST SELLER
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
