//rewriting code in a different manner as I could not find a previous solution

//Defining the variables that we are going to use 
let result = null
let playerCount = 0
let computerCount = 0
let playerWin = 'Player wins!'
let tie = 'You tied!'
let computerWin = 'Computer wins!'

// function that obtains the selection of the computer, and shows who won the round
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

// this function gets the players choice of RPS via a Prompt
const getPlayerChoice = () => {
    let playerPick = prompt('Choice: Rock - Paper - Scissors ').toLowerCase()

    if (playerPick != 'rock' && playerPick != 'paper' && playerPick != 'scissors') {
        alert('Enter a valid choice: rock, paper, scissors')
        return getPlayerChoice()
    }

    return playerPick
}

let computer = getComputerChoice()
let player = getPlayerChoice()

// gets computers choice, then players choice, and returns result
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



// loop for a 5 round game (not a Bo5)
for (let i = 0; i <= 4; i++) {
    game()

    if (result == playerWin) {
        playerCount += 1
    } else if (result == computerWin) {
        computerCount += 1
    }
    
    console.log(` Player: ${playerCount} \n Computer: ${computerCount}`)
}

// alerts you if you win, lose or tie
if (playerCount > computerCount) {
    alert('Congratulations, you won!')
} else if (computerCount > playerCount){
    alert('Sorry, computer won!')
} else {
    alert('Oh a tie!')
}