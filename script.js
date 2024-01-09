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

const btns = document.querySelectorAll(".userChoice");
const updateChoice = btns.forEach(btn => btn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = btn.id;
    let winner = "";

    playRound();
    
    function playRound() {
    
        if (playerSelection === computerSelection) {
            winner = "tie";
        }
        else if (
            playerSelection === "rock" && computerSelection === "scissors" || 
            playerSelection === "paper" && computerSelection === "rock" || 
            playerSelection === "scissors" && computerSelection === "paper"
        ) {
            winner = "player";
        } else if (
            playerSelection === "scissors" && computerSelection === "rock" || 
            playerSelection === "rock" && computerSelection === "paper" || 
            playerSelection === "paper" && computerSelection === "scissors"
        ) {
            winner = "computer";
        }
    }

    updateChoice();

    function updateChoice() {
        playerWeapon = document.querySelector(".player-weapon");
        computerWeapon = document.querySelector(".computer-weapon");

        switch(playerSelection) {
            case "rock":
                playerWeapon.textContent = "ROCK";
                break;
            case "paper":
                playerWeapon.textContent = "PAPER";
                break;
            case "scissors":
                playerWeapon.textContent = "SCISSORS";
                break;
        }

        switch(computerSelection) {
            case "rock":
                computerWeapon.textContent = "ROCK";
                break;
            case "paper":
                computerWeapon.textContent = "PAPER";
                break;
            case "scissors":
                computerWeapon.textContent = "SCISSORS";
                break;

        }
    }

    roundWinner();

    function roundWinner() {
        const roundResult = document.querySelector("#roundResult");
        

        switch(winner) {
            case "player":
                roundResult.textContent = "You win!";
                break;
            case "computer":
                roundResult.textContent = "You lose!";
                break;
            case "tie":
                roundResult.textContent = "It's a tie!";
                break;
        }
    }

}));

