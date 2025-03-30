// GET computer choice
function getComputerChoice() {
  let choice;
  // Generate random numbers from 0 to 2
  choice = Math.floor((Math.random() * 10) / 3);

  if (choice == 0) {
    return 'rock';
  } else if (choice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// GENERATE human score, computer score of one-round game
function playRound(humanChoice, computerChoice) {
  // conditions for human winning
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    humanScore = humanScore + 1;
    console.log('You win! Rock beats Scissors.');
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore = humanScore + 1;
    console.log('You win! Paper beats Rock.');
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore = humanScore + 1;
    console.log('You win! Scissors beats Paper.');
  }

  // conditions for computer winning
  else if (computerChoice == 'rock' && humanChoice == 'scissors') {
    computerScore = computerScore + 1;
    console.log('You lose! Rock beats Scissors.');
  } else if (computerChoice == 'paper' && humanChoice == 'rock') {
    computerScore = computerScore + 1;
    console.log('You lose! Paper beats Rock.');
  } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
    computerScore = computerScore + 1;
    console.log('You lose! Scissors beat Paper.');
  }

  // when it is a draw
  else {
    console.log("It's a Draw!");
  }

  console.log('Your Score: ', humanScore, 'Computer: ', computerScore);
}

let humanScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
  playRound(e.target.id, getComputerChoice());
});
