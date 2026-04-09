function getComputerChoice() {
    let max = 3
    let result = Math.floor(Math.random() * max);
    console.log(result);
    if (result == 0) {
        return 'Rock'
    } else if (result == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

console.log(getComputerChoice());
