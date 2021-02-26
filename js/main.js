$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        startPosition:0,
        dots:false,
        navText: ['<img src="img/svg/left.svg">','<img src="img/svg/right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});