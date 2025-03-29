// GET computer choice
function getComputerChoice() {
  let computerChoice;

  // Generate random numbers from 0 to 2
  computerChoice = Math.floor((Math.random() * 10) / 3);

  if (computerChoice == 0) {
    return 'rock';
  } else if (computerChoice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// GET human choice
function getHumanChoice() {
  let humanChoice;

  // Prompt user for his choice
  humanChoice = prompt('Select your choice: rock, paper, scissors?');
  // make human choice case insensitive
  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice == 'rock' ||
    humanChoice == 'paper' ||
    humanChoice == 'scissors'
  ) {
    return humanChoice;
  } else {
    console.log('Did not select appropriate choice!');
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

// GENERATE scores for 5-round game
function playGame() {
  // for(i=0; i<5; i++) {
  //     playRound(getHumanChoice(),getComputerChoice());
  // }
  playRound(getHumanChoice(), getComputerChoice());
}

let humanScore = 0;
let computerScore = 0;

playGame();

// SHOW who won
if (humanScore > computerScore) {
  console.log('Congratulations! You are the winner.');
} else if (humanScore < computerScore) {
  console.log('You Lost! Better Luck Next Time.');
} else {
  console.log("It's a Draw!");
}
console.log('Final score:', humanScore, computerScore);
