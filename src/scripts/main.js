'use strict';

const buttonVision = document.getElementById('button-vision');
const buttonHeader = document.getElementById('header-button');

buttonVision.addEventListener('click', () => {
  const block = document.getElementById('message');

  block.scrollIntoView({ behavior: 'smooth' });
});

buttonHeader.addEventListener('click', () => {
  const block = document.getElementById('work');

  block.scrollIntoView({ behavior: 'smooth' });
});

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const slides = document.getElementById('slides');

arrowLeft.addEventListener('click', () => {
  return move('left');
});

arrowRight.addEventListener('click', () => {
  return move('right');
});

function move(direction) {
  const slidesClasses = slides.className;

  switch (true) {
    case slidesClasses.includes(1) && direction === 'right':
      slides.classList.remove('slider__slides--1-slide');
      slides.classList.add('slider__slides--2-slide');
      break;

    case slidesClasses.includes(2) && direction === 'right':
      slides.classList.remove('slider__slides--2-slide');
      slides.classList.add('slider__slides--3-slide');
      break;

    case slidesClasses.includes(2) && direction === 'left':
      slides.classList.remove('slider__slides--2-slide');
      slides.classList.add('slider__slides--1-slide');
      break;

    case slidesClasses.includes(3) && direction === 'left':
      slides.classList.remove('slider__slides--3-slide');
      slides.classList.add('slider__slides--2-slide');
      break;

    default:
      break;
  }
}

document.getElementById('burgerButton').addEventListener('click',
function() {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
});

const buttonSelection = document.getElementsByClassName('closeButton');

for(var i = 0; i < buttonSelection.length; i++) {
  (function(index) {
    buttonSelection[index].addEventListener("click", function() {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
     })
  })(i);
}
