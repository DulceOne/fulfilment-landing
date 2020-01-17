
$(document).ready(function(){
    $("#owl-first").owlCarousel(
        {
            items: 2,
            margin: 55,
            dots: true,
            autoplay: true,
            loop: true,
        }
    );

    $("#owl-second").owlCarousel(
        {
            items: 5,
            margin: 55,
            autoplay: true,
            loop: true,
            center: true
        }
    );

    $("#owl").owlCarousel(
        {
            items: 1,
            margin: 55,
            autoplay: true,
            loop: true,
            center: true
        }
    );
});
