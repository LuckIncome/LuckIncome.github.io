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


            valueQuestions: null,
            valueSidebar: null,
            valueBlock: null,

            // модалки
            isModalLeaveFeedback: false, 
            isModalReviews: false,
            isModalSuccessFeedback: false,
            isModalSuccessReviews: false,
        }
    },
    methods: {
        // этого проекта
        toggleBlock(value) {
            if (this.valueBlock != value) {
                this.valueBlock = value 
            } else {
                this.valueBlock = null
            }
        },
        toggleModalSuccessFeedback() {
            this.isSidebar = false
            this.isWrapper = this.isModalSuccessFeedback = true
            this.scrollBlock()
        },
        toggleModalSuccessReviews() {
            this.isSidebar = false
            this.isWrapper = this.isModalSuccessReviews = true
            this.scrollBlock()
        },
        toggleModalLeaveFeedback() {
            this.isSidebar = false
            this.isWrapper = this.isModalLeaveFeedback = true
            this.scrollBlock()
        },
        toggleModalReviews() {
            this.isSidebar = false
            this.isWrapper = this.isModalReviews = true
            this.scrollBlock()
        },
        toggleQuestions(value) {
            if (this.valueQuestions != value) {
                setTimeout(() => {
                    this.valueQuestions = value 
                }, 100);
            } else {
                this.valueQuestions = null
            }
        },
        toggleSidebar() {
            this.isWrapper = this.isSidebar = true
            this.scrollBlock()
        },
        toggleSidebarDrop(value) {
            if (this.valueSidebar != value) {
                this.valueSidebar = value 
            } else {
                this.valueSidebar = null
            }
        },

        mouseScriptLeft() {
            bannerLeftToggle()
        },
        mouseScriptRight() {
            bannerRightToggle()
        },
        // стандартные 
        toggleWrapper() {
            this.valueSidebar = null
            this.isWrapper = this.isModalSuccessFeedback = this.isModalSuccessReviews = this.isModalReviews = this.isModalLeaveFeedback = this.isSidebar = false
            this.scrollBlock()
        },
        phoneValue(event) {
            if (event.target.value == false) {
                event.target.value = '+7 ('
            }
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
                let select = document.querySelector('.header')
                if (this.size.scroll > window.scrollY || this.size.scroll < 80) {
                    select.classList.remove('header-hide')
                } else {
                    select.classList.add('header-hide')
                }
            }
            this.size.scroll = window.scrollY
        },
        toggleIndex() {
            if (location.pathname == "/index.html" || location.pathname == "/index.php" || location.pathname == "/") {
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

        if (document.querySelector('#banner-left')) {
            setTimeout(() => {
                bannerLeftToggle()
                bannerRightToggle()
            }, 500);
        }
    }
})

document.body.onload = function() {
    setTimeout(() => {
        vue.toggleOnload()
    }, 500)
}

window.addEventListener('load', function() {
    // baguetteBox.run('.gallery__items');
});

if (document.querySelector('#banner-left')) {
    let bannerLeft = new Vivus('banner-left', {
        duration: 75
    });
    function bannerLeftToggle() { 
        bannerLeft.stop().reset().play();
    }
    let bannerRight = new Vivus('banner-right', {
        duration: 75
    });
    function bannerRightToggle() { 
        bannerRight.stop().reset().play();
    }
}


