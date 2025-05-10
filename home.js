var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
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
     breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1188: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

