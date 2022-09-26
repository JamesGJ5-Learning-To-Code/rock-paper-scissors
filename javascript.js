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