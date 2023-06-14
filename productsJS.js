
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
   
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4,
      },
    },
});