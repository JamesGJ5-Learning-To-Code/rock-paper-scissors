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
    commentaryDiv.textContent = `You ${result} this Round!${action}`;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;
    result = getRoundResult(playerSelection, computerSelection);
    showRoundResult(result, playerSelection, computerSelection);
    return result;
}

const buttonList = document.querySelectorAll('button');

playerWins = 0;
computerWins = 0;

const scoreDiv = document.querySelector('div#score');

buttonList.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        roundResult = playRound(playerSelection, getComputerChoice());
        if (roundResult !== "Draw") {
            if (roundResult === "Win") {
                playerWins += 1;
            } else {
                computerWins += 1;
            };
        };
        if (playerWins == 5 && computerWins < 5) {
            scoreDescription = "You Won this Game! Refresh the Page to Win Again :)";
        } else if (computerWins == 5 && playerWins < 5) {
            scoreDescription = "You Lost this Game but Refresh the Page to Win Next Time :)";
        } else if (playerWins < 5 && computerWins < 5) {
            scoreDescription = `Score: You ${playerWins} - ${computerWins} Computer`;
        };
        scoreDiv.textContent = scoreDescription;
    });
});

const commentaryDiv = document.querySelector('div#result-description');