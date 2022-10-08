// event pada saat link <a> diklik
$('.page-scroll').on('click', function(e){
    e.preventDefault();
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    // $('body').animate -> perlu pakai value 'html, body' jika tidak jalan
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
});

// parallax
$(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': `translate(0px, ${windowScroll/4}%)`
    });
    $('.jumbotron h1').css({
        'transform': `translate(0px, ${windowScroll/2}%)`
    });
    $('.jumbotron p').css({
        'transform': `translate(0px, ${windowScroll/1.2}%)`
    });
});
