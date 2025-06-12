import React from 'react'
import {Link} from 'react-router-dom'

function Testimonials() {
  return (
    <div>
<div class="testimonials-page">
    <div class="main">

    
    <div class="page-title dark-background" data-aos="fade" style={{
    backgroundImage: "url('/assets/img/page-title-bg.webp')",
  }}>
      <div class="container position-relative">
        <h1>Testimonials</h1>
        
        <nav class="breadcrumbs">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li class="current">Testimonials</li>
          </ol>
        </nav>
      </div>
    </div>

   
    <section class="testimonials-12 testimonials section" id="testimonials">
     
      <div class="container section-title" data-aos="fade-up">
        <h2>TESTIMONIALS</h2>
        <p>Necessitatibus eius consequatur</p>
      </div>

      <div class="testimonial-wrap">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-4">
              <div class="testimonial">
                <img src="assets/img/testimonials/testimonials-1.jpg" alt="Testimonial author"/>
                <blockquote>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Provident deleniti iusto molestias, dolore vel fugiat
                    ab placeat ea?”
                  </p>
                </blockquote>
                <p class="client-name">James Smith</p>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-md-4">
              <div class="testimonial">
                <img src="assets/img/testimonials/testimonials-2.jpg" alt="Testimonial author"/>
                <blockquote>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Provident deleniti iusto molestias, dolore vel fugiat
                    ab placeat ea?”
                  </p>
                </blockquote>
                <p class="client-name">Kate Smith</p>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-md-4">
              <div class="testimonial">
                <img src="assets/img/testimonials/testimonials-3.jpg" alt="Testimonial author"/>
                <blockquote>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Provident deleniti iusto molestias, dolore vel fugiat
                    ab placeat ea?”
                  </p>
                </blockquote>
                <p class="client-name">Claire Anderson</p>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-md-4">
              <div class="testimonial">
                <img src="assets/img/testimonials/testimonials-4.jpg" alt="Testimonial author"/>
                <blockquote>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Provident deleniti iusto molestias, dolore vel fugiat
                    ab placeat ea?”
                  </p>
                </blockquote>
                <p class="client-name">Dan Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="call-to-action" className="call-to-action section light-background">
  <div className="content">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h3>Subscribe To Our Newsletter</h3>
          <p className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!
          </p>
        </div>
        <div className="col-lg-6">
          <form action="forms/newsletter.php" className="form-subscribe php-email-form">
            <div className="form-group d-flex align-items-stretch">
              <input
                type="email"
                name="email"
                className="form-control h-100"
                placeholder="Enter your e-mail"
              />
              <input
                type="submit"
                className="btn btn-secondary px-4"
                value="Subscribe"
              />
            </div>
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your subscription request has been sent. Thank you!
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </div>






<footer id="footer" class="footer dark-background">

    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
              <span class="sitename">AgriCulture</span>
            </a>
            <div class="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li><a href="#">Molestiae accusamus iure</a></li>
              <li><a href="#">Excepturi dignissimos</a></li>
              <li><a href="#">Suscipit distinctio</a></li>
              <li><a href="#">Dilecta</a></li>
              <li><a href="#">Sit quas consectetur</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li><a href="#">Ipsam</a></li>
              <li><a href="#">Laudantium dolorum</a></li>
              <li><a href="#">Dinera</a></li>
              <li><a href="#">Trodelas</a></li>
              <li><a href="#">Flexo</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="copyright text-center">
      <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div class="d-flex flex-column align-items-center align-items-lg-start">
          <div>
            © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
             <a href="https://bootstrapmade.com/">Keerthana</a>
          </div>
        </div>

        <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a href=""><i class="bi bi-twitter-x"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>

  </footer>
<a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>




    </div>
    
  )
}

export default Testimonials