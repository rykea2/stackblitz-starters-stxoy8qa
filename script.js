const rockbutton = document.querySelector('#Rock');
const paperbutton = document.querySelector('#Paper');
const scissorsbutton = document.querySelector('#Scissors');
const displayComputerChoice = document.querySelector('#computerChoice');
let yourChoice;
const choices = ['rock', 'paper', 'scissors'];
const displayYourChoice = document.querySelector('#yourChoice');
const displayResults = document.querySelector('#results');

const displayCash = document.querySelector('#currentCash');
const timesTwoButton = document.querySelector('#timestwo');
const displayCost = document.querySelector('#currentCost');
const resetButton = document.querySelector('#resetButton');
let cash = 1000;
let cost = 100;

resetButton.addEventListener('click', resetCost);

timesTwoButton.addEventListener('click', timesTwoCost);
function timesTwoCost() {
  cost += cost;
  displayCost.innerHTML = 'Current Cost = ' + cost;
}

function resetCost() {}

rockbutton.addEventListener('click', selectRock);
paperbutton.addEventListener('click', selectPaper);
scissorsbutton.addEventListener('click', selectScissors);

function selectRock() {
  yourChoice = 'rock';
  computerChoice();
}
function selectPaper() {
  yourChoice = 'paper';
  computerChoice();
}
function selectScissors() {
  yourChoice = 'scissors';
  computerChoice();
}

function computerChoice() {
  cash -= cost;
  console.log(cash);

  let computerNumber = choices[Math.floor(Math.random() * 3)];
  displayYourChoice.innerHTML = yourChoice;
  displayComputerChoice.innerHTML = computerNumber;
  if (yourChoice === computerNumber) {
    displayResults.innerHTML = 'Its a draw!';
    cash += cost;
  } else if (computerNumber === 'rock' && yourChoice === 'paper') {
    displayResults.innerHTML = 'You win!';
    cash += cost * 2;
  } else if (computerNumber === 'paper' && yourChoice === 'scissors') {
    displayResults.innerHTML = 'You win!';
    cash += cost * 2;
  } else if (computerNumber === 'paper' && yourChoice === 'rock') {
    displayResults.innerHTML = 'You win!';
    cash += cost * 2;
  } else {
    displayResults.innerHTML = 'You lose!';
  }
  displayCash.innerHTML = 'Cash =' + cash;
  cost = 100;
  console.log(cost,cash)
}

////
displayCash.innerHTML = 'Cash =' + cash;

////////
setTimeout(() => {computerChoice
  
}, 1000);