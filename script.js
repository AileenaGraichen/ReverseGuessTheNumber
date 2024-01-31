"use strict";

window.addEventListener("load", start);
let number;

function start() {
  console.log("JavaScript is running");
  number = generateRandomNumber();
    console.log(number);
}

function generateRandomNumber() {
    return 42;
}

function displayGuess(generateRandomNumber) {
    console.log("displayGuess");
    const reply = document.querySelector("#reply").value;
    const html = `<li>Is your number: ${number}</li>`;
    reply.insertAdjacentHTML("beforeend", html);
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