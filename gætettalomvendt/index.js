let min = 0;
let max = 100;
let computerGuess;
let attempts = 0;

const startButton = document.getElementById("startButton");
const higherButton = document.getElementById("higher");
const lowerButton = document.getElementById("lower");
const correctButton = document.getElementById("correct");
const computerGuessDisplay = document.getElementById("computerGuess");
const feedbackDisplay = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

startButton.addEventListener("click", startGame);
higherButton.addEventListener("click", guessHigher);
lowerButton.addEventListener("click", guessLower);
correctButton.addEventListener("click", guessCorrect);

function startGame() {
    min = 0;
    max = 100;
    attempts = 0;
    document.getElementById("game").style.display = "block";
    makeGuess();
    startButton.style.display = "none"; // Gem start-knappen efter start
}

function makeGuess() {
    attempts++;
    computerGuess = Math.floor((min + max) / 2); // Brug binær søgning til hurtigere gæt
    computerGuessDisplay.textContent = computerGuess;
    feedbackDisplay.textContent = "Er det dit tal?";
    attemptsDisplay.textContent = `Antal gæt: ${attempts}`;
    enableButtons();
}

function guessHigher() {
    min = computerGuess + 1;
    makeGuess();
}

function guessLower() {
    max = computerGuess - 1;
    makeGuess();
}

function guessCorrect() {
    feedbackDisplay.textContent = `Computeren gættede rigtigt på ${attempts} forsøg!`;
    disableButtons();
}

function enableButtons() {
    higherButton.disabled = false;
    lowerButton.disabled = false;
    correctButton.disabled = false;
}

function disableButtons() {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    correctButton.disabled = true;
}
