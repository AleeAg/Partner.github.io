// Swiper-Carrusel

let swiper1 = new Swiper(".carrusel", {
    loop: true,
    spaceBetween: 30,
    /* centeredSlides: true, */
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper-CarruselCards

let swiper2 = new Swiper(".card-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,
        }
    }
})