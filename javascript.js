function getComputerChoice () {
    // TODO: get rid of console.log() statements and return choices rather than 
    // assigning them to variables
    choiceInteger = Math.floor(Math.random() * 3)
    // console.log(choiceInteger)
    if (choiceInteger === 0) {
        choice = "Rock"
    } else if (choiceInteger === 1) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    // console.log(choice)
    return choice
}

function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection)
    // console.log(computerSelection)

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    // console.log(playerSelection)
}

playRound("rock", getComputerChoice())