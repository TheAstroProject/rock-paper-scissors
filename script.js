//rewriting code in a different manner as I could not find a previous solution

//Defining the variables that we are going to use 
let result = null;
let playerCount = 0;
let computerCount = 0;
let playerWin = 'Player wins!';
let tie = 'You tied!';
let computerWin = 'Computer wins!';

// function that obtains the selection of the computer, player and shows who won the round
const game = () => {

    //computer picks a number from 1-3 (values = rock, paper, scissors)
   const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerPick = null

    if (random === 1) {
        computerPick = 'rock'
    } else if (random === 2 ) {
        computerPick = 'paper'
    } else {
        computerPick = 'scissors'
    }
   
    return computerPick
}

// the player types out their choice of RPS
const getPlayerChoice = () => {
    let playerPick = prompt('Choice: Rock - Paper - Scissors ').toLowerCase()

    if (playerPick != 'rock' && playerPick != 'paper' && playerPick != 'scissors') {
        alert('Enter a valid choice: rock, paper, scissors')
        return getPlayerChoice()
    }

    return playerPick
}

let computer = getComputerChoice()
let player = getPlayerChoice

// show the selection of the player, computer and round of the game 
const playRound = (player, computer) => {

    console.log(`The computer chooses: ${computer}`)
    console.log(`You chose: ${player}`)

    if (player === computer) {
        result = tie
        alert(tie)
        console.log(tie)
    } else if ( player === 'rock' && computer === 'paper' || 
    player === 'paper' && computer === 'scissors' || 
    player === 'scissors' && computer === 'rock'){
        result = computerWin
        alert(computerWin)
        console.log(computerWin)
    } else {

        result = playerWin
        alert(playerWin)
        console.log(playerWin)
        
        return result
    }
}

    playRound(player, computer)
}