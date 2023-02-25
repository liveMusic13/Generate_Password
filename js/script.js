"use strict";

let arrSymbol = ['#', '$', '@', '&', '?', '%', '*'];
let arrAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


const button = document.querySelector(".generate__result-button");
let resultInput = document.querySelector('.generate__result-input');
let chekUpper = document.querySelector("#checkbox1");
let chekLower = document.querySelector("#checkbox2");
let chekNumber = document.querySelector("#checkbox3");
let chekSymbol = document.querySelector("#checkbox4");

resultSlider.innerHTML = slider.value;

slider.oninput = function () {
  resultSlider.innerHTML = this.value;
}

function random() {
  return Math.floor(Math.random() * 10);
};

button.addEventListener('click', function () {
  resultInput.value = '';

  let test = [];

  if (chekUpper.checked) {
    upper();
  }
  if (chekLower.checked) {
    lower();
  }
  if (chekNumber.checked) {
    number();
  }
  if (chekSymbol.checked) {
    symbol();
  }
  if (!chekUpper.checked && !chekLower.checked && !chekNumber.checked && !chekSymbol.checked) {
    test.push(' ');
  }

  result();

  function upper() {
    for (let i = 0; i < slider.value; i++) {
      test.push(arrAlphabet[Math.floor(Math.random() * arrAlphabet.length)]);
    }
  };

  function lower() {
    for (let i = 0; i < slider.value; i++) {
      test.push(arrAlphabet[Math.floor(Math.random() * arrAlphabet.length)].toLowerCase());
    }
  }

  function number() {
    for (let i = 0; i < slider.value; i++) {
      test.push(random(slider.value));
    }
  }

  function symbol() {
    for (let i = 0; i < slider.value; i++) {
      test.push(arrSymbol[Math.floor(Math.random() * arrSymbol.length)]);
    }
  }

  function result() {
    for (let i = 0; i < slider.value; i++) {
      resultInput.value += test[Math.floor(Math.random() * test.length)];
    }
  }
});