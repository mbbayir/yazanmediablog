    const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
  const bg = slide.dataset.bg;

  slide.addEventListener('mouseenter', () => {
    slide.style.setProperty('--bg-img', `url(${bg})`);
    slide.classList.add('hovered');
  });

  slide.addEventListener('mouseleave', () => {
    slide.classList.remove('hovered');
  });
});
