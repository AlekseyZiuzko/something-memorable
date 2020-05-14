"use strict";
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const contBtn = document.querySelector(".continue-btn");
const scoreboard = {
    player: 0,
    computer: 0,
};

// Play game
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get computer choice
function getComputerChoice() {
    const rand = Math.random();

    if (rand < 0.2) {
        return "rock";
    } else if (rand <= 0.4) {
        return "paper";
    } else if (rand <= 0.6) {
        return "scissors";
    } else if (rand <= 0.8) {
        return "lizard";
    } else {
        return "spock";
    }
}

// Get winner
function getWinner(p, c) {
    if (p === c) {
        return "draw";
    } else if (p === "rock") {
        if (c === "paper") {
            return "computer";
        } else if (c === "spock") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "computer";
        } else if (c === "lizard") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "computer";
        } else if (c === "spock") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "lizard") {
        if (c === "scissors") {
            return "computer";
        } else if (c === "rock") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "spock") {
        if (c === "paper") {
            return "computer";
        } else if (c === "lizard") {
            return " computer";
        } else {
            return "player";
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === "player") {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            }</strong></p>
            <button id="continue" class="continue-btn">Continue</button>
        `;
    } else if (winner === "computer") {
        scoreboard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            }</strong></p>
            <button id="continue" class="continue-btn">Continue</button>
        `;
    } else {
        result.innerHTML = `
            <h1>It's A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Also Chose <strong>${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            }</strong></p>
            <button id="continue" class="continue-btn">Continue</button>
        `;
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = "block";
    contBtn.addEventListener("click", contGame);
}

// Restart
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
    restart.style.display = "none";
}

// Continue
function contGame() {
    modal.style.display = "none";
}

// Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
