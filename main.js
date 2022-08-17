const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },



  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
    stretch: -1000,
  },

  /*autoplay: {
    delay: 5000,
    disableOnInteraction: true,

  },*/
});

