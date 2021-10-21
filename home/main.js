'use strict';

//Slider

const slider = function(){
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function(){
    slides.forEach(function(_, i){
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide = "${i}"></button>`
      );
    });
  };

  const activeDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
  };

  const goToSlide = function(slide){
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
  };

  const nextSlide = function(){
    if(curSlide === maxSlide - 1){
      curSlide = 0;
    }else{
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const prevSlide = function(){
    if(curSlide === 0){
      curSlide = maxSlide -1;
    }else{
      curSlide--;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const init = function(){
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  btnRight.addEventListener('click', function(){
    btnRight.style.backgroundColor = 'white';

    setTimeout(() => {
      btnRight.style.backgroundColor = 'rgba(211, 206, 206, 0.349)'
    },400);
  });

  btnLeft.addEventListener('click', function(){
    btnLeft.style.backgroundColor = 'white';

    setTimeout(() => {
      btnLeft.style.backgroundColor = 'rgba(211, 206, 206, 0.349)'
    },400);
  });



  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
}
slider();



//personal topic

const topic1 = document.querySelector('.p-topic__1');
console.log(topic1);
topic1.addEventListener('click', function(){
  topic1.style.boxShadow = 'none';
});
const topic2 = document.querySelector('.p-topic__2');
console.log(topic2);
topic2.addEventListener('click', function(){
  topic2.style.boxShadow = 'none';
});

//btn liked

const btnLiked = document.querySelector('.btn__liked');
console.log(btnLiked);
btnLiked.addEventListener('click', function(){
  btnLiked.style.opacity = 0.5;
});