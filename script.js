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
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    console.log(computerSelection);
    console.log(humanSelection);
    if (computerSelection == 'Rock' && humanSelection == 'Rock') {
            console.log('Draw')
    } else if (computerSelection == 'Rock' && humanSelection == 'Paper') {
            console.log('Win')
            humanScore++;
    } else if (computerSelection == 'Rock' && humanSelection == 'Scissors') {
            console.log('Lose')
            computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);