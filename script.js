"use strict";

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
    alert("Yay! " + currentGuess);
}

updateGuess();