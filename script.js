let playerChoiceDisplay = document.querySelector('.p-choice-text');
let computerChoiceDisplay = document.querySelector('.c-choice-text');
let roundWinnerDisplay = document.querySelector('.round-winner-display');
let playerWinsDisplay = document.querySelector('.player-score-display');
let computerWinsDisplay = document.querySelector('.computer-score-display');

const reset = document.querySelector('.reset-btn');
const rock = 'Rock!';
const paper = 'Paper!';
const scissors = 'Scissors!';

// Load Event Listeners
loadEventListeners();

function loadEventListeners() {
  // Player click event
  document.addEventListener('click', playGame);
  document.addEventListener('click', gameReset);
}

// Get player choice and display it
// also fires computer 'choice' event
// which displays computer's 'choice'.
// Tracks scores and round winner.
function playGame(e) {
  // checks whether click event 'takes place' within the button choices areas
  if (e.target.parentElement.classList.contains('choices')) {
    playerChoiceDisplay.textContent = e.target.textContent;
    computerChoice();

    switch (true) {
      // Tie Cases
      case (playerChoiceDisplay.textContent === rock &&
        computerChoiceDisplay.textContent == rock) ||
        (playerChoiceDisplay.textContent === paper &&
          computerChoiceDisplay.textContent === paper) ||
        (playerChoiceDisplay.textContent === scissors &&
          computerChoiceDisplay.textContent === scissors):
        roundWinnerDisplay.textContent = 'Tie!';
        break;
      // Winning Cases
      case (playerChoiceDisplay.textContent === rock &&
        computerChoiceDisplay.textContent == scissors) ||
        (playerChoiceDisplay.textContent === paper &&
          computerChoiceDisplay.textContent === rock) ||
        (playerChoiceDisplay.textContent === scissors &&
          computerChoiceDisplay.textContent === paper):
        roundWinnerDisplay.textContent = 'Player Wins!';
        playerWinsDisplay.textContent = (
          parseInt(playerWinsDisplay.textContent) + 1
        ).toString();
        break;
      // Losing Cases
      case (playerChoiceDisplay.textContent === rock &&
        computerChoiceDisplay.textContent == paper) ||
        (playerChoiceDisplay.textContent === paper &&
          computerChoiceDisplay.textContent === scissors) ||
        (playerChoiceDisplay.textContent === scissors &&
          computerChoiceDisplay.textContent === rock):
        roundWinnerDisplay.textContent = 'Computer Wins!';
        computerWinsDisplay.textContent = (
          parseInt(computerWinsDisplay.textContent) + 1
        ).toString();
        break;
    }
  }
}

function gameReset(e) {
  if (e.target.parentElement.classList.contains('reset-button')) {
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    roundWinnerDisplay.textContent = '';
    playerWinsDisplay.textContent = 0;
    computerWinsDisplay.textContent = 0;
  }
}

function computerChoice() {
  let result;
  let choices = ['Rock!', 'Paper!', 'Scissors!'];
  let index = Math.floor(Math.random() * 3);
  result = choices[index];
  computerChoiceDisplay.textContent = result;
}
