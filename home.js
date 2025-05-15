    
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
    });

        
    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    