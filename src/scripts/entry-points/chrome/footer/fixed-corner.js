var $ = require('jquery');
function fixedCorder() {
    var fixedModule = $(".js-fixed-corner");
    var fixedOffClass = "fixed-corner--off";
    var offsetBottomDiff = 70;

    $(window).on("scroll resize", function() {
        var $window = $(this);
        var docHeight = $(document).height();
        var windowHeight = window.screen.height;
        var scrollPosY = $window.scrollTop();
        var footerHeight = $("#site-footer").outerHeight(true);
        var footerScrollPosY =  docHeight - footerHeight - windowHeight - offsetBottomDiff;

        if (scrollPosY >=  footerScrollPosY) {
          fixedModule.addClass(fixedOffClass);
        } else {
          fixedModule.removeClass(fixedOffClass);
        }
    });
}

// Scroll to top function
function scrollToTop() {
     $( "html, body" ).animate({ scrollTop: 0 }, 300 );
}


function backToTop() {
    var backToTop = $(".back-to-top");

    // Check if back to top button exist
    if(backToTop.length) {

        // Add click event to scrop top
        backToTop.on("click", function(){
            scrollToTop();
        });
        
        // Check window position
        $(window).scroll( function() {
            var scrollPos = $(this).scrollTop()
            if (scrollPos > 150) {
                backToTop.show();
            } else {
                backToTop.hide();
            }
        });

    }
}

$(document).ready(function() {
  fixedCorder();
  backToTop();
});
