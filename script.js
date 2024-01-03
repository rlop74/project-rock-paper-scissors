
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
    // get computerChoice
    const computerChoice = getComputerChoice();
    // get userChoice ID
    const userChoice = document.getElementById("userChoice");
    // get userChoice name
    const userChoiceName = userChoice.name;
    // get userPick ID
    const userPick = document.getElementById("userPick");
    // get computerPick ID
    const computerPick = document.getElementById("computerPick");
    // get result ID
    const result = document.getElementById("result");

    // display user and computer picks
    userPick.innerHTML = String(userChoiceName);
    computerPick.innerHTML = String(computerChoice);

    // if user picks rock
    if (userChoiceName === "rock" && computerChoice == "rock") {
        result.innerHTML = "It's a tie!";
    } else if (userChoiceName == "rock" && computerChoice == "paper") {
        result.innerHTML = "You lose! Paper beats Rock.";
    } else if (userChoiceName == "rock" && computerChoice == "scissors") {
        result.innerHTML = "You win! Rock beats Scissors";
    } 
}

