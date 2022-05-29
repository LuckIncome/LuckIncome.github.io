var vue = new Vue({
    el: '#app',
    data() {
        return {
            size: {
                width: null, // ширина
                height: null, // высота
                scroll: 0 // скрол вверху в рх
            },
            banner: null,
            childs: null,
            isWrapper: false,

            mapsValue: 1,

            modalValue: null,

            contactsLinks: null,
            contactsLink: null,
            contactsChilds: null,
            contactsChild: null,
            contactsMaps: null,
            contactsMap: null,
        }
    },
    methods: {
        // этого проекта
        bannerToggle(value) {
            for (let index = 0; index < this.childs.length; index++) {
                this.childs[index].classList.remove('active')
            }
            if (value) {
                this.childs[value - 1].classList.add('active')
            } else {
                this.childs[0].classList.add('active')
            }
        },
        mapsToggle(value) {
            for (let index = 0; index < this.contactsLink.length; index++) {
                this.contactsLink[index].classList.remove('active')
                this.contactsChild[index].classList.remove('active')
                this.contactsMap[index].classList.remove('active')
            }
            if(value && this.mapsValue !== value) {
                this.mapsValue = value
                this.contactsLink[value - 1].classList.add('active')
                this.contactsChild[value - 1].classList.add('active')
                this.contactsMap[value - 1].classList.add('active')
            } else {
                this.contactsLink[0].classList.add('active')
                this.contactsChild[0].classList.add('active')
                this.contactsMap[0].classList.add('active')
            }
        },
        sidebarToggle() {
            this.mainToggle()
            let wrapper = document.querySelector('.sidebar')
            wrapper.classList.add('sidebar-show')
        },
        modalToggle(value) {
            this.mainToggle()
            let modal = document.querySelector(`.${value}`)
            modal.classList.add('modal-show')
        },
        mainToggle() {
            this.isWrapper = true
            this.scrollBlock()
            let wrapper = document.querySelector('.wrapper')
            wrapper.classList.add('wrapper-show')
        },
        modalClose() {
            let sidebar = document.querySelector('.sidebar')
            sidebar.classList.remove('sidebar-show')
            let wrapper = document.querySelector('.wrapper')
            wrapper.classList.remove('wrapper-show')
            let modals = document.querySelectorAll('.modal')
            for (let index = 0; index < modals.length; index++) {
                modals[index].classList.remove('modal-show')
            }
            this.isWrapper = false
            this.scrollBlock()
        },

        // стандартные 
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
        updateSize() {
			this.size.width = window.innerWidth
			this.size.height = window.innerHeight
        },
        onScroll() {
            let top = 80
            if (window.screen.width < 769) {
                top = 10
            } else {
                top = 80
            }
            if (!document.querySelector('.header-error')) {
                let select = document.querySelector('.header')
                if (this.size.scroll > window.scrollY || this.size.scroll < top) {
                    select.classList.remove('header-hide')
                } else {
                    select.classList.add('header-hide')
                }
                let selectAbout = document.querySelector('.header-about')
                if (selectAbout) {
                    if (this.size.scroll < window.scrollY || this.size.scroll < top) {
                        select.classList.remove('header-about-wrapper')
                    } else {
                        select.classList.add('header-about-wrapper')
                    }
                } else {

                    if (this.size.scroll < window.scrollY || this.size.scroll < top) {
                        select.classList.remove('header-wrapper')
                    } else {
                        select.classList.add('header-wrapper')
                    }
                }
            }
            this.size.scroll = window.scrollY
        },
        start() {
            this.updateSize()
        }
    },
	created() {
        window.addEventListener('scroll', this.onScroll)
	},
    mounted() {
        this.start()
        if (document.querySelector('.banner__vue')) {
            this.banner = document.querySelector('.banner__vue') 
            this.childs = this.banner.querySelectorAll('picture')
            this.bannerToggle()
        }
        if (document.querySelector('.contacts__links')) {
            this.contactsLinks = document.querySelector('.contacts__links') 
            this.contactsLink = this.contactsLinks.querySelectorAll('button')

            this.contactsChilds = document.querySelector('.contacts__items') 
            this.contactsChild = this.contactsChilds.querySelectorAll('.contacts__child')

            this.contactsMaps = document.querySelector('.contacts__maps') 
            this.contactsMap = this.contactsMaps.querySelectorAll('a')
            this.mapsToggle()
        }
        if (document.querySelector('.miniGallery__items')) {
            let miniGallery = document.querySelector('.miniGallery__items')
            if (window.screen.width < 769) {
                miniGallery.classList.add('miniGallery__items-slider')
            } else {
                miniGallery.classList.remove('miniGallery__items-slider')
            }
        }
    },
})

document.body.onload = function() {
    setTimeout(() => {
        // vue.toggleOnload()
    }, 500)
}

window.addEventListener('load', function() {
    baguetteBox.run('.gallery__items');
});

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$("#phone").mask("+7 (h99) 999-99-99");
