"use strict";

const random = document.querySelector("body");
const buttonElement = document.querySelector(".js-btn");
const inputElement = document.querySelector(".js-input");
const clueElement = document.querySelector(".js-clue");
const attemptsElement = document.querySelector(".js-attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function getFinalNumber() {
  const userNumber = parseInt(inputElement.value);
  console.log(userNumber);
  if (userNumber > 0 && userNumber <= 100) {
    if (userNumber > randomNumber) {
      clueElement.innerHTML = "Pista: demasiado alto";
    } else if (userNumber < randomNumber) {
      clueElement.innerHTML = "Pista: demasiado bajo";
    } else if (userNumber === randomNumber) {
      clueElement.innerHTML = "Has ganado campeona!!!";
    }
  } else {
    clueElement.innerHTML = "Pista: el número debe estar entre 1 y 100";
  }
  attemptsElement.innerHTML = getAttemptsNumber();
}

let attempts = 0;
function getAttemptsNumber() {
  attempts++;
  return `Número de intentos: ${attempts}`;
}

buttonElement.addEventListener("click", getFinalNumber);
