/*=================================================================

Template name: Hpres SEO HTML Template
Version: 1.0.0
Author:      
Author url: 
Developer: Najmul Huda Eimon

[Table of Content]

01: Background image
02: Preloader
03: Scroll to top button
04: Menu
05: Sticky menu
06: parallax activation home 1
07: Venobox video play
08: Project filtering
09: client slider
10: client slider
11: directional hover
12. Google Map
 
====================================================================*/

$(function(){
    "use strict";
    
    /*=====================================================================
        01: Background image
    ======================================================================*/
   let imageTarget = $('[data-img]');
   imageTarget.css('background', function(){
       return 'url('+this.getAttribute('data-img')+') no-repeat center'
   });
   imageTarget.css('backgroundSize', 'cover');

   /*================================================================
      02: Preloader
    =================================================================*/
    $( document ).ready(function() {
        setTimeout(()=>{
            $('.preloader').fadeOut();
        }, 250)
    });

    /*=====================================================================
        03: Scroll to top button
    =======================================================================*/

    $('.top-btn').on('click',function(){
        $('html').animate({
            scrollTop: 0
        },1000);
    });

    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

        if($scroll > 300){
            $('.top-btn').addClass('show');
        }else{
            $('.top-btn').removeClass('show');
        }
    });

    /*=====================================================================
        04: Menu
    ======================================================================*/
    $('.header-menu a[href="#"]').on("click", function (e) {
        e.preventDefault();
    });

    $(".header-menu").menumaker({ title: '<i class="fas fa-bars"></i>', format: "multitoggle" });

    /*=====================================================================
        05: Sticky menu
    ======================================================================*/
    function menuSticky (){
        var $scroll = $(window).scrollTop();
        if($scroll > 120){
            $('.menubar').addClass('sticky');
        }else{
            $('.menubar').removeClass('sticky');
        }
     }
     menuSticky ()
     $(window).on('scroll',function(){
        menuSticky ()

    });

    /*================================================
        06: parallax activation home 1
    ================================================*/
    var $parallaxLayers = $('[data-trigger="parallax_layers"]');

    if( $parallaxLayers.length ){
        $parallaxLayers.each(function () {
            new Parallax( $(this)[0], {
                selector: '[data-depth]'
            });
        });
    }

    /*=====================================================================
        07: Venobox video play
    ======================================================================*/
    $('.venobox').venobox();


    /*=====================================================================
        08: Project filtering
    ======================================================================*/
        let mixer =  document.querySelector('.filters');
        if(mixer){
            mixitup('.filters',{
                selectors: {
                    control: '[data-mixitup-control]'
                }
            })
        }


        $('.project-menu li').click(function(event){
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
        });

    /*=====================================================================
        09: client slider
    ======================================================================*/
        var swiper = new Swiper('.client-slider', {
            observer: true,
            observeParents: true,
            loop: true,
            centeredSlides: false,
            spaceBetween: 30,
            autoPlay: 3000,
            breakpoints: {
                1920: {
                slidesPerView: 2,
                },
                992: {
                slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            
        });

        var swiper = new Swiper('.client-slider2', {
            observer: true,
            observeParents: true,
            loop: true,
            centeredSlides: true,
            spaceBetween: 30,
            autoPlay: 3000,
            breakpoints: {
                1920: {
                slidesPerView: 3,
                },
                992: {
                slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
        });
    /*=====================================================================
        10: client slider
    ======================================================================*/
        $('.counter-up').counterUp({
            delay: 10,
            time: 2000
        });
    /*=====================================================================
        11: directional hover
    ======================================================================*/

        
	$('.home3 .single-item').directionalHover({
	  overlay: "project-detail",
	  easing: "swing",
	  speed: 400
	});

    /*=========================================================
        12. Google Map
    ==========================================================*/

    if($('#map').length !==0){
            
        var googleMapSelector = $('#map');
        var latitude = $('.google-map-wrapper').attr('data-latitude');
        var longitude = $('.google-map-wrapper').attr('data-longitude');
        var zoome = $('.google-map-wrapper').attr('data-zoom');
        var zoomtoNum = Number(zoome);
        var mapmarker = $('.google-map-wrapper').attr('data-marker');
        var myCenter = new google.maps.LatLng(latitude, longitude);
  
        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: zoomtoNum,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f7f1e0"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#d0e3b4"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.medical",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fbd3da"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#bde6ab"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffe36f"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#efd151"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "black"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#cfb2db"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a2daf2"
                                }
                            ]
                        }
                    ]
            };
            var map = new google.maps.Map( document.getElementById('map'), mapProp );
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: mapmarker,
            });
            marker.setMap(map);
  
           
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }
    

});