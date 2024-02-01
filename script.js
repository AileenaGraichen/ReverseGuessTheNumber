"use strict";

/*window.addEventListener("load", start);
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
}*/

let lowerBound = 1;
let upperBound = 100;
let currentGuess = 50;

function updateGuess() {
    currentGuess = Math.floor((lowerBound + upperBound) / 2);
    document.getElementById('guess').textContent = currentGuess;
}

function higher() {
    lowerBound = currentGuess + 1;
    updateGuess();
}

function lower() {
    upperBound = currentGuess - 1;
    updateGuess();
}

function correct() {
    alert("Hooray! I guessed it: " + currentGuess);
    // Reset the game or add additional functionality here if desired
}

// Initialize the first guess
updateGuess();