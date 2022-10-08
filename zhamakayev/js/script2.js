var mouseX, mouseY;
$('.hoverFuture').mousemove(function(e) {
  mouseX = e.pageX - $(this).offset().left;
  mouseY = e.pageY - $(this).offset().top;
  if(mouseX > 144) {
    $('.hoverFuture .back img').css('transform', 'translate(-' + mouseX / 8 + 'px, -' + mouseY / 10 + 'px)');
    if(mouseY > 192) {
      $('.hoverFuture .back img').css('transform', 'translate(-' + mouseX / 8 + 'px, -' + mouseY / 10 + 'px)');
    }
    else{
      $('.hoverFuture .back img').css('transform', 'translate(-' + mouseX / 8 + 'px, ' + mouseY / 10 + 'px)');
    }
  }
  else  {
    $('.hoverFuture .back img').css('transform', 'translate(' + mouseX / 8 + 'px, ' + mouseY / 10 + 'px)');
    if(mouseY > 192) {
      $('.hoverFuture .back img').css('transform', 'translate(' + mouseX / 8 + 'px, -' + mouseY / 10 + 'px)');
    }
    else{
      $('.hoverFuture .back img').css('transform', 'translate(' + mouseX / 8 + 'px, ' + mouseY / 10 + 'px)');
    }
  }
}).mouseover();
$('.hoverFuture').mouseleave(function(e) {
  $('.hoverFuture .back img').css('transform', 'unset');
});

let masClass = ['.lazy-background', '.lazy-background2']
for (let i = 0; i < masClass.length; i++) {
  document.addEventListener("DOMContentLoaded", function() {
    let lazyBackgrounds = [].slice.call(document.querySelectorAll(masClass[i]));

    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach(function(lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });
}
for (let i = 1; i <= $('.lazy-background2 .item_img').length; i++) {
  $('.lazy-background2 .info_close').eq(i-1).click((el) => {
    let b = '.lazy-background2 .info' + '_' + i;
    // console.log(b)
    $(b).css('display', 'none');
    for (let j = 1; j <= $('.lazy-background2 .item_img').length; j++) {
      $('.lazy-background2 .item_img').eq(j-1)[0].src = './img/el' + j + '_.webp';
    }
  });
  $('.lazy-background2 .item_img').eq(i-1).click((el) => {
    for (let j = 1; j <= $('.lazy-background2 .item_img').length; j++) {
      let d = '.lazy-background2 .info' + '_' + j;
      if(j != i) {
        if($(d).css('display') != 'none') {
          $(d).css('display', 'none');
        }
        $('.lazy-background2 .item_img').eq(j-1)[0].src = './img/el' + j + '_.webp';
      }
      else {
        $('.lazy-background2 .item_img').eq(j-1)[0].src = './img/el' + j + '.webp';
      }
    }
    let c = '.lazy-background2 .info' + '_' + i;
    // console.log(c)
    $(c).css('display', 'block');
  });
}
$('.more').click(() => {
  $('.editors_atrix').toggleClass('editors_atrix-click');
});
for (let i = 0; i < $('.plans_bottom .num').length; i++) {
  $('.plans_bottom .num').eq(i).click(() => {
    for (let j = 0; j < $('.plans_bottom .num').length; j++) {
      if($('.plans_bottom .num').eq(j).hasClass('num-active')) {
        $('.plans_bottom .num').eq(j).toggleClass('num-active');
      }
      if($('.plans_bottom .box').eq(j).hasClass('box-active')) {
        $('.plans_bottom .box').eq(j).toggleClass('box-active');
      }
    }
    $('.plans_bottom .num').eq(i).toggleClass('num-active');
    $('.plans_bottom .box').eq(i).toggleClass('box-active');
  });
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
[].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix.substr(0, this.value.length).replace(/_+/g,
      function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
});

