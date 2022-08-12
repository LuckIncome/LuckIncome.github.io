var vue = new Vue({
    el: '#app',
    data() {
        return {
            size: {
                width: null, // ширина
                height: null, // высота
                scroll: 0 // скрол вверху в рх
            },
            isOnload: true, // прилодер
            isIndex: false, // опредиляет главную страницу

            isWrapper: false, // затемнение фона
            isSidebar: false, // меню для мобилке

            // модалки
            isModalLeaveFeedback: false,
        }
    },
    methods: {
        // этого проекта
        toggleModalLeaveFeedback() {
            this.isWrapper = this.isModalLeaveFeedback = true
            this.scrollBlock()
        },


        // стандартные 
        phoneValue(event) {
            if (event.target.value == false) {
                event.target.value = '+7 ('
            }
        },
        toggleSidebar() {
            this.isWrapper = this.isSidebar = true
            this.scrollBlock()
        },
        toggleWrapper() {
            this.isWrapper = this.isModalLeaveFeedback = this.isSidebar = false
            this.scrollBlock()
        },
        scrollBlock() {
            if (this.isWrapper == true) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflowY = 'auto'
            }
        },
        toggleOnload() {
            this.isOnload = false
        },
        updateSize() {
            this.size.width = window.innerWidth
            this.size.height = window.innerHeight
        },
        onScroll() {
            if (true) {
                // let select = document.querySelector('.header');
                if (this.size.scroll > window.scrollY || this.size.scroll < 80) {
                    // select.classList.remove('header-hide');
                    $('.header').removeClass('header-hide');
                } else {
                    // select.classList.add('header-hide');
                    $('.header').addClass('header-hide');
                }
                if (this.size.scroll < window.scrollY || this.size.scroll < 80) {
                    // select.classList.remove('header-wrapper');
                    $('.header').removeClass('header-wrapper');
                    if (this.size.scroll < 30) {
                        $('.header').removeClass('header-wrapper');
                    }
                } else {
                    // select.classList.add('header-wrapper');
                    $('.header').addClass('header-wrapper');
                    if (this.size.scroll < 30) {
                        $('.header').removeClass('header-wrapper');
                    }
                }
            }
            this.size.scroll = window.scrollY
        },
        toggleIndex() {
            if (location.pathname == "/index.html" || location.pathname == "/index.php" || location.pathname == "/tvoymir/" || location.pathname == "/") {
                this.isIndex = true
            } else {
                this.isIndex = false
            }
        },
        start() {
            this.updateSize()
            this.toggleIndex()
        }
    },
    created() {
        window.addEventListener('scroll', this.onScroll)
    },
    mounted() {
        this.start()
    }
})

document.body.onload = function () {
    setTimeout(() => {
        vue.toggleOnload()
    }, 50)
}

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