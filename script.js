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

let humanScore = 0;
let computerScore = 0;
let draw = 0;

function playRound(humanSelection, computerSelection) {
    console.log(computerSelection);
    console.log(humanSelection);
    if (computerSelection == 'Rock' && humanSelection == 'Rock') {
            console.log('Draw')
            console.log('Computer:', computerScore);
            console.log('You:', humanScore);
            draw++;
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
            draw++;
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
            draw++;
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

function playGame() {
    const btn = document.querySelectorAll("button");
        const humanSelection = btn.forEach(btn => {
                btn.addEventListener("click", () => {
                        console.log(btn.id);
                });
        });
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (humanScore + computerScore + draw == 5) {
        if (humanScore > computerScore) {
        console.log('Human Wins!')
        }
        else if (humanScore == computerScore) {
        console.log("It's a Tie!");
        } else {
        console.log('Computer Wins!')
        }
    }
    
}