function showMenu() {
    if (!$('.sidebar').hasClass('sidebar-show')) {
        $('.sidebar').addClass('sidebar-show');
    } else {
        $('.sidebar').removeClass('sidebar-show')
    }
}

const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            //this is if the accordion is open
            this.classList.toggle("active");
            content.style.maxHeight = null;
            if ($(window).width() <= 768) {
                let acc = $('.accordion__info');
                let mt = acc.css('marginTop');
                let arr = mt.split('px');
                mt = parseInt(arr[0]) + 100;
                console.log(mt);
                acc.css('marginTop', mt + "px");
                console.log($('.accordion__info').css('marginTop'));

            }
        } else {
            //if the accordion is currently closed
            $('.item-content').attr('style', null);
            $('.item-header').removeClass("active");
            this.classList.toggle("active");
            content.style.maxHeight = content.scrollHeight + "px";
            if ($(window).width() <= 768) {
                let acc = $('.accordion__info');
                let mt = acc.css('marginTop');
                let arr = mt.split('px');
                mt = parseInt(arr[0]) - 100;
                console.log(mt);
                acc.css('marginTop', mt + "px");
                console.log($('.accordion__info').css('marginTop'));
            }
        }
    };
});
if ($(window).width() >= '1201') {
    var translaytOne = 300;
}
if ($(window).width() <= '1200') {
    var translaytOne = 200;
}
if ($(window).width() <= '768') {
    var translaytOne = 0;
}
gsap.to(".promo__photo_2", {
    scrollTrigger: {
        trigger: ".promo",
        scrub: true,
        pin: false,
        start: "center 70%",
        end: "bottom bottom"
    },
    y: translaytOne,
    duration: 0.3,
    ease: "none"
});
if ($(window).width() >= '1201') {
    var translaytTwo = 500;
}
if ($(window).width() <= '1200') {
    var translaytTwo = 400;
}
if ($(window).width() <= '768') {
    var translaytTwo = 0;
}
gsap.to(".promo__photo_3", {
    scrollTrigger: {
        trigger: ".promo",
        scrub: true,
        pin: false,
        start: "center 70%",
        end: "bottom bottom",
        toggleActions: "play none none reset",
    },
    y: translaytTwo,
    duration: 0.3,
    ease: "none",
});

if ($(window).width() >= '1201') {
    var translaytThree = 300;
}
if ($(window).width() <= '1200') {
    var translaytThree = 200;
}
if ($(window).width() <= '768') {
    var translaytThree = 0;
}
gsap.to(".promo__photo_4", {
    scrollTrigger: {
        trigger: ".promo",
        scrub: true,
        pin: false,
        start: "center 70%",
        end: "bottom bottom"
    },
    y: translaytThree,
    duration: 0.3,
    ease: "none"
});

if ($(window).width() >= '1201') {
    var translaytFour = 80;
}
if ($(window).width() <= '1200') {
    var translaytFour = 50;
}
if ($(window).width() <= '768') {
    var translaytFour = 0;
}
gsap.to(".small", {
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        pin: false,
        start: "center 80%",
        end: "center top"
    },
    y: translaytFour,
    duration: 0.3,
    ease: "none"
});

