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