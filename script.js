"use strict";

window.addEventListener("load", start);
let number;

function start() {
  console.log("JavaScript is running");
  number = generateRandomNumber();
    console.log(number);
    displayGuess();
}

function generateRandomNumber() {
    return 42;
}

function displayGuess() {
    console.log("displayGuess");
    const guessElement = document.querySelector("#guess");
    guessElement.textContent = number;
}

function checkGuess() {
    console.log("checkGuess");
}

function guessIsCorrect() {
    console.log("guessIsCorrect");
}

function guessIsTooHigh() {
    console.log("guessIsTooHigh");
}

function guessIsTooLow() {
    console.log("guessIsTooLow");
}