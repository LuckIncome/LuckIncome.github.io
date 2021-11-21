$("#show-body").click(function () {
    $("#show-body").toggleClass("bi-x");
    $("#show-body-menu").toggleClass("header-mobile__body-show");
    $("#show-bottom-menu").removeClass("bottom__menu-show");
    /* document.body.classList.toggle('stop-body'); */
});


$("#shedule-text").click(function () {
    $("#shedule-text-show").toggleClass("shedule-text-show");
});

$("#categoryes-mobile").click(function () {
    $("#categoryes-mobile-btn").toggleClass("bi-x");
    $("#categoryes-mobile-show").toggleClass("categoryes-mobile-show");
});

$("#show-bottom").click(function () {
    $("#bi-close").toggleClass("bi-x");
    $("#show-bottom-menu").toggleClass("bottom__menu-show");
});

$("#modale").click(function() {
    $("#modale-hide").toggleClass("modale-hide");
    document.body.classList.toggle('stop-body');
});
$("#modale-close").click(function() {
    $("#modale-hide").removeClass("modale-hide");
    document.body.classList.remove('stop-body');
});

$("#modale-thank").click(function() {
    $("#modale-hide").removeClass("modale-hide");
    document.body.classList.remove('stop-body');
    $("#modale-thank-hide").toggleClass("modale-hide");
    document.body.classList.toggle('stop-body');
});
$("#modale-thank-close").click(function() {
    $("#modale-thank-hide").removeClass("modale-hide");
    document.body.classList.remove('stop-body');
});


const catBtn = document.querySelector('.btn-cat'),
    catInner = document.querySelector('.header__catalog__inner'),
    darkBlock = document.querySelector('.dark-block'),
    sheduleBtn = document.querySelector('.bottom__shedule');
let sheduleText = document.querySelector('.shedule-text');
catBtn.addEventListener('click', (e) => {
    e.preventDefault();
    catInner.classList.toggle('cat-inner');
    catBtn.classList.toggle('selected-btn');
    darkBlock.classList.toggle('dark-block-hidden');
    document.body.classList.toggle('stop-body');
});

darkBlock.addEventListener('click', () => {
    catInner.classList.toggle('cat-inner');
    catBtn.classList.toggle('selected-btn');
    darkBlock.classList.toggle('dark-block-hidden');
    document.body.classList.toggle('stop-body');
});

sheduleBtn.addEventListener('click', () => {
    sheduleText.classList.toggle('show-text');
});

$('[type="tel"]').mask('+7 (999) 999-99-99');





