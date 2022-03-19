var vue = new Vue({
    el: '#app',
    data() {
        return {
            width: null,
            modalReviews: null,
            
            isAboutBanner: false,

            isWrapper: false,
            isModalReviews: false,
            isModalContactUs: false,
            isSidebar: false,
            isModalLeaveFeedback: false,
            isModalOrder: false,
            isModalAboutVideo: false,

            isOnload: true,

            isSidebarMenuDrop: false,

            questionsValue: 'Тип помещения'
        }
    },
    methods: {
        valueModalReviews(value) {
            this.modalReviews = value
            this.isWrapper = this.isModalReviews = true
        },
        modalContactUs() {
            this.isSidebar = false
            this.isWrapper = this.isModalContactUs = true
        },
        modalLeaveFeedback() {
            this.isWrapper = this.isModalLeaveFeedback = true
        },
        modalOrder() {
            this.isWrapper = this.isModalOrder = true
        },
        toggleWrapper() {
            this.modalReviews = null
            this.isWrapper = this.isModalAboutVideo = this.isModalOrder = this.isModalLeaveFeedback = this.isModalReviews = this.isModalContactUs = this.isSidebar = false
            this.scrollBlock()

            if (document.getElementById("about-video")) {
                var myVideo = document.getElementById("about-video");
                myVideo.pause();
            }
        },
        scrollBlock() {
            if (this.isSearch || this.isWrapper || this.isMenu || this.isSidebar) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        },
        toggleSidebar() {
            if (this.width < 993) {
                this.isWrapper = this.isSidebar = true
            }
        },
        updateWidth() {
			this.width = window.innerWidth;
        },
        aboutBanner() {
            this.isAboutBanner = !this.isAboutBanner
            if (this.isAboutBanner == true) {
                
            } else {
                
            }
        },
        modalAboutVideo() {
            this.isWrapper = this.isModalAboutVideo = true
            var myVideo = document.getElementById("about-video");
            myVideo.play();
        },
        toggleOnload() {
            this.isOnload = false
        },
        sidebarMenuDrop() {
            this.isSidebarMenuDrop = !this.isSidebarMenuDrop
        },
        toggleQuestions(value) {
            this.questionsValue = value
        }
    },
	created() {
		window.addEventListener('resize', this.updateWidth);
	},
    mounted() {
        this.updateWidth()
        if (document.getElementById("questions")) {
                        
            var theSelect = document.querySelector('#sel-opt');
            var wrapper = document.createElement('div');
            wrapper.classList.add('custom-select-wrapper');
            var customSelect = document.createElement('div');
            customSelect.classList.add('custom-select');
            var customSelectTrigger = document.createElement('div');
            customSelectTrigger.classList.add('custom-select__trigger');
            var spanText = document.createElement('span');
            spanText.textContent = 'Тип помещения';
            var arrow = document.createElement('div');
            arrow.classList.add('arrow');
            customSelectTrigger.append(spanText, arrow);
            customSelect.append(customSelectTrigger);
            var customOptions = document.createElement('div');
            customOptions.classList.add('custom-options');
            var selectOptions = document.querySelectorAll('option');
            for(var opt = 0; opt < selectOptions.length; opt++){
            var optSpan = document.createElement('span');
            optSpan.classList.add('custom-option');
            if(!opt){
                optSpan.classList.add('selected', 'hidden');
            }
            var thisVal = selectOptions[opt].value;
            var thisText = selectOptions[opt].textContent;
            optSpan.textContent = thisText;
            optSpan.setAttribute('data_value', thisVal);
            customOptions.append(optSpan);
            }
            customSelect.append(customOptions);
            wrapper.append(customSelect);
            var par = theSelect.parentNode;
            par.append(wrapper);

            document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
                this.querySelector('.custom-select').classList.toggle('open');
            })
            var option = document.querySelectorAll(".custom-option");
            for (var i = 0; i < option.length; i++) {
                option[i].addEventListener('click', function() {
                        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                        this.classList.add('selected');
                        this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
                        vue.toggleQuestions(this.textContent)
                });
            }
            window.addEventListener('click', function(e) {
                var select = document.querySelector('.custom-select');
                if (!select.contains(e.target)) {
                    select.classList.remove('open');
                }
            });

            document.querySelector(".custom-select-wrapper").addEventListener('click', function(){
            var choosenOption = document.querySelector(".selected").getAttribute('data-value');
            var optionsSel = document.querySelectorAll('option');
            for(var j = 0; j < optionsSel.length; j++){
                if(optionsSel[j].value == choosenOption){
                optionsSel[j].selected = true;
                }
            }
            });
  
        }
    }
})

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > 50) {
        header.classList.add('header__wrapper');
    }
    else if (scrollPosition() < 50) {
        header.classList.remove('header__wrapper');
    }
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
})

$('.banner__items').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.banner-left',
    nextArrow: '.banner-right',
    autoplay: true,
    autoplaySpeed: 4000
});

$('.projects__items').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.projects-left',
    nextArrow: '.projects-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

$('.reviews__items').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.reviews-left',
    nextArrow: '.reviews-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
        breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },  {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.interesting__items').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    appendDots: $('.interesting__arrows-dots'),
    prevArrow: '.interesting-left',
    nextArrow: '.interesting-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
  
$('.universal__items').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.universal-left',
    nextArrow: '.universal-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.gallery__items').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: '.gallery-left',
    nextArrow: '.gallery-right',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

window.addEventListener('load', function() {
    baguetteBox.run('.gallery__items');
});

document.body.onload = function() {
    setTimeout(() => {
        vue.toggleOnload()
    }, 500)
}