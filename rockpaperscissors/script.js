"use strict";
let userGuess;
let computerGuess;
let result;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

function rockClicked() {
  userGuess = "rock";
  shakeHands();  // Start rysteanimationen for begge hænder
}

function paperClicked() {
  userGuess = "paper";
  shakeHands();  // Start rysteanimationen for begge hænder
}

function scissorsClicked() {
  userGuess = "scissors";
  shakeHands();  // Start rysteanimationen for begge hænder
}

function shakeHands() {
  // Tilføj shake-animationen til begge hænder
  player1.className = "player shake";
  player2.className = "player shake";

  // Efter 1,8 sekunder (varigheden af rysteanimationen), skift til de rigtige håndtegn
  setTimeout(() => {
    showHands();
  }, 1800);
}

function showHands() {
  // Opdater spillernes hånd baseret på deres valg
  if (userGuess === "rock") {
    player1.className = "player rock";
  } else if (userGuess === "paper") {
    player1.className = "player paper";
  } else if (userGuess === "scissors") {
    player1.className = "player scissors";
  }

  // Computeren vælger altid "saks"
  computerGuess = "scissors";
  player2.className = "player scissors";

  // Beregn og vis resultatet
  determinWinner();
}

function determinWinner() {
  if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  } else if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  } else if (userGuess === "scissors" && computerGuess === "scissors") {
    result = "draw";
  }

  showResult();
}

function showResult() {
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");

  // Vis resultatet efter animationen og håndtegnene er vist
  if (result === "user") {
    document.getElementById("win").classList.remove("hidden");
  } else if (result === "computer") {
    document.getElementById("lose").classList.remove("hidden");
  } else if (result === "draw") {
    document.getElementById("draw").classList.remove("hidden");
  }
}

