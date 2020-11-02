$(document).ready(function(){
       
    const shopSlider = $("#shopSlider");
        shopSlider.owlCarousel({
            loop: true,
            dots: false,
            margin: 2,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },
                
                1254:{
                   items: 3, 
                }
            }
        }); 
       
    $('#shopSliderLeft').click(function() {
        console.log('Left');
        shopSlider.trigger('prev.owl.carousel');
    })

    $('#shopSliderRight').click(function() {s
        console.log('Right');
        shopSlider.trigger('next.owl.carousel');
    })
        
});