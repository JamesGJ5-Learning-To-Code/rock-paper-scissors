# rock-paper-scissors
Made at the behest of the Foundations Course in The Odin Project

# Plan
1. Game will be played against computer:

- For computer, make function called getComputerChoice that randomly returns either 'Rock', 'Paper' or 'Scissors'
- Will call function in game when it's the computer's turn
- Task: use console to make sure this function returns the expected output before moving to next step of code
- DONE

2. Write a function called playRound that plays a single round of Rock Paper Scissors, that:

- Takes parameters playerSelection and computerSelection
    - Make playerSelection parameter case-INsensitive (so users can input rock, ROCK, RocK etc. and it still works)
        - DONE
- Returns a string declaring the winner of the round like, for example, "You Lose this round! Paper beats Rock" or maybe "You Win this round! Paper beats Rock"
    - Can also be a draw
- NOTE: Want to return the results of this function call for later use, not console.log() them

3. Write a new function called game():

- Call playRound inside game() to play a 5 round game that keeps score and reports a winner or loser at the end
    - Game can be a draw if it has to be 5 rounds
    - A loop would be a concise way to do this
    - Display the result of each round using console.log()
- Display the winner at the end using console.log()
- Use prompt() to get input from the user
- Feel free to re-work your previous functions if you need to--might want to change return value to something more useful
- Feel free to create more "helper" functions if they might be useful