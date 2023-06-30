var swiperVBG = new Swiper("#sliderVBG", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  breakpoints: {
    // when window width is >= 320px
    480:{
    slidesPerView: 1,
      spaceBetween: 30
  },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30
    },
1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});