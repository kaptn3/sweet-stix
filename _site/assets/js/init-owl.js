jQuery(document).ready(function () {
    jQuery(".owl-carousel").owlCarousel({
        nav: true,
        navText: ["<div class='clients-say__btn clients-say__btn_right'></div>", "<div class='clients-say__btn clients-say__btn_left'></div>"],
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});
