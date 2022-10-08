var Swipes__promo = new Swiper('.swiper-promo', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1500,
  effect: 'slide',
  loop: true,
  navigation: {
    nextEl: '.swiper-arrows--right',
    prevEl: '.swiper-arrows--left',
  },
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "horizontal",
    }
  }
});
var Swipes__ex = new Swiper('.swiper-excluziv', {
  direction: 'horizontal',
  lazy: true,
  slidesPerView: 5,
  speed: 1500,
  effect: 'slide',
  loop: true,
  navigation: false,
  pagination: false,
  autoplay: false,
  breakpoints: {
    2560: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
    380: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  }
});
var Swipes__gallery = new Swiper('.swiper-gallery', {
  direction: 'horizontal',
  lazy: true,
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 1500,
  effect: 'slide',
  loop: true,
  navigation: {
    nextEl: '.nav_right',
    prevEl: '.nav_left',
  },
  pagination: false,
  autoplay: {
    delay: 4000,
  },
});
var Swipes__plans1 = new Swiper('.swiper-plans1', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  navigation: {
    nextEl: '.swiper-plansArrows--right',
    prevEl: '.swiper-plansArrows--left',
  },
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "vertical",
    }
  }
});
var Swipes__plans2 = new Swiper('.swiper-plans2', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  navigation: false,
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "vertical",
    }
  }
});
Swipes__plans2.controller.control = this.Swipes__plans1;
Swipes__plans1.controller.control = this.Swipes__plans2;

var Swipes__plans3 = new Swiper('.swiper-plans3', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  navigation: {
    nextEl: '.swiper-plansArrows--right',
    prevEl: '.swiper-plansArrows--left',
  },
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "vertical",
    }
  }
});
var Swipes__plans4 = new Swiper('.swiper-plans4', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  navigation: false,
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "vertical",
    }
  }
});
Swipes__plans4.controller.control = this.Swipes__plans3;
Swipes__plans3.controller.control = this.Swipes__plans4;

var Swipes__plans5 = new Swiper('.swiper-plans5', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  navigation: {
    nextEl: '.swiper-plansArrows--right',
    prevEl: '.swiper-plansArrows--left',
  },
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "vertical",
    }
  }
});
var Swipes__plans6 = new Swiper('.swiper-plans6', {
  direction: 'horizontal',
  lazy: true,
  // spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  navigation: false,
  pagination: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      direction: "vertical",
    }
  }
});
Swipes__plans6.controller.control = this.Swipes__plans5;
Swipes__plans5.controller.control = this.Swipes__plans6;
