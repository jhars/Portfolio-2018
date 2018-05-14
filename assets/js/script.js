
/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    // $('#preloader').delay(350).fadeOut('slow', function () {
    $('#preloader').delay(0).fadeOut('slow', function () {
        // $('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
        //.profile-page => Interactive Studio
        //.portfolio-page => Portfolio (cards)
        //Tech Skills => .service-page
        //.contact-page => About Me
        // $('.portfolio-page, .contact-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */

    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > 767) {

            $('.interactive').css({
                display: 'block'
            });


            $('.image-container').css({
                display: 'block'
            });

            $('.profile-page-mobile').css({
                display: 'none'
            });

            $('.menu').css({
                'padding-bottom': '0px'
            });


        } else {

            $('.interactive').css({
                display: 'none'
            });

            $('.image-container').css({
                display: 'none'
            });

            $('.profile-page-mobile').css({
                display: 'block'
            });

            $('.menu').css({
                'padding-bottom': '50px',
                background: 'url(../img/landing/Chalkboard.png)'

            });

        }

        if (windowsWidth > 1024) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

            $('.flippers').css({
                display: 'block'
            });


            // $('.menu').css({
            //     'padding-bottom': '0px'
            // });


        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

            // $('.menu').css({
            //     'padding-bottom': '50px',
            //     background: 'url(../img/landing/Chalkboard.png)'

            // });

            $('.flippers').css({
                display: 'none'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img'),
            menuBgImages = $('.menu > div img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: 'auto'
            });
            menuBgImages.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            bgImage.css({
                width: 'auto',
                height: '100%'
            });
            menuBgImages.css({
                width: 'auto',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    // Hide Menu

    $('.menu > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });

    });







    // var mapCanvas = document.getElementById('map-canvas');
    // var mapOptions = {
    //     center: new google.maps.LatLng(24.909439, 91.833800),
    //     zoom: 16,
    //     scrollwheel: false,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // var map = new google.maps.Map(mapCanvas, mapOptions)

    // var marker = new google.maps.Marker({
    //         position: new google.maps.LatLng(24.909439, 91.833800),
    //         title:"Boots4 Office"
    //     });

        // To add the marker to the map, call setMap();
        // marker.setMap(map);

    //google.maps.event.addDomListener(window, 'load', initialize);


    // Show Reletive Page Onclick

    $('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
        setTimeout(function(){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 7500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }, 100);
    });

    $('.menu div.portfolio-btn').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
        setTimeout(function(){
            $('#projects').mixItUp();
        }, 100);
    });

    $('.menu div.service-btn').on('click', function () {
        $('.service-page').fadeIn(1200);
    });

    $('.menu div.contact-btn').on('click', function () {
        $('.contact-page').fadeIn(1200);
        setTimeout(function(){
            google.maps.event.trigger(map,'resize');
        },100);
    });


    // Close Button, Hide Menu

    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });

        // $('#clickCanvas').css({
            ctx.clearRect(0, 0, width, height);
        // });


        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .portfolio-page, .service-page, .contact-page').fadeOut(800);
    });

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();



    /*----------------------script for owl carousel sponsors---------------------*/

        $("#sponsor-list").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            stopOnHover: true,
            items : 3,
            itemsDesktop: [1200,3],
            itemsDesktopSmall: [991,3],
            itemsTablet: [767,2],
            itemsTabletSmall: [625,2],
            itemsMobile: [479,1]
        });



    /*  -------------------------------
         PopUp ( for portfolio page )
        -------------------------------  */

    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });


    /*  -------------------------------
                CUSTOM MASONRY
        -------------------------------  */

    $(function () {

    var $container = $('#container').masonry({
        itemSelector: '.item',
        columnWidth: 400
    });

    // reveal initial images
    $container.masonryImagesReveal($('#images').find('.item'));
});

$.fn.masonryImagesReveal = function ($items) {
    var msnry = this.data('masonry');
    var itemSelector = msnry.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(function (imgLoad, image) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $(image.img).parents(itemSelector);
        // un-hide item
        $item.show();
        // masonry does its thing
        msnry.appended($item);
    });

    return this;
};

});