// Targetting all the .accordion classes
let acc = document.getElementsByClassName('accordion');
// Creating a loop to add eventListener to all .accordion classes
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        //targetting sibling of every .accordion class named .panel class
        let panel = this.nextElementSibling
        //if panel is open, then this block will close it on mouse click
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.classList.remove('open');
            this.getElementsByClassName('icon')[0].innerHTML = '+';
        }
        //if panel is closed, then this block will open it on mouse click
        else {
            //Removes everthing on previous accordion on new mouse click       
            //by this for loop
            for (let x = 0; x < acc.length; x++) {
                acc[x].classList.remove('open');
                acc[x].nextElementSibling.style.maxHeight = null;
                acc[x].getElementsByClassName('icon')[0].innerHTML = '+';
            }
            //if panel is closed, then these codes will open it on mouse click & set those specific rules mentioned below.  
            panel.style.maxHeight = panel.scrollHeight + 'px';
            this.classList.toggle('open');
            this.getElementsByClassName('icon')[0].innerHTML = '−';
        }
    })
}
$('.info__searchBtn').on('click', function () {
    if ($('.info__input').css('display') == 'none') {
        $('.info__input').css('display', 'block');
        const myInterval = setInterval(() => {
            function lest(a) {
                if (a != null) {
                    $('.info__input').css('width', a);
                }
                return $('.info__input').css('width');
            }
            var lest1 = lest();
            var arry = lest1.split('px');
            lest1 = parseInt(arry[0]) + 5;
            lest(lest1 + 'px')
            if (arry[0] == '250') {
                clearInterval(myInterval);
            }
            // console.log(lest1);
        }, 1);
    }
    else {
        const myInterval = setInterval(() => {
            function lest(a) {
                if (a != null) {
                    $('.info__input').css('width', a);
                }
                return $('.info__input').css('width');
            }
            var lest1 = lest();
            var arry = lest1.split('px');
            lest1 = parseInt(arry[0]) - 5;
            lest(lest1 + 'px')
            if (arry[0] == '20') {
                clearInterval(myInterval);
                $('.info__input').css('display', 'none');
            }
            // console.log(lest1);
        }, 4);
    }
});
$('.modal').on('click', function () {
    $('.modal').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.modal__close').on('click', function () {
    $('.modal').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.modal__signClose').on('click', function () {
    $('.modal__signUp').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.modal__reaadAllClose').on('click', function () {
    $('.modal__readAll').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.modal__addCommentClose').on('click', function () {
    $('.modal__addComment').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.modal__viewClose').on('click', function () {
    $('.modal__viewOriginal').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.modal__thanksClose').on('click', function () {
    $('.modal__thanks').css('display', 'none');
    $('body').css('overflow', 'auto');
});
$('.play').on('click', function () {
    $('.modal').css('display', 'flex');
    $('body').css('overflow', 'hidden');
});
$('.item--list .item__title').on('click', function (a) {
    $(a)[0].currentTarget.lastChild.style.transform = 'rotate(180deg)';
    if ($(a)[0].currentTarget.parentNode.childNodes[3].style.transform == 'scaleY(1)') {
        $(a)[0].currentTarget.parentNode.childNodes[3].style.transform = 'scaleY(0)';
        $(a)[0].currentTarget.parentNode.childNodes[3].style.display = 'none';
        $(a)[0].currentTarget.parentNode.childNodes[1].style.marginBottom = '20px';
        $(a)[0].currentTarget.parentNode.childNodes[1].childNodes[1].classList.remove("no-hover");
    }
    else {
        $(a)[0].currentTarget.parentNode.childNodes[3].style.transform = 'scaleY(1)';
        $(a)[0].currentTarget.parentNode.childNodes[3].style.display = 'block';
        $(a)[0].currentTarget.parentNode.childNodes[3].style.position = 'relative';
        $(a)[0].currentTarget.parentNode.childNodes[1].style.marginBottom = '0 ';
        $(a)[0].currentTarget.parentNode.childNodes[1].childNodes[1].classList.add("no-hover");
    }
    console.log($(a)[0].currentTarget.parentNode.childNodes[1].childNodes[1]);

});
$('.menu__list--mobile').on('click', function (a) {
    // $(a)[0].currentTarget.lastChild.style.transform = 'rotate(180deg)';
    if ($(a)[0].currentTarget.childNodes[5].style.transform == 'scaleY(1)') {
        $(a)[0].currentTarget.childNodes[5].style.transform = 'scaleY(0)';
        $(a)[0].currentTarget.childNodes[5].style.paddingTop = '30px';
        $(a)[0].currentTarget.parentNode.childNodes[1].childNodes[1].childNodes[1].classList.remove("no-hover");
    }
    else {
        $(a)[0].currentTarget.childNodes[5].style.transform = 'scaleY(1)';
        $(a)[0].currentTarget.childNodes[5].style.paddingTop = '15px';
        $(a)[0].currentTarget.parentNode.childNodes[1].childNodes[1].childNodes[1].classList.add("no-hover");
    }
    console.log($(a)[0].currentTarget.childNodes[5]);

});

