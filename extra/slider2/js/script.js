new Swiper(".swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3500,
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
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    600: {
      slidesPerView: 1.6,
    },
  },
});
