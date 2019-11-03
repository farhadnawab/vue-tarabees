<template>
    <footer class="site-footer" :class="$route.meta.footerTop === true ? 'bottom-full': 'section-full'" v-if="$route.path !== '/404'">
        <div class="footer-top-shape"  v-if="$route.meta.footerTop === true">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 341" style="enable-background:new 0 0 1920 341;" xml:space="preserve">                
                <g>
                    <polygon class="step-2" points="0,270 0,270 0,341 959.9,191 1920,341 1920,270 960,120   "/>
                    <polygon class="step-1" points="0,200 0,200 0,251 959.9,101 1920,251 1920,200 960,50    "/>
                    <polygon class="step-0" points="960,0 0,150 0,150 0,181 959.9,31 1920,181 1920,150  "/>
                </g>
            </svg>
            
            <!-- for ie -->
            <img src="@/assets/img/footer-top-shape.svg" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-6 offset-lg-3 mr-auto">
                    <figure class="footer-logo text-center mb-45">
                        <img src="@/assets/img/logo-color.png" alt="Squat">
                    </figure>
                    <ul class="footer-nav title-font list-unstyled flex align-center justify-center text-uppercase fw-700 mb-40">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/clasess">Classes</router-link></li>
                        <li><router-link to="/our-trainer">Trainers</router-link></li>
                        <li><a href="#">Pricing</a></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                    <div class="buttons-group flex align-items-center justify-center mt-30 d-flex d-sm-none">
                        <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fa fa-instagram"></i></a>
                        <a href="#" class="btn btn-sm btn-bottom-border"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div class="buttons-group flex align-items-center mt-30 d-none d-sm-block">
                        <a href="#" class="btn btn-bottom-border mr-20">Facebook</a>
                        <a href="#" class="btn btn-bottom-border mr-20">Instagram</a>
                        <a href="#" class="btn btn-bottom-border">Linkedin</a>
                    </div>
                    <p class="text-center mt-45 mb-0">Designed by Measureit and developed by pocotheme.</p>
                </div>
            </div> <!-- end .row -->
        </div> <!-- end .container -->
    </footer> <!-- end .site-footer -->

</template>

<script>
export default{
    name: 'Footer'
}

</script>
<style type="text/css">
    .step-0{fill:#FE3E0B;}
    .step-1{fill:#E5180A;}
    .step-2{fill:#FC0247;}
</style>