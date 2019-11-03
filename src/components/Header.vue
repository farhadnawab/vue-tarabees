<template>
    <header class="site-header navbar navbar-expand-lg">
        <div class="container">
            <router-link to="/" class="navbar-brand" data-text="Home">
                <img src="@/assets/img/logo-color.png" alt="Squat">
            </router-link><!-- end .navbar-brand -->
            <button class="navbar-toggler white" type="button" data-toggle="collapse" data-target="#primary-nav">
                <span class="menu-icon hover-target">
                    <span class="menu-icon__line menu-icon__line-left"></span>
                    <span class="menu-icon__line"></span>
                    <span class="menu-icon__line menu-icon__line-right"></span>
                </span>
            </button> <!-- end .navbar-toggler -->
            <nav id="primary-nav" class="primary-nav collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="has-submenu">
                        <router-link to="/" data-text="Home"><span>Home</span></router-link>
                    </li>
                    <li><router-link to="/about" data-text="About"><span>About</span></router-link></li>
                    <li><router-link to="/class-schedule" data-text="Schedules"><span>Schedules</span></router-link></li>
                    <li><a href="javascript:void(0)" data-text="Pricing"><span>Pricing</span></a></li>
                    <li>
                        <router-link to="#" data-text="Pages"><span>Pages</span></router-link>
                        <ul class="submenu">
                            <li><router-link to="/clasess">Classes</router-link></li>
                            <li><router-link to="/class-detail">Class Details</router-link></li>
                            <li><router-link to="/our-trainer">Our Trainers</router-link></li>
                            <li><router-link to="/gallery">Gallery</router-link></li>
                            <li><router-link to="/404">404</router-link></li>
                        </ul>
                    </li>
                    <li class="has-submenu">
                        <router-link to="#" data-text="Blog"><span>Blog</span></router-link>
                        <ul class="submenu">
                            <li><router-link to="/blog-list">Blog List</router-link></li>
                            <li><router-link to="/blog-single">Blog Details</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/contact" data-text="Contact"><span>Contact</span></router-link></li>
                </ul> <!-- end .navbar-nav -->
            </nav> <!-- end #primary-nav -->
        </div> <!-- end .container -->
    </header> <!-- end .site-header -->

</template>

<script>
export default{
    name: 'Header'
}

</script>