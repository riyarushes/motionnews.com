/*
    News24 Custom Script
*/
(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    /*=========================================================================
        menu  sticky
    =========================================================================*/
    var header = $('.sticky-header');
    var win = $(window);

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 150) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });


    /* mobile-menu  */
    $('.menu-wrap .mainmenu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: 'div.mobile-menu',
        meanRevealPosition: 'left'
    });

    /*=========================================================================
        Post Carousel
    =========================================================================*/
    var postCarousel = $('.post-carousel');
    postCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        smartSpeed: 1000,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    /*=========================================================================
        News Ticker
    =========================================================================*/
    var tickerSlector = $('.news-ticker');
    tickerSlector.newsTicker({
        row_height: 25,
        max_rows: 1,
        duration: 4000,
        prevButton: $('#prev-ticker'),
        nextButton: $('#next-ticker'),
        pauseOnHover: 0
    });


    /*=========================================================================
        Counter Up Active
    =========================================================================*/
    var counterSelector = $('.counter');
    counterSelector.counterUp({
        delay: 10,
        time: 2000
    });

    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
        Swipebox active
    =========================================================================*/
    var lightbox = $('.lightbox');
    lightbox.swipebox();

    /*=========================================================================
        NiceScroll Active
    =========================================================================*/
    $("html").niceScroll({
        background: "#111",
        cursorcolor: "#ff322e",
        cursorwidth: "16px",
        scrollspeed: 40,
        mousescrollstep: 60,
        cursorborder: "0px solid #eaeaea",
        cursorborderradius: "0px",
        autohidemode: false,
        zindex: "999"
    });

    /*=========================================================================
        wow Settings
    =========================================================================*/
    var wow = new WOW({
        mobile: false,
        offset: 0
    });
    wow.init();


    /*=========================================================================
        Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

})(jQuery);



// *******************************


  // Function to format and display the current date
    function displayCurrentDate() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get the current date
    const currentDate = new Date();

    // Format the day, month, and year
    const dayName = daysOfWeek[currentDate.getDay()];
    const monthName = monthsOfYear[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    // Format the final date string
    const formattedDate = `${dayName} ${monthName} ${day}, ${year}`;

    // Set the content of the li element
    document.getElementById("current-date").textContent = formattedDate;
  }

    // Call the function when the page loads
    displayCurrentDate();
