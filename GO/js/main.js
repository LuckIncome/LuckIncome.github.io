new Vue({
    el: '#app',
    data: {
        dropdown2: false,
        height: null,
    },
    methods: {
        toggleMobile() {
            this.dropdown2 = !this.dropdown2
        },
        matchHeight() {
            if (this.dropdown2 == true) {
              this.height = (this.$refs.infoBox.clientHeight - 60) + 'px' 
            } else {
              this.height = 0
            }
        },
    },
    watch: {
        dropdown2() {
            this.matchHeight()
        }
    },
    mounted() {
        this.matchHeight()
    }
})
$(function(){

});
$(document).ready(function(){
    $('.partner__items').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinity: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed:1500,
      pauseOnHover:true,
      pauseOnFocus:true,
      variableWidth:true,
      });

      $('.new__items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:1500,
        pauseOnHover:true,
        pauseOnFocus:true,
        variableWidth:true,
        centerMode: true,
        centerPadding: '60px',
        });

   
  });

  