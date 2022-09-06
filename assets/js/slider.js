"use strict";

new Swiper(".destination__slider ", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".destination__arrow_next",
    prevEl: ".destination__arrow_prev",
  },
  slideToClickedSlide: true,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 60,
  centeredSlides: false,
  freeMode: true,
  autoHeight: true,
});
