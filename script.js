function getComputerChoice() {
    let max = 3
    let result = Math.floor(Math.random() * max);
    if (result == 0) {
        return 'Rock'
    } else if (result == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function getHumanChoice() {
    let userChoice = prompt('Pick Rock, Paper or Scissors')
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    console.log(computerSelection);
    console.log(humanSelection);
    if (computerSelection == 'Rock' && humanSelection == 'Rock') {
            console.log('Draw')
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Rock' && humanSelection == 'Paper') {
            console.log('Win')
            humanScore++;
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Rock' && humanSelection == 'Scissors') {
            console.log('Lose')
            computerScore++;
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Paper' && humanSelection == 'Paper') {
            console.log('Draw')
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Paper' && humanSelection == 'Scissors') {
            console.log('Win')
            humanScore++;
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Paper' && humanSelection == 'Rock') {
            console.log('Lose')
            computerScore++;
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Scissors' && humanSelection == 'Scissors') {
            console.log('Draw')
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Scissors' && humanSelection == 'Rock') {
            console.log('Win')
            humanScore++;
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    } else if (computerSelection == 'Scissors' && humanSelection == 'Paper') {
            console.log('Lose')
            computerScore++;
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
        playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
setTimeout(playGame, 10000 * (i + 1));
}