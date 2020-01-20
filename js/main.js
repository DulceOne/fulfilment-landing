
$(document).ready(function(){
    $("#owl-first").owlCarousel(
        {
            items: 2,
            margin: 55,
            dots: true,
            autoplay: true,
            loop: true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots: false,
                },
                600:{
                    items:1,
                    nav:false,
                    ots: false
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        }
    );

    $("#owl-second").owlCarousel(
        {
            items: 5,
            margin: 55,
            autoplay: true,
            loop: true,
            center: true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots: false,
                },
                600:{
                    items:1,
                    nav:false,
                    ots: false
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        }
    );

    $("#owl").owlCarousel(
        {
            items: 1,
            margin: 55,
            autoplay: true,
            loop: true,
            center: true,
        }
    );

    $('.drop').click(() => {
        $('.navigation_mobile .wrapper').show()
        $('.navigation_mobile .row .close').show()
        $('.navigation_mobile .row .drop').hide()

    })

    $('.close').click(() => {
        $('.navigation_mobile .wrapper').hide()
        $('.navigation_mobile .row .close').hide()
        $('.navigation_mobile .row .drop').show()

    })

    $('.upparrow').click(function(){
        scrollTo('header')
    });

    function scrollTo(element) {
        $('html, body').animate({scrollTop:$(`#${element}`).position().top}, 500);

    }

    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true
        });
    } );
});
