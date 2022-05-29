$('.banner__slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 6000,
});

$('.miniNews__slides').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: `<button><img src="images/icons/left.svg" alt="img"></button>`,
    nextArrow: `<button><img src="images/icons/right.svg" alt="img"></button>`,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: $('.miniNews__dots'),
    responsive: [
        {
            breakpoint: 567,
            settings: {
                infinite: false,
            }
        }
    ]
});

$('.miniGallery__items-slider').slick({
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: $('.miniGallery__dots'),
});


$('.about__items').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    focusOnSelect: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
    cssEase: 'linear',
});

