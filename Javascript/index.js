const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

var owl = $(".img-carousel");
owl.owlCarousel({
    margin: 15,
    loop: true,
    stagePadding: 10,
    nav: true,
    navText: ["<b>‹</b>", "<b>›</b>"],
    merge: true,
    center: true,
    dotsEach: true,
    autoplayHoverPause: true,
    animateOut: 'flipInY',
    animateIn: 'flipInY',
    autoplay: true,
    rewind: true,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },

        900: {
            items: 3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});