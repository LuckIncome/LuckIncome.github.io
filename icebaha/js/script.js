// $('.clients')

// var swiper = new Swiper(".clients", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     // pagination: {
//     //     el: ".swiper-pagination",
//     //     clickable: true,
//     // },
// });

var Swiper__clients = new Swiper('.swiper-clients', {
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    navigation: false,
    pagination: false,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});
var Swipes__promo = new Swiper('.swiper-promo', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        // when window width is >= 992px
        992: {
            direction: "vertical",
        }
    }
});
var Swipes__promo2 = new Swiper('.swiper-promo2', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        // when window width is >= 992px
        992: {
            direction: "vertical",
        }
    }
});
Swipes__promo2.controller.control = this.Swipes__promo;
if($('.swiper-promo2').length != 0) {
    Swipes__promo.controller.control = this.Swipes__promo2;
}
$('.swiper-promo').bind('selectstart dragstart', function(e) {
    e.preventDefault();
    return false;
});
$('.swiper-promo2').bind('selectstart dragstart', function(e) {
    e.preventDefault();
    return false;
});
$('.swiperDream').bind('selectstart dragstart', function(e) {
    e.preventDefault();
    return false;
});
// $(".swiper-promo").hover(function(){
//     Swipes__promo.on('slideChangeTransitionStart', function (a) {
//         realIndex = Swipes__promo.realIndex;
//         Swipes__promo2.slideTo(realIndex);
//         console.log('slide: ' + Swipes__promo.realIndex)
//         console.log('slide2: ' + Swipes__promo2.realIndex)
//     });
// });
var Swiper__dream = new Swiper('.swiperDream', {
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    navigation: {
        nextEl: '.swiperDream-button-next',
        prevEl: '.swiperDream-button-prev',
    },
    pagination: false,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
});
var Swipes__product1 = new Swiper('.swiper-product', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: false,
    pagination: {
        el: '.swiper-poginationProduct',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});
var Swipes__productItem1 = new Swiper('.swiper-productItem1', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: false,
    pagination: {
        el: '.pogination_productItem1',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});
var Swipes__productItem2 = new Swiper('.swiper-productItem2', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: false,
    pagination: {
        el: '.pogination_productItem2',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});
$(".swiper-promo").mouseenter(function(){
    Swipes__promo.autoplay.stop();
});
$(".swiper-clients").mouseenter(function(){
    Swiper__clients.autoplay.stop();
});
$(".swiper-product").mouseenter(function(){
    Swipes__product1.autoplay.stop();
});
$(".swiper-productItem1").mouseenter(function(){
    Swipes__productItem1.autoplay.stop();
});
$(".swiper-productItem2").mouseenter(function(){
    Swipes__productItem2.autoplay.stop();
});
$(".swiper-promo").mouseleave(function(){
    Swipes__promo.autoplay.start();
});
$(".swiper-clients").mouseleave(function(){
    Swiper__clients.autoplay.start();
});
$(".swiper-product").mouseleave(function(){
    Swipes__product1.autoplay.start();
});
$(".swiper-productItem1").mouseleave(function(){
    Swipes__productItem1.autoplay.start();
});
$(".swiper-productItem2").mouseleave(function(){
    Swipes__productItem2.autoplay.start();
});

var container = $('.container').css('margin-left');
var container_width = $('.container').css('width');
container_width = container_width.split('px');
container_width = container_width[0];

