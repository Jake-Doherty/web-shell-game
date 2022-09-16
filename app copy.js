/* Imports */
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
    displayResults();
}

function liftShell(userGuess) {
    gameState = 'results';
    guess = userGuess;
    lift = getRandomItem(choices);
    totalGames++;
    totalDisplay.textContent = totalGames;

    if (guess === lift) {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
    } else {
        result = 'lose';
        lossesDisplay.textContent = totalGames - wins;
    }

    loadPage();
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
        pearl1.classList.add('hidden');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
    }
}

function pearlLocation() {
    if (lift === 'left') {
        pearl1.classList.remove('hidden');
    } else if (lift === 'middle') {
        pearl2.classList.remove('hidden');
    } else if (lift === 'right') {
        pearl3.classList.remove('hidden');
    }
}

// event listeners
guess1.addEventListener('click', () => {
    shell1.classList.add('reveal');
    liftShell('left');
    gameState = 'results';
});
guess2.addEventListener('click', () => {
    shell2.classList.add('reveal');
    liftShell('middle');
    gameState = 'results';
});
guess3.addEventListener('click', () => {
    shell3.classList.add('reveal');
    liftShell('right');
    gameState = 'results';
});

// Results
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');
const resultSection = document.getElementById('results');

function displayResults() {
    if (gameState === 'results') {
        pearlLocation();
    }
}

/* Run page load code */
loadPage();
