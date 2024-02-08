"use strict";

let lowerBound = 1;
let upperBound = 100;
let currentGuess = 50;

function updateGuess() {
    currentGuess = Math.floor((lowerBound + upperBound) / 2);
    document.getElementById('guess').textContent = currentGuess;
    
}

function higher() {
    if(currentGuess === upperBound) {
        alert("Upper bound reached");
        return;
    } 
    lowerBound = currentGuess + 1;
    updateGuess();
}

function lower() {
    if(currentGuess === lowerBound) {
        alert("Lower bound reached");
        return;
    } 
    upperBound = currentGuess - 1;
    updateGuess();
}

function correct() {
    alert("Yay! " + currentGuess);
}

updateGuess();