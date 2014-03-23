function resize_logo() {
    var screenHeight = $(window).height();
    var headerHeight = $('#header').height();
    var padding = (screenHeight-headerHeight-50)/2
    document.getElementById("header").style["padding-top"] = padding+'px';
    document.getElementById("header").style["padding-bottom"] = padding+'px';
}

function resize() {

    var $window = $(window),
    $simnav = $('nav');

    if ($window.width() < 601) {
        console.log("here");
        $simnav.removeClass('sim-navbar');
    }

    else {
        $simnav.addClass('sim-navbar');
    }
}

$(document).ready(function() {
    
    resize_logo();
    resize();

    $(".navbar").hide();

    $('.curtains').curtain({
               scrollSpeed: 300,
               curtainLinks: '.curtain-links',
    });  
});

$(window).resize(function () {
    resize_logo();
    resize();
});    

$(document).scroll(function() {
           
    var docScroll = $(document).scrollTop();
    var headerHeight = $("#header").innerHeight();
            
    if(docScroll >= headerHeight ) {
        $(".navbar").fadeIn(300);
    }
    else {
        $(".navbar").fadeOut(300);
    }
}); 