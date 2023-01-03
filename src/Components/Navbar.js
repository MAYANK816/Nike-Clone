import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    // Mobile window size
    // Window size
    const navigate = useNavigate();
    const logout_User = () => {
        localStorage.removeItem('loginData');
        navigate('/login');
    }
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid p-2">
    <a class="navbar-brand text-light" href="/"><img src="/Images/brandlogo.png" alt="logo"/></a>

  

    <div class="collapse navbar-collapse " id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item">
          <a class="nav-link active text-light " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="# " onClick={logout_User}>Logout</a>
        </li>
      </ul>

    </div>
    <i class="fa-solid fa-cart-shopping"></i> 
    <button class="nav_btn">Contact Us</button>
    <button
      class="navbar-toggler text-light"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
  </div>

</nav>
</>
  )
}

export default Navbar;