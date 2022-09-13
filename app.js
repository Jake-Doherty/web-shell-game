/* Imports */
// import { getRandomItem } from './utils.js';

import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // guess or results
let guess = ''; // left, right, middle
let lift = ''; // left, right, middle
let result = ''; // win/lose

let totalGames = 0;
let wins = 0;

// Probability Array
const choices = ['left', 'middle', 'right'];

/* Actions */
function loadPage() {
    displayShells();
}

function liftShell(userGuess) {
    gameState = 'results';
    guess = userGuess;
    lift = getRandomItem(choices);
    totalGames++;
    console.log();
}

/* Components */

/* Component */
// get DOM

// Scoreboard
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

// Shells
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

// Pearls
const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

// Guess
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

// display

function displayShells() {
    if (gameState === 'guess') {
        shell1.classList.remove('reveal');
        resultSection.classList.add('hidden');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
    }
}

// event listeners
guess1.addEventListener('click', () => {
    liftShell('left');
});
guess2.addEventListener('click', () => {
    liftShell('middle');
});
guess3.addEventListener('click', () => {
    liftShell('right');
});

// Results
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');
const resultSection = document.getElementById('results');

function displayResults() {
    if (gameState === 'results') {
    }
}

/* Run page load code */
loadPage();
