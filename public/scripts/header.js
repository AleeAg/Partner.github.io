// header

let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");
let login = document.getElementById("login-btn");
let botones = document.querySelector(".botones");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})


login.addEventListener("click", () => {
    /* login.classList.toggle("fa-times"); */
    botones.classList.toggle("active");
})

// Efecto de scroll en header

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    botones.classList.remove("active");
}

// Swiper Carrusel

var swiper = new Swiper(".carrusel-inicio", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    }
});

// Swiper CarruselCards

var swiper = new Swiper(".cards-slide", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        802: {
            slidesPerView: 3
        }
    }

});