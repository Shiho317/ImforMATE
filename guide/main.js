'use strict';

//sliders
const slider = function(){
  const slides = document.querySelectorAll('.slide');
  const btnNext = document.querySelector('.next');
  const btnStart = document.querySelector('.start__btn');

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function(slide){
    slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`
    });
  };

  const nextSlide = function(){
    if(curSlide === maxSlide - 1){
      curSlide = maxSlide - 1;
      btnNext.classList.add('hidden');
      btnStart.classList.remove('hidden');
    }else{
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const init = function(){
    goToSlide(0);
  };
  init();

  btnNext.addEventListener('click', nextSlide);

  btnNext.addEventListener('click', function(){
    btnNext.style.opacity = 0.5;

    setTimeout(() => {
      btnNext.style.opacity = 1;
    },400);
  });

  btnStart.addEventListener('click', function(){
    btnStart.style.opacity = 0.5;
  });
};
slider();
