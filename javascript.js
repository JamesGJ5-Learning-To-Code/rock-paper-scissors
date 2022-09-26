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
    if (playerSelection === computerSelection) {
        result = "Draw";
    } else {
        result = (playerSelection === "Rock" && computerSelection === "Scissors" || 
                  playerSelection === "Paper" && computerSelection === "Rock" || 
                  playerSelection === "Scissors" && computerSelection === "Paper")
                  ? "Win" : "Lose";
    }
    let action = ""
    if (result !== "Draw") {
        action = (result === "Win") ?
        ` ${playerSelection} beats ${computerSelection}!` : ` ${playerSelection} is beaten by ${computerSelection}!`
    }
    console.log(`You ${result}!${action}`)
    return result;
}