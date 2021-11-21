new Vue({
  el: '#app',
  data() {
    return {
      isMobile: false,
      isDarkWrapper: false,
      height: null,
      width: null,
    }
  },
  methods: {
    matchWindow() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    toggleMobile() {
      this.isMobile = !this.isMobile
      if (this.isMobile) {
        this.isDarkWrapper = true
      } else {
        this.isDarkWrapper = false
      }
    }
  },
  watch: {
    width() {
      this.isDarkWrapper = this.isMobile = false
    }
  },
  created() {
    window.addEventListener('resize', this.matchWindow);
  },
  mounted() {
    this.matchWindow()
  }
})

$('.banner-slider').slick({
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: $('.banner-slider__dots'),
});

$('.products__slider').slick({
  infinite: false,
  arrows: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 300,
  appendDots: $('.products__slider-dots'),
  prevArrow: '.products-left',
  nextArrow: '.products-right',
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$("#phone").mask("+7 (h99) 999-99-99");

$('.object-item__slider-for').slick({
  infinite: false,
  arrows: true,
  dots: false,
  slidesToShow: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: '.object-left',
  nextArrow: '.object-right',
  asNavFor: '.object-item__slider-nav',
});

$('.object-item__slider-nav').slick({
  infinite: false,
  arrows: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  asNavFor: '.object-item__slider-for',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.objects__slider').slick({
  infinite: true,
  arrows: true,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 300,
  prevArrow: '<div class="arrows object-left"><i class="bi bi-chevron-left"></i></div>',
  nextArrow: '<div class="arrows object-right"><i class="bi bi-chevron-right"></i></div>',              
  autoplay: true,
  autoplaySpeed: 4000,
  centerPadding: '30px',
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
        adaptiveHeight: false,
      }
    }
  ]
});

$('.company-certificates__slider').slick({
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 300,
  appendDots: $('.company-certificates__slider-dots'),
  prevArrow: '.company-certificates-left',
  nextArrow: '.company-certificates-right',
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

$('.about__slider').slick({
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: $('.about__slider-dots'),
  prevArrow: '.about-left',
  nextArrow: '.about-right',
});




