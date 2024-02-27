// rewriting code from scratch to test out neatness

let playerScore = 0;
let computerScore = 0;
//creates our random gen
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//gets the computers random input from 1-3 and turns into output of rock, paper, scissors
function getComputerChoice() {
    let randomInt = getRndInteger(1, 3);
    if (randomInt == 1) {
        return "rock";
    } else if (randomInt == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}
//this function lets us play a round of rpc
function playRound (playerSelection, computerSelection) {
    score.style.color = "black";
      if (playerSelection === computerSelection) {
        resultText.style.color = "black";
        resultText.textContent = `You tied this round! Computer chose ${computerSelection}.`;
            showScore();
          return 0;
      } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" ) { 
            playerScore += 1;
            resultText.style.color = "limegreen";
            resultText.textContent = `You win this round! Computer chose ${computerSelection}.`;
            showScore();
          return 1;
      } else {
        computerScore += 1;
        resultText.style.color = "red";
        resultText.textContent = `You lose this round! Computer chose ${computerSelection}.`;
      showScore();
          return -1;
      }
  }
//lets show the score at the end
const score = document.querySelector('#score');
function showScore() {
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
//creating UI for the game on html, adds live buttons with actions 
let playerSelection;
let computerSelection;
const resultText = document.querySelector('#result');
const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice());
        if (playerScore >= 5 || computerScore >= 5) {
            gameFinish();
        };
    })
});

function gameFinish() {
    if (playerScore > computerScore) {
        score.style.color = "limegreen";
        resultText.textContent = "You Win!!";
    } else {
        score.style.color = "red";
        resultText.textContent = "You Lose!!"
    }
    playerScore = 0;
    computerScore = 0;
}