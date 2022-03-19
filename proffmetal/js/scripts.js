$(".phonee").mask("+7 (999) 999 - 99 - 99");

(function() {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

$(document).ready(function() {

    $('#city_number div').css('display', 'none');
    $('#city_number #almaty').css('display', 'block');

    $("#city").change(function() {
        $('#city_number div').css('display', 'none');
        id = $('#city option:selected').val();
        $('#' + id).show();
    });

});

$(document).ready(function() {

    $('#city_number_mobile div').css('display', 'none');
    $('#city_number_mobile #almaty_mobile').css('display', 'block');

    $("#city_mobile").change(function() {
        $('#city_number_mobile div').css('display', 'none');
        id = $('#city_mobile option:selected').val();
        $('#' + id).show();
    });

});

$(document).ready(function() {

    $('#city_number_fixed div').css('display', 'none');
    $('#city_number_fixed #almaty_fixed').css('display', 'block');

    $("#city_fixed").change(function() {
        $('#city_number_fixed div').css('display', 'none');
        id = $('#city_fixed option:selected').val();
        $('#' + id).show();
    });

});

$(function() {
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 170) $('.m_1').addClass('m_2');
        else $('.m_1').removeClass('m_2');
    });
});


$(document).ready(function() {
    var owl = $('.owl-carousel2');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true,
        loop: true,
        items: 1,
    })
})

$(document).ready(function() {
    var owl = $('.owl-carousel3');
    owl.owlCarousel({
        margin: 24,
        dots: true,
        autoHeight: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                nav: false,
                items: 3
            },
            992: {
                nav: true,
                items: 4
            },
            1200: {
                nav: true,
                items: 6
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.owl-carousel4');
    owl.owlCarousel({
        margin: 24,
        nav: true,
        dots: false,
        autoHeight: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.owl-carousel5');
    owl.owlCarousel({
        margin: 24,
        dots: true,
        autoHeight: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                nav: false,
                items: 2
            },
            768: {
                nav: true,
                items: 3
            },
            1200: {
                nav: true,
                items: 4
            }
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for (const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for (const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});
