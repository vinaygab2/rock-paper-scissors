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
function getHumanChoice() {
    let humanChoice;

    // Prompt user for his choice
    humanChoice = prompt("Select your choice: rock, paper, scissors?");

    if (humanChoice=="rock" || humanChoice=="paper" || humanChoice=="scissors") {
        return humanChoice;
    }
    else {
        console.log("Enter appropriate choice");
    }
}
// GENERATE human score, computer score

// SHOW who won

console.log(getComputerChoice());
console.log(getHumanChoice());