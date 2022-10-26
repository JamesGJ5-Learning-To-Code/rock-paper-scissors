const buttonList = document.querySelectorAll('button');
const commentaryDiv = document.querySelector('div#result-description');
const scoreDiv = document.querySelector('div#score');

let playerWins = 0;
let computerWins = 0;

buttonList.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        roundResult = playRound(playerSelection, getComputerChoice());
        updateWinCounts(roundResult);
        showScore();
    });
});

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
        result = "DRAW";
    } else {
        result = (playerSelection === "Rock" && computerSelection === "Scissors" || 
                  playerSelection === "Paper" && computerSelection === "Rock" || 
                  playerSelection === "Scissors" && computerSelection === "Paper")
                  ? "WIN" : "LOSE";
    }
    return result;
}

function showRoundResult(result, playerSelection, computerSelection) {
    let action = "";
    if (result !== "DRAW") {
        action = (result === "WIN") ?
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

function updateWinCounts(roundResult) {
    if (roundResult !== "Draw") {
        if (roundResult === "Win") {
            playerWins += 1;
        } else {
            computerWins += 1;
        };
    };
};

function resetScore() {
    playerWins = 0;
    computerWins = 0;
}

function showScore() {
    if (playerWins == 5) {
        scoreDescription = "You won this Game! :)";
        resetScore();
    } else if (computerWins == 5) {
        scoreDescription = "You lost this Game! But Don't Give Up! :)";
        resetScore();
    } else {
        scoreDescription = `Score: You ${playerWins} - ${computerWins} Computer`;
    };
    scoreDiv.textContent = scoreDescription;
};