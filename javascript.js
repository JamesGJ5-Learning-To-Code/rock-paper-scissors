function getComputerChoice () {
    let choiceInteger = Math.floor(Math.random() * 3);
    if (choiceInteger === 0) {
        return "Rock";
    } else if (choiceInteger === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result
    // TODO: make the below into a helper function
    if (playerSelection === computerSelection) {
        result = "Draw";
    } else {
        result = (playerSelection === "Rock" && computerSelection === "Scissors" || 
                  playerSelection === "Paper" && computerSelection === "Rock" || 
                  playerSelection === "Scissors" && computerSelection === "Paper")
                  ? "Win" : "Lose";
    }
    // TODO: make the below into a helper function
    let action = "";
    if (result !== "Draw") {
        action = (result === "Win") ?
        ` ${playerSelection} beats ${computerSelection}!` : ` ${playerSelection} is beaten by ${computerSelection}!`;
    }
    console.log(`You ${result} this Round!${action}`);
    return result;
}

function game() {
    let playerWins = 0;
    let totalWins = 0;
    let roundResult
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(prompt("Choose your weapon!"), getComputerChoice());
        if (roundResult !== "Draw") {
            if (roundResult === "Win") {
                playerWins += 1
            }
            totalWins += 1
        }
    }
}