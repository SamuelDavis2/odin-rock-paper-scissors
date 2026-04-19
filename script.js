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

const btn = document.querySelectorAll("button");
btn.forEach(btn => {
        btn.addEventListener("click", () => playRound(btn.id));
});

const results = document.querySelector(".results");
const computerResults = document.createElement("p");
const humanResults = document.createElement("p");
const winner = document.createElement("p");
const score = document.createElement("h2");
const finalWinner = document.createElement("h2");
const restart = document.createElement("button");
restart.textContent = "Play Again";

function playRound(humanSelection, computerSelection) {
        computerSelection = getComputerChoice();
        computerResults.textContent = `Computer Choice: ${computerSelection}`;
        humanResults.textContent = `Human Choice: ${humanSelection}`;
        results.appendChild(computerResults);
        results.appendChild(humanResults);
        if (computerSelection == 'Rock' && humanSelection == 'Rock') {
            winner.textContent = "Winner: Draw";
            results.appendChild(winner);
            draw++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
        } else if (computerSelection == 'Rock' && humanSelection == 'Paper') {
            winner.textContent = "Winner: Human";
            results.appendChild(winner);
            humanScore++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
         } else if (computerSelection == 'Rock' && humanSelection == 'Scissors') {
            winner.textContent = "Winner: Computer";
            results.appendChild(winner);
            computerScore++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
        } else if (computerSelection == 'Paper' && humanSelection == 'Paper') {
            winner.textContent = "Winner: Draw";
            results.appendChild(winner);
            draw++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
        } else if (computerSelection == 'Paper' && humanSelection == 'Scissors') {
            winner.textContent = "Winner: Human";
            results.appendChild(winner);
            humanScore++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
         } else if (computerSelection == 'Paper' && humanSelection == 'Rock') {
            winner.textContent = "Winner: Computer";
            results.appendChild(winner);
            computerScore++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
        } else if (computerSelection == 'Scissors' && humanSelection == 'Scissors') {
            winner.textContent = "Winner: Draw";
            results.appendChild(winner);
            draw++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
         } else if (computerSelection == 'Scissors' && humanSelection == 'Rock') {
            winner.textContent = "Winner: Human";
            results.appendChild(winner);
            humanScore++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
         } else if (computerSelection == 'Scissors' && humanSelection == 'Paper') {
            winner.textContent = "Winner: Computer";
            results.appendChild(winner);
            computerScore++;
            score.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            results.prepend(score);
        }
        if (humanScore + computerScore + draw == 5) {
                if (humanScore > computerScore) {
                finalWinner.textContent = "Human Wins!"
                results.appendChild(finalWinner);
                results.appendChild(restart);
                }
                else if (humanScore == computerScore) {
                finalWinner.textContent = "It's a Tie!"
                results.appendChild(finalWinner);
                results.appendChild(restart);
                } else {
                finalWinner.textContent = "Computer Wins!"
                results.appendChild(finalWinner);
                results.appendChild(restart);
                }
        }
}

function playAgain() {
        humanScore = 0;
        computerScore = 0;
        draw = 0; 
        computerResults.textContent = `Computer Choice: `;
        humanResults.textContent = `Human Choice: `;
        winner.textContent = `Winner: `;
        finalWinner.remove();
        score.textContent = `Human:     Computer: `;
        restart.remove();
}

restart.addEventListener("click", playAgain);

restart.style.backgroundColor = '#f2f0f7';
restart.style.border = "none";
restart.style.color = "#756bb1";
restart.style.borderRadius = "20px";
restart.style.fontWeight = "bold";