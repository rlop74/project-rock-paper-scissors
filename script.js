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


function playRound(playerSelection, computerSelection) {
    // get computer selection
    computerSelection = getComputerChoice();
    // get player selection
    playerSelection = prompt("Rock, Paper, Scissors: ");
    let result;

    // if player and computer selected the same
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result = "It's a tie!";
    } 
    // if player chooses rock
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result = "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result = "You win! Rock beats Scissors";
    } 
    // if player chooses paper
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result = "You lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result ="You win! Paper beats Rock";
    }
    // if player chooses scissors
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result = "You lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log(`Computer: ${computerSelection}`);
        console.log(`Player: ${playerSelection}`);
        result = "You win! Scissors beats Paper";
    }
    // if player enters invalid entry
    else {
        alert("Invalid entry");
        result = "Invalid entry"
    }

    console.log(result);
    return result;
}

// function game() {
//     playerPoints = 0;
//     computerPoints = 0;

//     for (i = 1; i <= 5; i++) playRound();
// }