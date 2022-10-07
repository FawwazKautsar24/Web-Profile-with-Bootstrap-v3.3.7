// event pada saat link <a> diklik
$('.page-scroll').on('click', function(e){
    
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    // $('body').animate -> perlu pakai value 'html, body' jika tidak jalan
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
});
