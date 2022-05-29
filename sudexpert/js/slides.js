$('.experts__slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.experts__arrows-left',
    nextArrow: '.experts__arrows-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.acts__slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.acts__arrows-left',
    nextArrow: '.acts__arrows-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$('.reviews__slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.reviews__arrows-left',
    nextArrow: '.reviews__arrows-right',
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

