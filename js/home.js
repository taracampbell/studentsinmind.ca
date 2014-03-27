function resize() {

    var $window = $(window),

    new_margin = Math.ceil(($window.height() - $('#header').height()) / 2);
    $('#header').css('margin-top', new_margin + 'px');
    
    $simnav = $('nav');

    if ($window.width() < 601) {
        $simnav.removeClass('sim-navbar');
    }

    else {
        $simnav.addClass('sim-navbar');
    }
}   

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

$(document).ready(function() {
    
    resize();

    $(".navbar").hide();

    $('.curtains').curtain({
               scrollSpeed: 300,
               curtainLinks: '.curtain-links',
    }); 

    $(window).resize(function () {
        resize();
    }); 
});