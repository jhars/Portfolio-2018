
/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
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

    // $('.menu div.profile-btn').on('click', function () {
    //     $('.profile-page').fadeIn(1200);
    //     setTimeout(function(){
    //         $('.count').each(function () {
    //             $(this).prop('Counter',0).animate({
    //                 Counter: $(this).text()
    //             }, {
    //                 duration: 7500,
    //                 easing: 'swing',
    //                 step: function (now) {
    //                     $(this).text(Math.ceil(now));
    //                 }
    //             });
    //         });
    //     }, 100);
    // });

    // $('.menu div.portfolio-btn').on('click', function () {
    //     $('.portfolio-page').fadeIn(1200);
    //     setTimeout(function(){
    //         $('#projects').mixItUp();
    //     }, 100);
    // });

    // $('.menu div.service-btn').on('click', function () {
    //     $('.service-page').fadeIn(1200);
    // });

    // $('.menu div.contact-btn').on('click', function () {
    //     $('.contact-page').fadeIn(1200);
    //     setTimeout(function(){
    //         google.maps.event.trigger(map,'resize');
    //     },100);
    // });


    // Close Button, Hide Menu

    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .portfolio-page, .service-page, .contact-page').fadeOut(800);
    });

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */



    /*----------------------script for owl carousel sponsors---------------------*/





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


