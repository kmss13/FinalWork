'use strict'

window.addEventListener('DOMContentLoaded', (event) => {

  const slides = document.querySelectorAll('.slide'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';

  }
  
  function plussSlides(n) {
    showSlides(slideIndex += n);

  }

  prev.addEventListener('click', () => {
    plussSlides(-1);
  });
  
  next.addEventListener('click', () => {
    plussSlides(1);
  });

});
 


