import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>


<header id="header" class="header d-flex align-items-center position-relative"  className="scroll-up-sticky">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
       
        <img src="assets/img/logo.png" alt="AgriCulture"/>
         <h1 class="sitename">AgriCulture</h1> 
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/testimonial">Testimonials</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
<i class="mobile-nav-toggle bi bi-list"></i>
    </div>
  </header>

    </div>
  )
}

export default Header