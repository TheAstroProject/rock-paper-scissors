//this is going to be the start of your 
// rock paper scissors game! You got this!

// computer generates a random choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 +1);
    let computerChoice = o;
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;    
    }
    return computerChoice;
}

// player selects his choice via prompt with case-insensitive

function getPlayerSelection() {
    let playerChoice = "";
    while (
        playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors" 
    ) {
        playerChoice = prompt('Choose your weapon',"rock, paper, scissors");
        if (playerChoice === null) {
            return null;
        }
        playerChoice = playerChoice.toLowerCase().trim();
    }
    return playerChoice
}

// we take player choice and computer choice and compare it. then return the winner

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === "paper" && computerSelection == "rock") {
        result = "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        result = "You Lose! Rock beats Scissors";
    } else {
        result = `Draw! ${playerSelection} equals ${computerSelection}`;
    }
}

//play 5 times in a row and check who win bo5