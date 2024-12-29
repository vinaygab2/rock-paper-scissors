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
        console.log("Did not select appropriate choice!");
    }
}

// GENERATE human score, computer score of one-round game
function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    // conditions for human winning
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock"  ||
        humanChoice == "scissors" && computerChoice == "paper") {
            humanScore = humanScore + 1;
        }
    // conditions for computer winning
    else if (computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock"  ||
        computerChoice == "scissors" && humanChoice == "paper") {
            computerScore = computerScore + 1;
    }
    // when it is a draw
    else {
        console.log("It's a Draw!");
    }
}
// SHOW who won

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);