//promo setting position
function promo() {
   if ($('.promo').length != 0) {
      var coords = $('.promo__right').offset();
   }


   for (let i = 1; i <= $('.header__menu li').length; i++) {
      // console.log($('.header__menu li:nth-child(' + i + ')').offset());
      if ($('.header__menu li:nth-child(' + i + ')')[0].childNodes[0].innerHTML == 'Статьи') {
         let blog = $('.header__menu li:nth-child(' + i + ')').offset().left;
         blog = parseInt(blog - 15);
         $('.promo__left').css('min-width', blog + 'px');
         // console.log('left: ' + $('.promo__left').css('min-width'));
         $('.promo__right').css('min-width', 'calc(100% - ' + blog + 'px');
         // console.log('right: ' + $('.promo__right').css('min-width'));
      }

      if ($('.promo').length != 0) {
         let a = coords.left;
         a = parseInt(a);
         // console.log('promo__right: ' + a);

         if ($('.header__menu li:nth-child(' + i + ') a').offset().left >= a) {
            $('.header__menu li:nth-child(' + i + ') a').css('color', '#FFFFFF');
         }
         else {
            $('.header__menu li:nth-child(' + i + ') a').css('color', '#636363');
         }
      }
      else {
         $('.header__feedback a').css('color', '#636363');
      }
   }
   if ($('.promo__img').length != 0) {
      $('.promo__img').css('padding-left', container);
   }

   if ($('.contactsPage').length != 0) {
       let map_cont = $('.container').css('width');
       map_cont = map_cont.split('px');
       map_cont = $(window).width() - parseInt(container + map_cont);
           $('.contactsPage .maps').css('right', container  );
   }
    if ($('.productsPage__production').length != 0) {
        let map_cont = $('.container').css('width');
        map_cont = map_cont.split('px');
        map_cont = $(window).width() - parseInt(container + map_cont);
        $('.productsPage__production .right').css('right', container  );
        $('.promo__left').css('min-height', '660px');
        let product__right;
        if($('.small').length != 0){
            product__right = $('.productsPage__production .large').offset().top;
        }
        else {
            product__right = $('.productsPage__production picture').offset().top;
        }
        product__right = product__right + 493;
        let route__corent = $('.route__corent').offset().top;
        route__corent = route__corent + 18;
        $('.productsPage__production .right').css('top', route__corent + 'px');
        $('.promo__right').css('min-height', product__right + 'px');
        // $('.productsPage__production .left p').css('max-width', '90%');
        let promo__left_width = $('.promo__right').offset().left;
        container = $('.container').offset().left;
        promo__left_width = promo__left_width - container;
        // console.log(promo__left_width)
        for (let i = 0; i < $('.productsPage__production .left p').length; i++) {
            if($('.productsPage__production .left p').eq(i).offset().top > product__right - 50) {
                $('.productsPage__production .left p').eq(i).css('max-width', (promo__left_width - 25) + 'px');
            }
        }
    }
    if($('.swiper-poginationProduct').length != 0) {
        let  swiperPoginationProduct = $('.container').offset().left - 40;
        $('.swiper-poginationProduct').css('right', swiperPoginationProduct + 'px');
    }
    if($('.swiper-productItem1').length != 0) {
        let swiperProductItem1 = $('.container').offset().left - 40;
        let swiperProductItem1_top = $('.swiper-productItem1').offset().top;
        let swiperProductItem1_height = $('.swiper-productItem1_pic img').css('height');
        swiperProductItem1_height = swiperProductItem1_height.split('px');
        swiperProductItem1_height = parseInt(swiperProductItem1_height[0] / 2);
        console.log(swiperProductItem1_top)
        console.log(swiperProductItem1_height)
        $('.pogination_productItem1').css('left', swiperProductItem1 + 'px');
        $('.pogination_productItem1').css('top', (swiperProductItem1_top + swiperProductItem1_height) + 'px');
    }
    if($('.swiper-productItem2').length != 0) {
        let swiperProductItem = $('.swiper-productItem2_pic').offset().left;
        let swp__width_img = $('.swiper-productItem2_pic img').css('width');
        swp__width_img = swp__width_img.split('px');
        swp__width_img = parseInt(swp__width_img[0]);
        let swiperProductItem_top = $('.swiper-productItem2').offset().top;
        let swiperProductItem_height = $('.swiper-productItem2_pic img').css('height');
        swiperProductItem_height = swiperProductItem_height.split('px');
        swiperProductItem_height = parseInt(swiperProductItem_height[0] / 2);
        console.log(swiperProductItem_top)
        console.log(swiperProductItem_height)
        $('.pogination_productItem2').css('left', (swiperProductItem + swp__width_img) + 30 + 'px');
        $('.pogination_productItem2').css('top', (swiperProductItem_top + swiperProductItem_height) + 'px');
    }
    if($('.swp').length != 0) {
        let  swp_pos = $('.swiper-pagination').css('height');
        swp_pos = swp_pos.split('px');
        swp_pos = parseInt(swp_pos[0]);
        // console.log(swp_pos)
        let swp_posImgHeight = $('.swp picture img').css('height');
        swp_posImgHeight = swp_posImgHeight.split('px');
        swp_posImgHeight = parseInt(swp_posImgHeight[0]);
        $('.swiper-pagination').css('top', (swp_posImgHeight  - swp_pos) + 'px');
        $('.social__icons').css('top', (swp_posImgHeight  - 98) + 'px');
    }
}

//promo slider image & other position
function promo__slider() {
   if ($('.promo').length != 0) {
      var promo__right = $('.promo__right').offset();
      promo__right = promo__right.left;
   }

   let swp_position = $('.container').offset().left;
   swp_position = parseInt(swp_position - 40);
   let swp_positionTop;
   if ($('.swiper-container').length != 0) {
       swp_positionTop = $('.swiper-container').offset().top;
   }
   swp_positionTop += 177;
   $('.swiper-promo .swiper-pagination').css('left', (swp_position - 5) + 'px');
   $('.aboutPageSlider__pogination').css('top', swp_positionTop + 'px');
   // console.log(promo__right);
   $('.swp__right picture').css('left', parseInt(promo__right - 250) + 'px');
   // console.log($('.swp__right picture').css('left'));
   // console.log(swp_position);
   let social__icons = parseInt(swp_position) + parseInt(container_width) + 70;
   // console.log(social__icons);
   if ($('.social__icons').length != 0) {
      $('.social__icons').css('left', (social__icons + 5) + 'px');
   }

}
// Targetting all the .accordion classes
let acc = document.getElementsByClassName('accordion');
// Creating a loop to add eventListener to all .accordion classes
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        //targetting sibling of every .accordion class named .panel class
        let panel = this.nextElementSibling
        //if panel is open, then this block will close it on mouse click
        if (panel.style.maxHeight) {
            if($(this).hasClass('with-icon')) {
                panel.style.maxHeight = null;
                this.classList.remove('open');
                this.getElementsByClassName('icon')[0].innerHTML = '+';
            }
        }
        //if panel is closed, then this block will open it on mouse click
        else {
            //Removes everthing on previous accordion on new mouse click
            //by this for loop
            for (let x = 0; x < acc.length; x++) {
                if($(acc[x]).hasClass('with-icon')) {
                    acc[x].classList.remove('open');
                    acc[x].nextElementSibling.style.maxHeight = null;
                    acc[x].getElementsByClassName('icon')[0].innerHTML = '+';
                }
            }
            //if panel is closed, then these codes will open it on mouse click & set those specific rules mentioned below.
            if($(this).hasClass('with-icon')) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                this.classList.toggle('open');
                this.getElementsByClassName('icon')[0].innerHTML = '−';
            }
        }
    })
}
$('.burger-menu').click(function () {
    if ($('.sidebar').hasClass('sidebar__open')){
        $('.sidebar').toggleClass('sidebar__open');
        $('body').css('overflow', 'auto');
    }
    else {
        $('.sidebar').toggleClass('sidebar__open');
        $('body').css('overflow', 'hidden');
    }
})
$('.header__feedback picture').click(function () {
    let a = $('.header__feedback a')[0].href;
    $(location).attr('href', a);
})
//modal functions
// function positionBtn__close(contentClass, closeBtnClass) {
//    var $whatever = $(contentClass);
//    let closeBtn = $(closeBtnClass);
//    // let closeBtn__position = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
//    let closeBtn__position = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
//    console.log('closeBtn__position: ' + closeBtn__position);
//    $(closeBtnClass).css('left', closeBtn__position + 'px')
// }
function openModal(contentClass, closeBtnClass) {
    $(contentClass).css('display', 'flex');
    $('body').css('overflow', 'hidden');
    $(closeBtnClass).on('click', function () {
        $(contentClass).css('display', 'none');
        $('body').css('overflow', 'auto');
    });
}
//burder menu
$('.burger-menu').on('click', function() {
    $(this).toggleClass("burger-menu--opened");
    $(this).toggleClass("burger-menu--closed");
});


//set setting
if (screen.width < 768) {
    function prdHeight () {
        if($('.contactsPage').length != 0) {
            let prd_height = $('.info .column').eq(2).css('height');
            prd_height = prd_height.split('px');
            prd_height = parseInt(prd_height[0]);
            console.log($('.info .column'))
            $('.promo .promo__left').css('min-height', (prd_height + 370) + 'px');
        }
        if($('.productsPage').length != 0) {
            let prd_height = $('.productsPage__production .left').css('height');
            prd_height = prd_height.split('px');
            prd_height = parseInt(prd_height[0]);
            $('.promo .promo__left').css('min-height', (prd_height + 210) + 'px');
        }
        if($('.aboutPageSlider').length != 0) {
            let prd_height = $('.aboutPageSlider').css('height');
            prd_height = prd_height.split('px');
            prd_height = parseInt(prd_height[0]);
            let prd_posit = $('.aboutPageSlider').offset().top;
            $('.aboutPageSlider__pogination').css('top', (prd_height + prd_posit + 10) + 'px');
        }
    }
    setTimeout(() => {

        prdHeight ();

        let timer = 0;
        let interval = setInterval(() => {
            prdHeight ();
        }, 1000);
        setTimeout(() => {
            clearInterval(interval);
            console.log('clearFunction');
        }, 7900);
        // positionBtn__close('.modal__content', '.modal__close');
        $('input[type="tel"]').mask("+9 (999) 999-99-99");
        //menu set width end
    }, 1000);
}
else {
    setTimeout(() => {
        promo();
        promo__slider();

        let timer = 0;
        let interval = setInterval(() => {
            promo();
            promo__slider();
            timer++;
            console.log('Function in ' + timer + 's');
        }, 1000);
        setTimeout(() => {
            clearInterval(interval);
            console.log('clearFunction');
        }, 7900);
        // positionBtn__close('.modal__content', '.modal__close');
        $('input[type="tel"]').mask("+9 (999) 999-99-99");
        //menu set width start
        $('.list ul')[0].style.minWidth = '150px';
        //menu set width end
    }, 1000);
}


