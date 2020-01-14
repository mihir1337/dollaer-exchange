(function ($) {
    "use strict";

    jQuery(document).ready(function($){
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.menu-prepent',
        });

        $('.menu-open').click( function (){
            $('.body-left-bar').toggleClass('activee');  
            $('.menu-open').toggleClass('toggle');  
        });

        $('select').niceSelect();

    /* smooth scroll */
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });

    /* smooth scroll */
    $(".single-slider-item").owlCarousel({
        items:5,
        nav:true,
        dot:true,
        loop:true,
        margin:20,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay:false,
        autoplayTimeout:3000,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:4,
            },
            1000:{
                items:5,
            }
        }
    });

    $(".send-money").owlCarousel({
        items:1,
        nav:true,
        dot:false,
        loop:true,
        margin:20,
        navText:['<i class="fal fa-angle-right"></i>'],
        autoplay:false,
        autoplayTimeout:3000,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
                
            },
            1000:{
                items:1,
                
            }
        }
    });
    });

    


}(jQuery));	