function openMenu() {
    $('.sidebar').toggleClass('sidebar-show')
}
function openSignUp() {
    $('.modal__signUp').css('display', 'flex');
    $('body').css('overflow', 'hidden');
}
function openAddComment() {
    $('.modal__addComment').css('display', 'flex');
    $('body').css('overflow', 'hidden');
}
function thanks() {
    $('.modal__thanks').css('display', 'flex');
    $('body').css('overflow', 'hidden');
}
function readMore(a) {
    console.log($(a).parent().parent());
    $('.modal__readAll').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    // console.log($('.modal__readAll'));
    $('.modal__readAll')[0].childNodes[1].childNodes[7].innerHTML = $(a).parent().parent()[0].childNodes[7].innerHTML;
    $('.modal__readAll')[0].childNodes[1].childNodes[3].innerHTML = $(a).parent().parent()[0].childNodes[1].innerHTML;
    $('.modal__readAll')[0].childNodes[1].childNodes[5].innerHTML = $(a).parent().parent()[0].childNodes[3].innerHTML;
}
function viewOriginal(a) {
    console.log($(a).parent().parent());
    $('.modal__viewOriginal').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    // console.log($('.modal__viewOriginal')[0].childNodes[3].childNodes[1].attributes[0].value);
    $('.modal__viewOriginal')[0].childNodes[3].childNodes[1].attributes[0].value = $(a).parent().parent()[0].childNodes[9].childNodes[5].childNodes[1].attributes[0].value;
}
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});
function galleryGrid() {
    console.log($('.gallery a').length);
    var a = [1, 1, 3, 1, 2];
    var b = [2, 1, 2, 2, 3];
    var c = [3, 2, 3, 2, 3];
    var d = [4, 3, 4, 1, 3];
    var e = 0;
    var f = 0;
    var g = 0;
    for (let i = 1; i <= $('.gallery a').length; i++) {
        if (a[0] == i){
            $('.gallery a:nth-child(' + i + ')').css('grid-row-start', a[1]);
            $('.gallery a:nth-child(' + i + ')').css('grid-row-end', a[2]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-start', a[3]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-end', a[4]);
            a[0] = a[0] + 4;
            a[1] = a[1] + 3;
            a[2] = a[2] + 3;
            if(g == 0) {
                a[3] = a[3] + 1;
                a[4] = a[4] + 1;
                g = 1;
            }
            else {
                a[3] = a[3] - 1;
                a[4] = a[4] - 1;
                g = 0;
            }
        }
        if (b[0] == i){
            $('.gallery a:nth-child(' + i + ')').css('grid-row-start', b[1]);
            $('.gallery a:nth-child(' + i + ')').css('grid-row-end', b[2]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-start', b[3]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-end', b[4]);
            b[0] = b[0] + 4;
            b[1] = b[1] + 3;
            b[2] = b[2] + 3;
            if(e == 0) {
                b[3] = b[3] - 1;
                b[4] = b[4] - 1;
                e = 1;
            }
            else {
                b[3] = b[3] + 1;
                b[4] = b[4] + 1;
                e = 0;
            }
        }
        if (c[0] == i){
            $('.gallery a:nth-child(' + i + ')').css('grid-row-start', c[1]);
            $('.gallery a:nth-child(' + i + ')').css('grid-row-end', c[2]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-start', c[3]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-end', c[4]);
            c[0] = c[0] + 4;
            c[1] = c[1] + 3;
            c[2] = c[2] + 3;
            if(f == 0) {
                c[3] = c[3] - 1;
                c[4] = c[4] - 1;
                f = 1;
            }
            else {
                c[3] = c[3] + 1;
                c[4] = c[4] + 1;
                f = 0;
            }
        }
        if (d[0] == i){
            $('.gallery a:nth-child(' + i + ')').css('grid-row-start', d[1]);
            $('.gallery a:nth-child(' + i + ')').css('grid-row-end', d[2]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-start', d[3]);
            $('.gallery a:nth-child(' + i + ')').css('grid-column-end', d[4]);
            $('.gallery a:nth-child(' + i + ')').css('justify-self', 'center');
            d[0] = d[0] + 4;
            d[1] = d[1] + 3;
            d[2] = d[2] + 3;
        }
    }
}
setInterval(()=>{
    galleryGrid();
}, 1000);
baguetteBox.run('.gallery', {
    animation: 'fadeIn',
    noScrollbars: true
});