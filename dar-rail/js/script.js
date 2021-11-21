new Vue({
  el: '#app',
  data() {
    return {
      isDarkWrapper: false,
    }
  },
  methods: {
    matchWindow() {
      this.infoHeight = this.$refs.infoBox.clientHeight
    },
    getLocolTab() {
      if (localStorage.getItem('tab1') === 'false') {
        this.isTab1 = false
      } else {
        this.isTab1 = true
      }
      
      if (localStorage.getItem('tab2') === 'false') {
        this.isTab2 = false
      } else {
        this.isTab2 = true
      }
      
      if (localStorage.getItem('tab3') === 'false') {
        this.isTab3 = false
      } else {
        this.isTab3 = true
      }
      
      if (localStorage.getItem('tab4') === 'false') {
        this.isTab4 = false
      } else {
        this.isTab4 = true
      }
      
      if (localStorage.getItem('tab5') === 'false') {
        this.isTab5 = false
      } else {
        this.isTab5 = true
      }
      
      if (localStorage.getItem('tab6') === 'false') {
        this.isTab6 = false
      } else {
        this.isTab6 = true
      }

      if (localStorage.getItem('tab7') === 'false') {
        this.isTab7 = false
      } else {
        this.isTab7 = true
      }

      if (localStorage.getItem('tab8') === 'false') {
        this.isTab8 = false
      } else {
        this.isTab8 = true
      }
    },
  },
  watch: {
  },
  mounted() {
    this.matchWindow()
    this.getLocolTab()
  }
})

window.addEventListener('load', function() {
  baguetteBox.run('.files');
  baguetteBox.run('.about-page__slider');
  baguetteBox.run('.certificates');
});

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

$('.advantage-slider').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="arrows advantage-left"><i class="bi bi-arrow-left"></i></div>`,
  nextArrow: `<div class="arrows advantage-right"><i class="bi bi-arrow-right"></i></div>`,
});

$('.news-slider').slick({
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: $('.news-slider-dots'),
  responsive: [
    {
      breakpoint: 1200,
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

$('.partners-slider').slick({
  infinite: true,
  arrows: false,
  dots: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  centerMode: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  // appendDots: $('.news-slider-dots'),
  responsive: [
    {
      breakpoint: 1200,
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


$("body").on("click", ".news-click", function (e) {
  e.preventDefault();
  var id = $(this).data("id");
  var name = $(this).data("name");
  var text = $(this).data("text");
  $("#modalClick")
      .find(".modal-title").empty().append(name).end()
      .find(".modal-body").empty().append(text).end()
      .modal("show");
})

$('.partners__slider ').slick({
  infinite: true,
  arrows: true,
  dots: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  prevArrow: `<div class="arrows partners-left"><i class="bi bi-arrow-left"></i></div>`,
  nextArrow: `<div class="arrows partners-right"><i class="bi bi-arrow-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


$('.banner-slider').slick({
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: $('.banner-slider-dots'),
});

// $('.about-page__slider').slick({
//   infinite: true,
//   arrows: false,
//   dots: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   speed: 500,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   // focusOnSelect: true,
//   appendDots: $('.about-page__slider-dots'),
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       }
//     }, {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });