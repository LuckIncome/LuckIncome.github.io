//preloader
$(document).ready(() => {
  setTimeout(() => {
    $('.preloader').css('display', 'none');
  }, 500);
  // $('.preloader').css('display', 'none');
});
function showPreloader() {
  $('.preloader').css('display', 'flex');
}
function hidePreloader() {
  $('.preloader').css('display', 'none');
}

//sidebar functions
$('.menuMobile').click(() => {
  if($('.menuMobile').hasClass('menuMobile--clickOut')) {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
    $('body').css('overflow', 'hidden');
  }
  else {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
    $('body').css('overflow', 'auto');
  }
  if($('.sidebar_bloor').hasClass('sidebar_bloor--clickIn')) {
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
    $('.sidebar').toggleClass('sidebar_bloor--clickOut');
    if($('.sidebar_bloor').hasClass('sidebar_bloor--clickIn')){
      $('.sidebar_bloor').toggleClass('sidebar_bloor--clickIn');
      $('.sidebar').toggleClass('sidebar_bloor--clickIn');
    }
  }
  else {
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar').toggleClass('sidebar_bloor--clickIn');
    if($('.sidebar_bloor').hasClass('sidebar_bloor--clickOut')){
      $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
      $('.sidebar').toggleClass('sidebar_bloor--clickOut');
    }
  }
});
$('.sidebar_bloor').click((e) => {
  if($('.menuMobile').hasClass('menuMobile--clickOut')) {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
  }
  else {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
  }
  if($('.sidebar_bloor').hasClass('sidebar_bloor--clickIn')){
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
    setTimeout(() => {
      if($('.sidebar_bloor').hasClass('sidebar_bloor--clickOut')){
        $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
      }
    }, 600);
  }
  $('body').css('overflow', 'auto');
});
$('.sidebar .container a').click((e) => {
  if($('.menuMobile').hasClass('menuMobile--clickOut')) {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
  }
  else {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
  }
  if($('.sidebar_bloor').hasClass('sidebar_bloor--clickIn')){
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
    setTimeout(() => {
      if($('.sidebar_bloor').hasClass('sidebar_bloor--clickOut')){
        $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
      }
    }, 600);
  }
  $('body').css('overflow', 'auto');
});


