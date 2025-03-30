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
    winDiv.textContent = 'You win! Rock beats Scissors.';
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore = humanScore + 1;
    winDiv.textContent = 'You win! Paper beats Rock.';
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore = humanScore + 1;
    winDiv.textContent = 'You win! Scissors beats Paper.';
  }

  // conditions for computer winning
  else if (computerChoice == 'rock' && humanChoice == 'scissors') {
    computerScore = computerScore + 1;
    winDiv.textContent = 'You lose! Rock beats Scissors.';
  } else if (computerChoice == 'paper' && humanChoice == 'rock') {
    computerScore = computerScore + 1;
    winDiv.textContent = 'You lose! Paper beats Rock.';
  } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
    computerScore = computerScore + 1;
    winDiv.textContent = 'You lose! Scissors beat Paper.';
  }
  // when it is a draw
  else {
    winDiv.textContent = "It's a Draw";
  }
}

// SHOW who is winning
function showStatus() {
  scoreDiv.textContent = `You: ${humanScore} Computer: ${computerScore}`;

  if (humanScore > computerScore) {
    statusDiv.textContent = `Good! You are Ahead! (Round ${roundNo})`;
  } else if (humanScore < computerScore) {
    statusDiv.textContent = `Compter Ahead! (Round ${roundNo})`;
  } else {
    statusDiv.textContent = `Both Same! (Round ${roundNo})`;
  }
}

let humanScore = 0;
let computerScore = 0;
let roundNo = 1;
const container = document.querySelector('#container');
const msgDiv = document.querySelector('#msg');
const winDiv = document.querySelector('#winDiv');
const scoreDiv = document.querySelector('#scoreDiv');
const statusDiv = document.querySelector('#statusDiv');

container.addEventListener('click', (e) => {
  playRound(e.target.id, getComputerChoice());
  showStatus();
  roundNo++;
});
