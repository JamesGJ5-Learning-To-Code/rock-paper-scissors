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

function getRoundResult(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Draw";
    } else {
        result = (playerSelection === "Rock" && computerSelection === "Scissors" || 
                  playerSelection === "Paper" && computerSelection === "Rock" || 
                  playerSelection === "Scissors" && computerSelection === "Paper")
                  ? "Win" : "Lose";
    }
    return result;
}

function showRoundResult(result, playerSelection, computerSelection) {
    let action = "";
    if (result !== "Draw") {
        action = (result === "Win") ?
        ` ${playerSelection} beats ${computerSelection}!` : ` ${playerSelection} is beaten by ${computerSelection}!`;
    }
    console.log(`You ${result} this Round!${action}`);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;
    result = getRoundResult(playerSelection, computerSelection);
    showRoundResult(result, playerSelection, computerSelection);
    return result;
}

function game() {
    let playerWins = 0;
    let totalWins = 0;
    let roundResult;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(prompt("Choose your weapon!"), getComputerChoice());
        if (roundResult !== "Draw") {
            if (roundResult === "Win") {
                playerWins += 1;
            }
            totalWins += 1;
        }
    }
    if (totalWins > 0) {
        if (playerWins > totalWins / 2) {
            return console.log("You Win the Game!");
        } else if (playerWins < totalWins / 2) {
            return console.log("You Lose this Game, but don't worry! :)");
        }
        return console.log("This Game was a Draw!");
    }
}

game()