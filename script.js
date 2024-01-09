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
    if (playerSelection === computerSelection) {
        
    }    
}