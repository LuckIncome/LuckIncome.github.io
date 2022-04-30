$('.banner__slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.banner__arrow-left',
    nextArrow: '.banner__arrow-right',
    appendDots: $('.banner__dots'),
    autoplay: true,
    autoplaySpeed: 4000,
});

$('.reviews__slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.reviews__arrow-left',
    nextArrow: '.reviews__arrow-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
