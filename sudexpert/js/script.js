var vue = new Vue({
    el: '#app',
    data() {
        return {
            size: {
                width: null, // ширина
                height: null, // высота
                scroll: 0 // скрол вверху в рх
            },
            isOnload: false, // прилодер
            isIndex: false, // опредиляет главную страницу

            isWrapper: false, // затемнение фона
            isSidebar: false, // меню для мобилке

            isMenuPage: false,

            selectValue: '',

            // модалки
            isModalLeaveFeedback: false, 
            isModalReviews: false,
            isModalSuccessFeedback: false,
            isModalSuccessReviews: false,


            valueQuestions: null
        }
    },
    methods: {
        // этого проекта

        toggleMenuPage() {
            this.isWrapper = this.isMenuPage = true
            this.scrollBlock()
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

        toggleSelectValue(value) {
            this.selectValue = value
        },

        toggleSidebar() {
            this.isWrapper = this.isSidebar = true
            this.scrollBlock()
        },

        // стандартные 
        phoneValue(event) {
            if (event.target.value == false) {
                event.target.value = '+7 ('
            }
        },
        toggleWrapper() {
            this.isWrapper = this.isMenuPage = this.isSidebar = this.isModalSuccessFeedback = this.isModalSuccessReviews = this.isModalLeaveFeedback = this.isModalReviews = false
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
                let select = document.querySelector('.header')
                if (this.size.scroll > window.scrollY || this.size.scroll < 80) {
                    select.classList.remove('header-hide')
                } else {
                    select.classList.add('header-hide')
                }
                if (this.size.scroll < window.scrollY || this.size.scroll < 100) {
                    select.classList.remove('header-wrapper')
                } else {
                    select.classList.add('header-wrapper')
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
        
        if (document.getElementById("sel-opt")) {
            var theSelect = document.querySelector('#sel-opt');
            var wrapper = document.createElement('div');
            wrapper.classList.add('custom-select-wrapper');
            var customSelect = document.createElement('div');
            customSelect.classList.add('custom-select');
            var customSelectTrigger = document.createElement('div');
            customSelectTrigger.classList.add('custom-select__trigger');
            var spanText = document.createElement('span');
            spanText.textContent = 'Вид деятельности';
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
                        vue.toggleSelectValue(this.textContent)
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

document.body.onload = function() {
    setTimeout(() => {
        vue.toggleOnload()
    }, 500)
}
