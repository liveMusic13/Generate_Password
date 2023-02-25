"use strict";

const slider = document.querySelector('.generate__slider');
const resultSlider = document.querySelector('.generate__result-slider');

slider.addEventListener('mouseover', () => {
  slider.style.opacity = 1;
  resultSlider.style.opacity = 1;
});

slider.addEventListener('mouseout', () => {
  slider.style.opacity = 0.7;
  resultSlider.style.opacity = 0.7;
});

resultSlider.addEventListener('mouseover', () => {
  resultSlider.style.opacity = 1;
});

resultSlider.addEventListener('mouseout', () => {
  resultSlider.style.opacity = 0.7;
});