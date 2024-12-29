// GET computer choice
function getComputerChoice() {
    let computerChoice;

    // Generate random numbers from 0 to 2
    computerChoice = Math.floor(Math.random()*10/3);
    
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// GET human choice

// GENERATE human score, computer score

// SHOW who won

console.log(getComputerChoice());