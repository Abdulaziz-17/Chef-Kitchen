var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
});

document.querySelector(".prepend-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide('<div class="swiper-slide">Slide ' + --prependNumber + '</div>');
});






