import React from 'react';

const NavBar = () => {
  return (
    <>
      <div class="topnav d-flex flex-row justify-content-center">
      
        <img src="data:image/png;base64,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" class="center" height="100" width="100" />
          <div class="row justify-content-end">

          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          
          <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" style={{ height: "50px", width: "50px" }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGsPHNDTRSXj2zKf1LQR3pvWEttfSMrN2yw&usqp=CAU" style={{ height: "40px", width: "40px" }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dIdyyUTo69D6o_niUIZNG_IZ1GoCgsExybjLwrb7WqduxwgV5p7_PCnVZk2L-P8v-KE&usqp=CAU" style={{ height: "40px", width: "40px" }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR8264afNa5wCMsyZEqkmVEFmR45HmB5fkg&usqp=CAU" style={{ height: "40px", width: "40px" }} />
        </div>
      </div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid d-flex flex-row justify-content-center justify-content-space-between">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link" href="/sarees">SAREES</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/blouses">BLOUSES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="menswear">MEN'S WEAR</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/collections">COLLECTIONS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/accessories">ACCESSORIES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/loungewear">LOUNGE WEAR</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dresses">DRESSES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/homeliving">HOME & LIVING</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="bestseller">BEST SELLER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">ABOUT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
