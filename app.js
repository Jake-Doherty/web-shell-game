/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // guess or results
let guess = ''; // left, right, middle
let lift = ''; // left, right, middle

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
        wins++;
        winsDisplay.textContent = wins;
    } else {
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
const guessButtons = document.getElementById('guesses');
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');
const resultSection = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');

function displayShells() {
    if (gameState === 'guess') {
        guessButtons.classList.remove('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        display1.textContent = '';
        display2.textContent = '';
        display3.textContent = '';
        resultSection.classList.add('hidden');
    }
}

function pearlLocation() {
    if (lift === 'left') {
        pearl1.classList.remove('hidden');
        shell1.classList.add('reveal');
    } else if (lift === 'middle') {
        pearl2.classList.remove('hidden');
        shell2.classList.add('reveal');
    } else if (lift === 'right') {
        pearl3.classList.remove('hidden');
        shell3.classList.add('reveal');
    }
}

// event listeners
guess1.addEventListener('click', () => {
    shell1.classList.add('reveal');
    liftShell('left');
    pearlLocation();
    gameState = 'results';
    if (guess === lift) {
        display1.textContent = 'Found it!';
    } else {
        display1.textContent = 'Not here!';
    }
});
guess2.addEventListener('click', () => {
    shell2.classList.add('reveal');
    liftShell('middle');
    pearlLocation();
    gameState = 'results';
    if (guess === lift) {
        display2.textContent = 'Found it!';
    } else {
        display2.textContent = 'Not here!';
    }
});
guess3.addEventListener('click', () => {
    shell3.classList.add('reveal');
    liftShell('right');
    pearlLocation();
    gameState = 'results';
    if (guess === lift) {
        display3.textContent = 'Found it!';
    } else {
        display3.textContent = 'Not here!';
    }
});

playAgainButton.addEventListener('click', () => {
    gameState = 'guess';
    displayShells();
});

// Results

function displayResults() {
    if (gameState === 'results') {
        guessButtons.classList.add('hidden');
        resultSection.classList.remove('hidden');
        pearlLocation();
    }
}

/* Run page load code */
loadPage();
