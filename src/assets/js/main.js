import jQuery from "jquery";
require("../js/modernizr-custom.js")
require("../js/jquery.magnific-popup.min.js")
require("../js/jquery.paroller.min.js")
require("../js/slick.min.js")
require("../js/jquery.form.min.js")
require("../js/jquery.validate.min.js")

/*eslint-disable no-unused-vars*/
/*eslint-disable no-redeclare*/
/*eslint-disable no-undef*/

    jQuery(window).on('load', function() {
        jQuery('.preloader-wrap').fadeOut();
    });


        var navbar_nav = jQuery('.navbar-nav'),
            site_header = jQuery('.site-header'),
            wHeight = window.innerHeight,
            hHeight = site_header.outerHeight(),
            wWidth = jQuery(window).width(),
            fitscreen = wHeight-hHeight,
            fitscreen = wHeight-hHeight;

        if ( jQuery(window).width() < 992 ) {
            jQuery(document).on('click', '.navbar-toggler', function(event) {
                event.preventDefault();
                jQuery(this).toggleClass('active');

                if (jQuery(window).scrollTop() < 1) {
                    site_header.toggleClass('header-sticky');
                }

                jQuery(window).scroll(function() {
                    if (jQuery(window).scrollTop() > 1) {
                        return
                    } else {
                        site_header.toggleClass('header-sticky');
                    }
                });
            });

            jQuery(document).on('click', '.navbar-nav li a', function(event) {
                if (jQuery(this).next().is('ul')) {
                    jQuery(this).next('ul').slideToggle()
                }
            });
        }

        jQuery('.fitscreen').css('height', wHeight);
        jQuery('.fullscreen').css('height', wHeight);

        jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop() > 1) {
                if (!site_header.hasClass('header-sticky')) {
                    site_header.addClass('header-sticky');
                }
            } else {
                if (site_header.hasClass('header-sticky')) {
                    site_header.removeClass('header-sticky');
                }
            }
        });

        if (jQuery('.site-main').hasClass('dark-bg')) {
            jQuery('.site-main').removeClass('dark-bg');
            jQuery('body').addClass('dark-bg');
        } else {
            jQuery('.navbar-nav').addClass('nav-dark');
            jQuery('.animated-ham').addClass('anim-ham-dark');
        }

        jQuery('section > .container > .row').each(function(index, el) {
            var col_length = jQuery(this).children('.col-12').length;
            jQuery(this).children('.col-12').addClass('col-length-'+col_length);
        });

        jQuery('.animated-border').each(function() {
            jQuery(this).append('<span class="border-span"></span>')
            jQuery(this).find('.gradient-border').removeClass('gradient-border')
        });

        jQuery('.masonry-gallery').masonry({
            itemSelector: '.col-12'
        });

        // mfp image
        jQuery('.mfp-image-single').magnificPopup({
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });

        // mfp image
        jQuery('.mfp-image-gallery').magnificPopup({
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            gallery: {
                enabled: true
            }
        });

        // mfp iframe
        jQuery('.mfp-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // set background color and opacity from html5 data attribute
        jQuery('[data-bgc]').each(function() {
            var bgc = jQuery(this).attr('data-bgc'),
                res = bgc.split(','),
                hex = res[0];

            // check if opacity exists witg bgc
            if (bgc.indexOf(',') > -1) {
                var alpha = res[1];
            } else {
                var alpha = 100;
            }
            jQuery(this).css('background-color', convertHex(hex,alpha)).removeAttr('data-bgc');
        });

        // set font size by html5 data attribute
        jQuery('[data-fs]').each(function() {
            var fs = jQuery(this).attr('data-fs');

            jQuery(this).css('font-size', fs+'px');
        });

        // convert hex to rgba
        function convertHex(hex,opacity){
            var hex = hex.replace('#',''),
                r = parseInt(hex.substring(0,2), 16),
                g = parseInt(hex.substring(2,4), 16),
                b = parseInt(hex.substring(4,6), 16),

                result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
            return result;
        }

        // console.log(convertHex('#fc0247',80));

        // check if testimonial carousel exists
        if (jQuery("#home-2-slider")[0]){
            jQuery("#home-2-slider").slick({
                infinite: true,
                fade: true,
                arrows: false,
                dots: true,
                autoplay: false,
                slidesToShow: 1,
                prevArrow: '<button class="slick-prev slick-arrow gradient-bg gradient-hover"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button class="slick-next slick-arrow gradient-bg gradient-hover"><i class="ti-angle-right"></i></button>'
            });
        }

        // check if testimonial carousel exists
        if (jQuery(".testimonials")[0]){
            jQuery('.testimonials').slick({
                infinite: true,
                fade: true,
                arrows: false,
                dots: true,
                autoplay: true,
                draggable: false,
                slidesToShow: 1,
                prevArrow: '<button class="slick-prev slick-arrow gradient-bg gradient-hover"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button class="slick-next slick-arrow gradient-bg gradient-hover"><i class="ti-angle-right"></i></button>'
            });
        }
        // check if trainer-slider exists
        if (jQuery(".trainer-slider")[0]){
            jQuery('.trainer-slider').slick({
                lazyLoad: 'ondemand',
                infinite: true,
                fade: true,
                autoplay: false,
                draggable: false,
                slidesToShow: 1,
                prevArrow: '<button class="slick-prev slick-arrow gradient-bg gradient-hover"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button class="slick-next slick-arrow gradient-bg gradient-hover"><i class="ti-angle-right"></i></button>'
            });
        }

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = jQuery(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }


        if (jQuery(".paroller")[0]){
            // initialize paroller.js and set attributes for selected elements
            jQuery("[data-paroller-factor]").paroller();

            jQuery(".paroller").paroller({
                factor: 0.3,            // multiplier for scrolling speed and offset
                factorXs: 0.1,           // multiplier for scrolling speed and offset
                type: 'background',     // background, foreground
                direction: 'vertical' // vertical, horizontal
            });
        }

        jQuery('.material-input input, .material-input textarea').each(function() {
            jQuery(this).on('focus', function() {
                jQuery(this).parent().addClass('active');
            }).on('focusout', function() {
                if(jQuery(this).val() == '') {
                    jQuery(this).parent().removeClass('active');
                }
            });
        });

        /* ========================================================================= */
        /*  Contact Form
        /* ========================================================================= */
        
        jQuery('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 2
                },
                lname: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                fname: {
                    required: "come on, you have a first name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                lname: {
                    required: "come on, you have a last name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                jQuery(form).ajaxSubmit({
                    type: "POST",
                    data: jQuery(form).serialize(),
                    url: "mail.php",
                    success: function() {
                        jQuery('#contact-form #success').fadeIn();
                        jQuery('#contact-form')[0].reset();
                        jQuery('#contact-form #success').delay(5000).slideUp(400);
                    },
                    error: function() {
                        jQuery('#contact-form #error').fadeIn();
                    }
                });
            }
        });
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('contact-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
        if (jQuery("#contact-map")[0]) {
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        }