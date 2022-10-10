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

// efek animasi pada bagian about
$(window).on('load', function(){
    $('.pKiri').addClass('muncul');
    $('.pKanan').addClass('muncul');
});

$(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    // parallax effect untuk bagian jumbotron
    $('.jumbotron img').css({
        'transform': `translate(0px, ${windowScroll/4}%)`
    });
    $('.jumbotron h1').css({
        'transform': `translate(0px, ${windowScroll/2}%)`
    });
    $('.jumbotron p').css({
        'transform': `translate(0px, ${windowScroll/1.2}%)`
    });

    // parallax (landing) effect untuk bagian portfolio
    if(windowScroll > $('.portfolio').offset().top - 300){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 350 * (i));
        });
    }
});
