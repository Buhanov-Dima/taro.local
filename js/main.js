$(document).ready(function(){

	$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });

});


$(window).scroll(function(){
    if ($(window).scrollTop() > 90) {
        $('header').addClass('fixed');
        $('.hide-white').addClass('open');
        $('.hide-gray').addClass('hidden');
    }
    else {
        $('header').removeClass('fixed');
        $('.hide-white').removeClass('open');
        $('.hide-gray').removeClass('hidden');
    };
});
