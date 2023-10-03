// console.log('Hello World');

// this function will randomly return "rock", "paper" and "scissors".

function getComputerChoice() {
    // first wrapping the math random function in a variable.
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Now write a function that plays a single round of rock paper scissors.
// the function should take two parameters


// using a helper function, which will aid in playround function later.
function checkWinner(playerSelection,ComputerSelection) {
    if (playerSelection ==ComputerSelection ) {
        // if computer and user both select same option this condition will return a string stating tie
        return "tie";
    } else if (playerSelection == "rock" && ComputerSelection == "scissors" || playerSelection == "paper" && ComputerSelection == "rock" || playerSelection == "scissors" && ComputerSelection == "paper") {
        return "player";
    } else {
        return "computer";
    }
}
