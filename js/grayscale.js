/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $.stellar({
          verticalScrolling: true,
          horizontalScrolling:true,
          scrollProperty: 'scroll',
          responsive: true,
          positionProperty: 'transform',
          parallaxElements: true,
          hideElement: function($elem) {  },
    });

/*
    $('#portcontainer').fadeOut();
    var WP_portcontainer = new Waypoint({
      element: document.getElementById('portfolio'),
      handler: function() {
        $('#portcontainer').fadeIn();
      }
    })    
    var WP_contact = new Waypoint({
      element: document.getElementById('contact'),
      handler: function(down) {
        $('#portcontainer').fadeOut();
      }
    })    
*/

});


