var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    if (currentSlide < 10 && slidesCount < 10) {
      $(sliderCounter).text('0' + currentSlide + ' - 0' + slidesCount)
    }
    else if (currentSlide < 10 && slidesCount >= 10) {
      $(sliderCounter).text('0' + currentSlide + ' - ' + slidesCount)
    }
    else {
      $(sliderCounter).text(currentSlide + ' - ' + slidesCount)
    }
  };

  $slider.on('init', function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></button>'
  });
}

var $slider__aboutPage = $('.sliderAboutPage');

if ($slider__aboutPage.length) {
  var currentSlide__aboutPage;
  var slidesCount__aboutPage;
  // $('.sliderAboutPage').append('<div class="slider__counter"></div>')
  // var sliderCounter__aboutPage = $('.slider__counter');
  var sliderCounter__aboutPage = document.createElement('div');
  sliderCounter__aboutPage.classList.add('slider__counter');

  var updateSliderCounter__aboutPage = function (slick, currentIndex) {
    currentSlide__aboutPage = slick.slickCurrentSlide() + 1;
    slidesCount__aboutPage = slick.slideCount;
    if (currentSlide__aboutPage < 10 && slidesCount__aboutPage < 10) {
      $(sliderCounter__aboutPage).text('0' + currentSlide__aboutPage + ' - 0' + slidesCount__aboutPage)
    }
    else if (currentSlide__aboutPage < 10 && slidesCount >= 10) {
      $(sliderCounter__aboutPage).text('0' + currentSlide__aboutPage + ' - ' + slidesCount__aboutPage)
    }
    else {
      $(sliderCounter__aboutPage).text(currentSlide__aboutPage + ' - ' + slidesCount__aboutPage)
    }
  };

  $slider__aboutPage.on('init', function (event, slick) {
    $slider__aboutPage.append(sliderCounter__aboutPage);
    updateSliderCounter__aboutPage(slick);
  });
  var l = 0;
  var myInterval1;
  var myInterval2;
  $slider__aboutPage.on('beforeChange', function (event, slick, currentSlide) {
    myInterval1 = setInterval(() => {
      l++;
      $('.sliderAboutPage__item:nth-child(2n)').css('transform', 'translateY(' + l + '%)');
      $('.sliderAboutPage__item:nth-child(2n + 1)').css('transform', 'translateY(' + parseInt(l * -1) + '%)');
    }, 1);
    console.log(l);
    setTimeout(() => {
      clearInterval(myInterval1);
    }, 100);
  });
  $slider__aboutPage.on('afterChange', function (event, slick, currentSlide) {
    $('.sliderAboutPage__item:nth-child(2n)').css('margin-top', '55px');
    console.log(l);
    myInterval2 = setInterval(() => {
      l--;
      $('.sliderAboutPage__item:nth-child(2n)').css('transform', 'translateY(' + l + '%)');
      $('.sliderAboutPage__item:nth-child(2n + 1)').css('transform', 'translateY(' + parseInt(l * -1) + '%)');
    }, 1);
    updateSliderCounter__aboutPage(slick, currentSlide__aboutPage);
    setTimeout(() => {
      clearInterval(myInterval2);
      l = 0;
    }, 100);
  });

  $slider__aboutPage.slick({
    arrows:true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // arrows: false,
        }
      }
    ]
  });
}

var $slider__comments = $('.comments');

if ($slider__comments.length) {
  var currentSlide__comments;
  var slidesCount__comments;
  var sliderCounter__comments = document.createElement('div');
  sliderCounter__comments.classList.add('slider__counter');

  var updateSliderCounter__comments = function (slick, currentIndex) {
    currentSlide__comments = slick.slickCurrentSlide() + 1;
    slidesCount__comments = slick.slideCount;
    if (slidesCount__comments < 10 && slidesCount__comments < 10) {
      $(sliderCounter__comments).text('0' + currentSlide__comments + ' - 0' + slidesCount__comments)
    }
    else if (currentSlide__comments < 10 && slidesCount__comments >= 10) {
      $(sliderCounter__comments).text('0' + currentSlide__comments + ' - ' + slidesCount__comments)
    }
    else {
      $(sliderCounter__comments).text(currentSlide__comments + ' - ' + slidesCount__comments)
    }
  };

  $slider__comments.on('init', function (event, slick) {
    $slider__comments.append(sliderCounter__comments);
    updateSliderCounter__comments(slick);
  });

  $slider__comments.on('afterChange', function (event, slick, currentSlide__comments) {
    updateSliderCounter__comments(slick, currentSlide__comments);
  });

  $slider__comments.slick({
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
}
