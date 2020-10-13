"use strict"

const random = document.querySelector("body")
const button = document.querySelector(".js-button")
const clue = document.querySelector(".js-clue")
const attempts = document.querySelector(".js-attempts")

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }
  console.log(getRandomNumber(100));

function getFinalNumber() {
  const getInputValue = clue.value;
  clue.innerHTML = getInputValue;
  const randomNumber = getRandomNumber;
  if (getInputValue > randomNumber) {
    clue.value = "Demasiado alto";
  } else if (getInputValue < randomNumber) {
    clue.value = "Demasiado bajo";
  } else if (getInputValue === randomNumber) {
    clue.value = "Has ganado campeona!!!";
  } else {
    clue.value = "El número debe estar entre 1 y 100";
  }
}



button.addEventListener("click", getFinalNumber);