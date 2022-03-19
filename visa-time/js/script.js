new Vue({
  el: '#app',
  data() {
    return {
    }
  },
  methods: {
    setlink(event) {
      localStorage.setItem('link', event.target.value)
    },
    getLink() {
      let link = localStorage.getItem('link') 
      window.location.href = link
      localStorage.setItem('link', '/')
    }
  },
  watch: {
  },
  mounted() {
  }
})

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    header.classList.remove('hide');
  }
  lastScroll = scrollPosition();
})

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$('[name="phone"]').mask("+7 (h99) 999-99-99");



$('.advantage-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  // prevArrow: `<div class="slider-arrow slider-arrow-left"><i class="bi bi-chevron-left"></i></div>`,
  // nextArrow: `<div class="slider-arrow slider-arrow-right"><i class="bi bi-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.services-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="slider-arrow slider-arrow-left"><i class="bi bi-chevron-left"></i></div>`,
  nextArrow: `<div class="slider-arrow slider-arrow-right"><i class="bi bi-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="slider-arrow slider-arrow-left"><i class="bi bi-chevron-left"></i></div>`,
  nextArrow: `<div class="slider-arrow slider-arrow-right"><i class="bi bi-chevron-right"></i></div>`,
});

$('.images-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="slider-arrow slider-arrow-left"><i class="bi bi-chevron-left"></i></div>`,
  nextArrow: `<div class="slider-arrow slider-arrow-right"><i class="bi bi-chevron-right"></i></div>`,
});

$('.blogs-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="slider-arrow slider-arrow-left"><i class="bi bi-chevron-left"></i></div>`,
  nextArrow: `<div class="slider-arrow slider-arrow-right"><i class="bi bi-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$('.employees-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="slider-arrow slider-arrow-left"><i class="bi bi-chevron-left"></i></div>`,
  nextArrow: `<div class="slider-arrow slider-arrow-right"><i class="bi bi-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



// Modal
// $("body").on("click", ".news-click", function (e) {
//   e.preventDefault();
//   var id = $(this).data("id");
//   var name = $(this).data("name");
//   var text = $(this).data("text");
//   $("#modalClick")
//       .find(".modal-title").empty().append(name).end()
//       .find(".modal-body").empty().append(text).end()
//       .modal("show");
// })
