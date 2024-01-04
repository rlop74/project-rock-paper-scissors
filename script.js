// create getComputerChoice function that generates either Rock, Paper or Scissors

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        computerChoice = "rock";
    } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;

}

/* 
write a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
- the playerSelection and computerSelection 
- and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Account for TIES by re-playing the round.
*/



function playRound() {
    // get computer selection
    const computerSelection = getComputerChoice();
    // get player selection
    const playerSelection = document.getElementById("playerSelection")
    const playerSelectionValue = playerSelection.value;
    const playerSelectionFinal = playerSelectionValue.toLowerCase();
    playerSelection.value = "";
    // results
    const userPick = document.getElementById("userPick");
    const computerPick = document.getElementById("computerPick");
    const result = document.getElementById("result");

    // if user enters Rock
    if (playerSelectionFinal === "rock" && computerSelection === "rock") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "It's a tie!";
    } else if (playerSelectionFinal === "rock" && computerSelection === "paper") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "You lose! Paper beats Rock.";
    } else if (playerSelectionFinal === "rock" && computerSelection === "scissors") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "You win! Rock beats Scissors";
    }
    // if user enters Paper
    if (playerSelectionFinal === "paper" && computerSelection === "paper") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "It's a tie!";
    } else if (playerSelectionFinal === "paper" && computerSelection === "rock") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "You win! Paper beats Rock.";
    } else if (playerSelectionFinal === "paper" && computerSelection === "scissors") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "You lose! Scissors beats paper";
    }
    // if user enters Scissors
    if (playerSelectionFinal === "scissors" && computerSelection === "scissors") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "It's a tie!";
    } else if (playerSelectionFinal === "scissors" && computerSelection === "rock") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "You lose! Rock beats Scissors.";
    } else if (playerSelectionFinal === "scissors" && computerSelection === "paper") {
        userPick.innerHTML = playerSelectionFinal;
        computerPick.innerHTML = computerSelection;
        result.innerHTML = "You win! Scissors beats paper";
    } else {
        alert("You entered an invalid entry. Please enter rock, paper or scissors");
    }
}