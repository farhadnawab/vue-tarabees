<template>
  <main class="site-main home dark-bg" :key="componentKey">
      <section class="main-banner p-relative">
      <div class="banner-content ov-hidden">
      <div class="caption-mobile text-center"><h3>Working Harder</h3><p class="mb-0 mt-20">Get in Shape Now!</p></div>
      <div class="caption1" data-paroller-factor="0.2" data-paroller-type="foreground" data-paroller-direction="horizontal" ><h3>Working</h3><p>Get in Shape Now!</p></div>
      <img src="@/assets/img/banner-man-2.png" class="man-desktop img-fluid" alt="">
      <div class="caption2 text-right" data-paroller-factor="-0.2" data-paroller-type="foreground" data-paroller-direction="horizontal" ><p>Fitness Reveals Pleasure</p><h3>Harder</h3></div>
      </div> <!-- end .banner-content -->

      <div class="video-button right flex align-center">
      <a href="https://vimeo.com/184323035" class="play-icon mfp-iframe">
      <span class="gradient-bg flex align-center justify-center">
      <i class="ti-control-play"></i>
      </span>
      </a>
      <div>
      <h6 class="text-uppercase text-white">Watch Live Demo</h6>
      <p class="mb-0">You will love seeing the procedure</p>
      </div>
      </div>

      <div id="fire-flame"></div>
      </section> <!-- end .main-banner -->

      <section id="features" class="top-full bottom-half">
      <div class="container">
      <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
      <div class="feature-item gradient-hover">
      <span class="f-icon transition mb-25 inline-flex"><i class="ti-user"></i></span>
      <h6 class="mb-15 transition text-uppercase text-white fs-18">Personal Training</h6>
      <p class="mb-0 transition">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div> <!-- end .feature-item -->
      </div> <!-- end .col-12.col-sm-6.col-md-4 -->
      <div class="col-12 col-md-6 col-lg-4">
      <div class="feature-item gradient-hover">
      <span class="f-icon transition mb-25 inline-flex"><i class="ti-lock"></i></span>
      <h6 class="mb-15 transition text-uppercase text-white fs-18">Locker Available</h6>
      <p class="mb-0 transition">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div> <!-- end .feature-item -->
      </div> <!-- end .col-12.col-sm-6.col-md-4 -->
      <div class="col-12 col-md-6 col-lg-4">
      <div class="feature-item gradient-hover">
      <span class="f-icon transition mb-25 inline-flex"><i class="ti-heart-broken"></i></span>
      <h6 class="mb-15 transition text-uppercase text-white fs-18">Cardio Theatre</h6>
      <p class="mb-0 transition">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div> <!-- end .feature-item -->
      </div> <!-- end .col-12.col-sm-6.col-md-4 -->
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      </section> <!-- end #features -->

      <section id="about" class="section p-relative ov-hidden">
      <div class="watermark-title">About</div>
      <div class="container z-index-1 p-relative">
      <div class="row">
      <div class="col-12 col-md-6">
      <figure class="about-man">
      <img src="@/assets/img/about-man.png" class="img-fluid" alt="">
      </figure>
      </div> <!-- end .col-12.col-md-6 -->
      <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
      <article class="about-article">
      <span class="tag gradient-text text-uppercase fw-500">About Us</span>
      <h2 class="fw-700 text-white text-uppercase">We are Squat. <br>Here is Who We Are.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <p class="d-none d-sm-block d-md-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="btn btn-theme mt-30">Learn More</a>
      </article>
      </div> <!-- end .col-12.col-md-6 -->
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      </section> <!-- end #about -->

      <section id="our-services" class="bottom-full top-half p-relative ov-hidden">
      <div class="watermark-title">Services</div>
      <div class="container z-index-1 p-relative">
      <div class="row">
      <div class="col-12 section-heading mb-100 text-center">
      <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <span class="ml-15 mr-15">We are Squat. this is what we do</span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </p>
      <h2 class="text-white fw-700 text-uppercase mb-25">These are our Offerings</h2>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br class="d-none d-sm-block">tempor incididunt ut labore dolore.</p>
      </div> <!-- end .col-12 -->

      <div class="col-12 col-md-6 col-lg-4">
      <div class="item-card animated-border service-item p-relative ov-hidden">
      <figure class="p-relative mb-0">
      <img src="@/assets/img/service-4.jpg" class="img-fluid" alt="">
      <figcaption>
      <h4 class="text-uppercase fw-700 dark-color fs-18">Fitness Service 03</h4>
      <p>Lorem ipsum dolor amet podor</p>
      </figcaption>
      </figure>
      <div class="item-card-hover gradient-border" data-bgc="#030409,80">
      <a href="#" class="btn popup-icon link-white gradient-bg">
      <i class="ti-fullscreen"></i>
      </a>
      </div>
      </div> <!-- end .item-card service-item -->
      </div> <!-- end .col-12.col-md-4 -->

      <div class="col-12 col-md-6 col-lg-4">
      <div class="item-card animated-border service-item p-relative ov-hidden">
      <figure class="p-relative mb-0">
      <img src="@/assets/img/service-2.jpg" class="img-fluid" alt="">
      <figcaption>
      <h4 class="text-uppercase fw-700 dark-color fs-18">Fitness Service 03</h4>
      <p>Lorem ipsum dolor amet podor</p>
      </figcaption>
      </figure>
      <div class="item-card-hover gradient-border" data-bgc="#030409,80">
      <a href="#" class="btn popup-icon link-white gradient-bg">
      <i class="ti-fullscreen"></i>
      </a>
      </div>
      </div> <!-- end .item-card service-item -->
      </div> <!-- end .col-12.col-md-4 -->

      <div class="col-12 col-md-6 col-lg-4">
      <div class="item-card animated-border service-item p-relative ov-hidden">
      <figure class="p-relative mb-0">
      <img src="@/assets/img/service-3.jpg" class="img-fluid" alt="">
      <figcaption>
      <h4 class="text-uppercase fw-700 dark-color fs-18">Fitness Service 03</h4>
      <p>Lorem ipsum dolor amet podor</p>
      </figcaption>
      </figure>
      <div class="item-card-hover gradient-border" data-bgc="#030409,80">
      <a href="#" class="btn popup-icon link-white gradient-bg">
      <i class="ti-fullscreen"></i>
      </a>
      </div>
      </div> <!-- end .item-card service-item -->
      </div> <!-- end .col-12.col-md-4 -->
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      </section> <!-- end #our-services -->
      
      <section id="testimonials" class="section-full p-relative section-arrow paroller">
      <div class="overlay" data-bgc="#030409,80"></div>
      <div class="section-arrows">
      <svg class="arrow-top" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 150" style="enable-background:new 0 0 1920 150;" xml:space="preserve">
      <polygon class="svg-fill-dark" points="0,150 959.9,0 1920,150 1920,0 0,0 "/>
      </svg>
      <svg class="arrow-bottom" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 150" style="enable-background:new 0 0 1920 150;" xml:space="preserve">
      <polygon class="svg-fill-dark" points="0,150 959.9,0 1920,150 "/>
      </svg>
      </div>
      <div class="container">
      <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1">
      <div class="testimonials">
      <article class="testimonial-item swiper-slide text-center">
      <figure class="author mb-40">
      <div class="inline-flex align-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <img src="@/assets/img/author-1.jpg" class="ml-20 mr-20 mb-25" alt="">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </div>
      <figcaption>
      <h4 class="fw-700 fs-18 text-uppercase text-white">Abra ka Dabra</h4>
      <span class="d-block">Manager, Google Inc</span>
      </figcaption>
      </figure>
      <blockquote class="fs-18 text-italic text-white">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</blockquote>
      </article>
      <article class="testimonial-item swiper-slide text-center">
      <figure class="author mb-40">
      <div class="inline-flex align-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <img src="@/assets/img/author-1.jpg" class="ml-20 mr-20 mb-25" alt="">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </div>
      <figcaption>
      <h4 class="fw-700 fs-18 text-uppercase text-white">Ryan Gosling</h4>
      <span class="d-block">Manager, Google Inc</span>
      </figcaption>
      </figure>
      <blockquote class="fs-18 text-italic text-white">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</blockquote>
      </article>
      <article class="testimonial-item swiper-slide text-center">
      <figure class="author mb-40">
      <div class="inline-flex align-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <img src="@/assets/img/author-1.jpg" class="ml-20 mr-20 mb-25" alt="">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </div>
      <figcaption>
      <h4 class="fw-700 fs-18 text-uppercase text-white">James Bond</h4>
      <span class="d-block">Manager, Google Inc</span>
      </figcaption>
      </figure>
      <blockquote class="fs-18 text-italic text-white">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</blockquote>
      </article>
      <article class="testimonial-item swiper-slide text-center">
      <figure class="author mb-40">
      <div class="inline-flex align-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <img src="@/assets/img/author-1.jpg" class="ml-20 mr-20 mb-25" alt="">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </div>
      <figcaption>
      <h4 class="fw-700 fs-18 text-uppercase text-white">Travor James</h4>
      <span class="d-block">Manager, Google Inc</span>
      </figcaption>
      </figure>
      <blockquote class="fs-18 text-italic text-white">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</blockquote>
      </article>
      </div> <!-- end .testimonials -->
      </div> <!-- end .col-12.col-md-4 -->
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      </section> <!-- end #testimonials -->

      <section id="our-trainers" class="top-full bottom-half p-relative ov-hidden">
      <div class="watermark-title">Trainer</div>
      <div class="container z-index-1 p-relative">
      <div class="row">
      <div class="section-heading mb-100 col-12 text-center">
      <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <span class="ml-15 mr-15">We are Squat. this is what we do</span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </p>
      <h2 class="text-white fw-700 text-uppercase mb-25">Our Trainers</h2>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br class="d-none d-sm-block">tempor incididunt ut labore dolore.</p>
      </div> <!-- end .col-12 -->
      </div> <!-- end .row -->

      <div class="trainer-slider">
      <div class="row trainer-bio d-flex align-items-center">
      <div class="col-12 col-md-6 col-lg-5">
      <h3 class="text-white text-uppercase fw-700 text-white">Mithila Rashid</h3>
      <p class="gradient-text fw-500 text-uppercase mb-30">Lead Trainer</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div class="buttons-group flex align-items-center mt-30 d-block d-sm-none">
      <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-facebook"></i></a>
      <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-instagram"></i></a>
      <a href="#" class="btn btn-sm btn-bottom-border"><i class="fa fa-linkedin"></i></a>
      </div>
      <div class="buttons-group flex align-items-center mt-30 d-none d-sm-block">
      <a href="#" class="btn btn-sm btn-bottom-border mr-20">Facebook</a>
      <a href="#" class="btn btn-sm btn-bottom-border mr-20">Instagram</a>
      <a href="#" class="btn btn-sm btn-bottom-border">Linkedin</a>
      </div>
      </div> <!-- end .col-12 col-lg-5 lg-push-1 -->

      <div class="col-12 col-md-6 col-lg-6 offset-lg-1">
      <img src="@/assets/img/trainer-2.jpg" class="img-fluid" alt="">
      </div>
      </div> <!-- end #trainer-bio -->
      <div class="row trainer-bio d-flex align-items-center">
      <div class="col-12 col-md-6 col-lg-5">
      <h3 class="text-white text-uppercase fw-700 text-white">John Kabir</h3>
      <p class="gradient-text fw-500 text-uppercase mb-30">Lead Trainer</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div class="buttons-group flex align-items-center mt-30 d-block d-sm-none">
      <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-facebook"></i></a>
      <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-instagram"></i></a>
      <a href="#" class="btn btn-sm btn-bottom-border"><i class="fa fa-linkedin"></i></a>
      </div>
      <div class="buttons-group flex align-items-center mt-30 d-none d-sm-block">
      <a href="#" class="btn btn-sm btn-bottom-border mr-20">Facebook</a>
      <a href="#" class="btn btn-sm btn-bottom-border mr-20">Instagram</a>
      <a href="#" class="btn btn-sm btn-bottom-border">Linkedin</a>
      </div>
      </div> <!-- end .col-12 col-md-6 col-lg-5 -->

      <div class="col-12 col-md-6 col-lg-6 offset-lg-1">
      <img src="@/assets/img/trainer-3.jpg" class="img-fluid" alt="">
      </div>
      </div> <!-- end #trainer-bio -->
      <div class="row trainer-bio d-flex align-items-center">
      <div class="col-12 col-md-6 col-lg-5">
      <h3 class="text-white text-uppercase fw-700 text-white">Siyam Ahmed</h3>
      <p class="gradient-text fw-500 text-uppercase mb-30">Lead Trainer</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div class="buttons-group flex align-items-center mt-30 d-block d-sm-none">
      <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-facebook"></i></a>
      <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-instagram"></i></a>
      <a href="#" class="btn btn-sm btn-bottom-border"><i class="fa fa-linkedin"></i></a>
      </div>
      <div class="buttons-group flex align-items-center mt-30 d-none d-sm-block">
      <a href="#" class="btn btn-sm btn-bottom-border mr-20">Facebook</a>
      <a href="#" class="btn btn-sm btn-bottom-border mr-20">Instagram</a>
      <a href="#" class="btn btn-sm btn-bottom-border">Linkedin</a>
      </div>
      </div> <!-- end .col-12 col-md-6 col-lg-5 -->

      <div class="col-12 col-md-6 col-lg-6 offset-lg-1">
      <img src="@/assets/img/trainer-4.jpg" class="img-fluid" alt="">
      </div>
      </div> <!-- end #trainer-bio -->
      </div> <!-- end .trainer-slide -->
      </div> <!-- end .container -->
      </section> <!-- end #our-trainers -->

      <section id="our-pricing" class="top-half bottom-full p-relative ov-hidden">
      <div class="watermark-title">Pricing</div>
      <div class="container z-index-1 p-relative">
      <div class="row">
      <div class="section-heading col-12 mb-100 text-center">
      <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <span class="ml-15 mr-15">We are Squat. this is what we do</span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </p>
      <h2 class="text-white fw-700 text-uppercase mb-25">Pricing For Courses</h2>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br class="d-none d-sm-block">tempor incididunt ut labore dolore.</p>
      </div> <!-- end .col-12 -->

      <div class="col-12 col-md-6 col-lg-4">
      <div class="item-card animated-border item-card-pt p-relative">
      <figure class="pt-image p-relative mb-0">
      <img src="@/assets/img/pt-1.jpg" class="img-fluid" alt="">
      <figcaption class="pt-caption">
      <h4 class="text-uppercase fw-700">Athletics Session</h4>
      <p class="mb-0">Lorem ipsum dolor amet podor</p>
      </figcaption>
      </figure> <!-- end .pt-image -->
      <div class="item-card-hover gradient-border flex align-end" data-bgc="#030409,80">
      <div>
      <a href="#" class="btn btn-theme"><i class="ti-unlock mr-15"></i>Enroll Now</a>
      <span class="pt-tag gradient-text text-uppercase fw-700 title-font">$200.00</span>
      <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">Weight Lifting Women</h4>
      <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <ul class="list-double-arrow">
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consec.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      </div>
      </div> <!-- end .pt-hover -->
      </div> <!-- end .pt-item -->
      </div> <!-- end .col-12.col-md-4 -->

      <div class="col-12 col-md-6 col-lg-4">
      <div class="item-card animated-border item-card-pt p-relative">
      <figure class="pt-image p-relative mb-0">
      <img src="@/assets/img/pt-2.jpg" class="img-fluid" alt="">
      <figcaption class="pt-caption">
      <h4 class="text-uppercase fw-700">Athletics Session</h4>
      <p class="mb-0">Lorem ipsum dolor amet podor</p>
      </figcaption>
      </figure> <!-- end .pt-image -->
      <div class="item-card-hover gradient-border flex align-end" data-bgc="#030409,80">
      <div>
      <a href="#" class="btn btn-theme"><i class="ti-unlock mr-15"></i>Enroll Now</a>
      <span class="pt-tag gradient-text text-uppercase fw-700 title-font">$200.00</span>
      <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">Weight Lifting Women</h4>
      <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <ul class="list-double-arrow">
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consec.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      </div>
      </div> <!-- end .pt-hover -->
      </div> <!-- end .pt-item -->
      </div> <!-- end .col-12.col-md-4 -->

      <div class="col-12 col-md-6 col-lg-4">
      <div class="item-card animated-border item-card-pt p-relative">
      <figure class="pt-image p-relative mb-0">
      <img src="@/assets/img/pt-3.jpg" class="img-fluid" alt="">
      <figcaption class="pt-caption">
      <h4 class="text-uppercase fw-700">Athletics Session</h4>
      <p class="mb-0">Lorem ipsum dolor amet podor</p>
      </figcaption>
      </figure> <!-- end .pt-image -->
      <div class="item-card-hover gradient-border flex align-end" data-bgc="#030409,80">
      <div>
      <a href="#" class="btn btn-theme"><i class="ti-unlock mr-15"></i>Enroll Now</a>
      <span class="pt-tag gradient-text text-uppercase fw-700 title-font">$200.00</span>
      <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">Weight Lifting Women</h4>
      <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <ul class="list-double-arrow">
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consec.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      </div>
      </div> <!-- end .pt-hover -->
      </div> <!-- end .pt-item -->
      </div> <!-- end .col-12.col-md-4 -->
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      </section> <!-- end #our-pricing -->

      <section id="calculate-bmi" class="section-full section-arrow gradient-bg p-relative">
      <div class="section-arrows">
      <svg class="arrow-top" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 150" style="enable-background:new 0 0 1920 150;" xml:space="preserve">
      <polygon class="svg-fill-dark" points="0,150 959.9,0 1920,150 1920,0 0,0 "/>
      </svg>
      <svg class="arrow-bottom" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1920 150" style="enable-background:new 0 0 1920 150;" xml:space="preserve">
      <polygon class="svg-fill-dark" points="0,150 959.9,0 1920,150 "/>
      </svg>
      </div>
      <div class="container p-relative z-index-2">
      <div class="row">
      <div class="section-heading col-12 mb-60 text-center">
      <h2 class="text-white fw-700 text-uppercase mb-25">Calculate Your BMI</h2>
      <p class="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br> tempor incididunt ut labore dolore.</p>
      </div> <!-- end .col-12 -->

      <div class="col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-6 offset-lg-3 mr-auto">
      <form id="bmi-calc-form">
      <div class="row">
      <div class="col-12 col-md-6">
      <div class="form-group material-input">
      <input type="text" class="form-control input-tp" id="height">
      <label for="height" class="text-white">Your Height (cm)</label>
      </div>
      </div>
      <div class="col-12 col-md-6">
      <div class="form-group material-input input-tp">
      <input type="text" class="form-control input-tp" id="weight">
      <label for="weight" class="text-white">Your Weight (kg)</label>
      </div>
      </div>
      </div>
      <div class="flex align-center space-between">
      <button type="submit" class="btn btn-white">Calculate BMI</button>
      <span class="text-white">Your BMI is: <span class="bmi-result title-font fw-700 fs-15">25.65</span></span>
      </div>
      </form>
      </div>
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      <figure class="bmi-man flex justify-center z-index-1">
      <img src="@/assets/img/bmi-man.png" class="img-fluid" alt="">
      </figure>
      </section> <!-- end #calculate-bmi -->

      <section id="latest-posts" class="section-full">
      <div class="container">
      <div class="row">
      <div class="section-heading col-12 mb-100 text-center">
      <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"/></g></g>
      </svg>
      <span class="ml-15 mr-15">We are Squat. this is what we do</span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 30" style="enable-background:new 0 0 19 30;" xml:space="preserve">
      <g><g><path class="svg-fill-text" d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"/></g></g>
      </svg>
      </p>
      <h2 class="text-white fw-700 text-uppercase mb-25">Latest From Our Blogs</h2>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br> tempor incididunt ut labore dolore.</p>
      </div> <!-- end .col-12 -->

      <div class="col-12 col-lg-6">
      <div class="item-card animated-border item-card-blog p-relative">
      <figure class="blog-image p-relative mb-0">
      <img src="@/assets/img/post-1.jpg" class="img-fluid" alt="">
      <figcaption class="blog-caption">
      <h4 class="text-uppercase fw-700 dark-color">Standard Blog post 01</h4>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
      </figcaption>
      </figure> <!-- end .blog-image -->
      <div class="item-card-hover gradient-border flex align-end" data-bgc="#030409,80">
      <div>
      <a href="#" class="btn btn-theme"><i class="ti-arrow-right mr-15"></i>Read more</a>

      <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">Standard Blog Post 01</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
      <div class="blog-tags flex">
      <a href="#">Mark Wiens,</a>
      <a href="#">Image,</a>
      <a href="#">203 likes,</a>
      <a href="#">05 comments</a>
      </div>
      </div>
      </div> <!-- end .pt-hover -->
      </div> <!-- end .blog-item -->
      </div> <!-- end .col-12.col-lg-4 -->

      <div class="col-12 col-lg-6">
      <div class="item-card animated-border item-card-blog p-relative">
      <figure class="blog-image p-relative mb-0">
      <img src="@/assets/img/post-2.jpg" class="img-fluid" alt="">
      <figcaption class="blog-caption">
      <h4 class="text-uppercase fw-700 dark-color">Standard Blog post 02</h4>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
      </figcaption>
      </figure> <!-- end .blog-image -->
      <div class="item-card-hover gradient-border flex align-end" data-bgc="#030409,80">
      <div>
      <a href="#" class="btn btn-theme"><i class="ti-arrow-right mr-15"></i>Read more</a>

      <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">Standard Blog Post 02</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
      <div class="blog-tags flex">
      <a href="#">Mark Wiens,</a>
      <a href="#">Image,</a>
      <a href="#">203 likes,</a>
      <a href="#">05 comments</a>
      </div>
      </div>
      </div> <!-- end .pt-hover -->
      </div> <!-- end .blog-item -->
      </div> <!-- end .col-12.col-lg-4 -->
      </div> <!-- end .row -->
      </div> <!-- end .container -->
      </section> <!-- end #latest-posts -->
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;  
    }
  }
}
</script>
