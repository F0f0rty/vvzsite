const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  mousewheel: {
    invert: false,
    sensitivity: 20,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
    stretch: -1000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  /*autoplay: {
    delay: 5000,
    disableOnInteraction: true,

  },*/
});