if ($('.contactsPage').length > 0) {
    console.log($('img.svg'));

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    // run funtions
}

if ($('.editors').length > 0) {
    // here write functions
    function removeStyleAttr(tag) {
        if ($('.editors ' + tag).length != 0) {
            $('.editors ' + tag).removeAttr("style");
        }
    }
    function haveOrNot(string, formatFile) {
        if(string.indexOf(formatFile) >= 0) {
            let str = string.split(formatFile);
            return [true, str[0]];
        }
        else {
            return [false, '']
        }
    }
    function imgWrap() {
        if($('.editors img').length != 0) {
            for (let i = 0; i < $('.editors img').length; i++) {
                $('.editors img').eq(i).wrap('<picture></picture>')
                let src = $('.editors img').eq(i)[0].attributes[0].nodeValue;
                let webp = haveOrNot(src, '.webp');
                let png = haveOrNot(src, '.png');
                let jpg = haveOrNot(src, '.jpg');
                let jpeg = haveOrNot(src, '.jpeg');
                if(webp[0]) {
                    console.log('webp');
                    console.log(webp);
                    $( "<source srcset=" + src + " type='image/webp'>").insertBefore( $('.editors img').eq(i));
                    $( "<source srcset=" + src + " type='image/pjpeg'>").insertBefore( $('.editors img').eq(i));
                }
                else if(png[0]) {
                    console.log('png');
                    console.log(png);
                    $( "<source srcset=" + png[1] + '.webp' + " type='image/webp'>").insertBefore( $('.editors img').eq(i));
                    $( "<source srcset=" + png[1] + '.webp' + " type='image/pjpeg'>").insertBefore( $('.editors img').eq(i));
                }
                else if(jpg[0]) {
                    console.log('jpg');
                    console.log(jpg);
                    $( "<source srcset=" + jpg[1] + '.webp' + " type='image/webp'>").insertBefore( $('.editors img').eq(i));
                    $( "<source srcset=" + jpg[1] + '.webp' + " type='image/pjpeg'>").insertBefore( $('.editors img').eq(i));
                }
                else if(jpeg[0]) {
                    console.log('jpeg');
                    console.log(jpeg);
                    $( "<source srcset=" + jpeg[1] + '.webp' + " type='image/webp'>").insertBefore( $('.editors img').eq(i));
                    $( "<source srcset=" + jpeg[1] + '.webp' + " type='image/pjpeg'>").insertBefore( $('.editors img').eq(i));
                }
                else {
                    console.log('other')
                    $( "<source srcset=" + src + " type='image/webp'>").insertBefore( $('.editors img').eq(i));
                    $( "<source srcset=" + src + " type='image/pjpeg'>").insertBefore( $('.editors img').eq(i));
                }

            }
        }
    }
    function enterChange() {
        removeStyleAttr('p');
        removeStyleAttr('strong');
        removeStyleAttr('ul');
        removeStyleAttr('ol');
        removeStyleAttr('li');
        removeStyleAttr('img');
        imgWrap();
        var mas1 = [];
        var mas2 = [];
        for (let j = 0; j < $('.editors p').filter(':contains("\u00a0")').length; j++) {
            let a = $('.editors p:contains(\u00a0)').eq(j);
            let b = $('.editors p:contains(\u00a0)');

                if ($(a).next().html() == "&nbsp;") {
                    $(a).wrap('<div style="padding: 10px 0"></div>');
                    mas1.push(j)
                }
                else {
                    $(a).wrap('<div style="height: 0;"></div>');
                    // $(a).eq(j).remove();
                    mas2.push(j)
                }
                if($('.editors p').filter(':contains("\u00a0")').length == j + 1) {
                    mas1.forEach((el)=>{
                        $(b).eq(el).remove();
                    });
                    mas2.forEach((el)=>{
                        $(b).eq(el).remove();
                    });
                }
        }
    }
    // run funtions
    enterChange();
}

