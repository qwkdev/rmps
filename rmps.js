function scrollFooter(scrollY, heightFooter) {
    if(scrollY >= heightFooter) {
        $('footer').css({
            'bottom' : '0px'
        });
    } else {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

var f = (function() {
    var windowHeight = $(window).height(),
        footerHeight = $('footer').height(),
        heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });
    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });
    scrollFooter(window.scrollY, footerHeight);
    window.onscroll = function(){
        var scroll = window.scrollY;
        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });
        scrollFooter(scroll, footerHeight);
    }
})

$(window).on('load', f);
$(window).resize(function() {setTimeout(function(){ location.reload(true); }, 1000); });