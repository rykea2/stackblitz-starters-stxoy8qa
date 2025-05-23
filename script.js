const rockbutton = document.querySelector('#Rock');
const paperbutton = document.querySelector('#Paper');
const scissorsbutton = document.querySelector('#Scissors');
const delaybutton = document.querySelector('#delayButton');
const displayComputerChoice = document.querySelector('#computerChoice');
let yourChoice;
const choices = ['rock', 'paper', 'scissors'];
const displayYourChoice = document.querySelector('#yourChoice');
const displayResults = document.querySelector('#results');
const displayWins = document.querySelector('#wins')
const displayLoss = document.querySelector('#loss')
const displayDraw = document.querySelector('#draw')
const displayCash = document.querySelector('#currentCash');
const timesTwoButton = document.querySelector('#timestwo');
const displayCost = document.querySelector('#currentCost');
const resetButton = document.querySelector('#resetButton');
let cash = 1000;
let cost = 100;
let delay = 0;
let wins = 0;
let loss = 0;
let draw = 0;

delaybutton.addEventListener('click', delayincrease);
resetButton.addEventListener('click', resetCost);

function delayincrease() {
  delay += 500
  currentDelay.innerHTML = 'Delay =' + delay
}

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
  setTimeout(computerChoice, 500);
}
function selectPaper() {
  yourChoice = 'paper';
  setTimeout(computerChoice, 500);
}
function selectScissors() {
  yourChoice = 'scissors';
  setTimeout(computerChoice, 500);
}



function computerChoice() {
  cash -= cost;
  console.log(cash);

  let computerNumber = choices[Math.floor(Math.random() * 3)];
  displayYourChoice.innerHTML = yourChoice;
  displayComputerChoice.innerHTML = computerNumber;
  if (yourChoice === computerNumber) {
    setTimeout(() => {
      displayResults.innerHTML = 'Its a draw!';
    }, 500)
    draw++;
    cash += cost;
  } else if (computerNumber === 'rock' && yourChoice === 'paper') {
    setTimeout(() => {displayResults.innerHTML = 'You win!'}, 500 + delay);
    cash += cost * 2;
    wins++;
  } else if (computerNumber === 'paper' && yourChoice === 'scissors') {
    setTimeout(() => {displayResults.innerHTML = 'You win!'}, 500 + delay);
    cash += cost * 2;
    wins++;
  } else if (computerNumber === 'paper' && yourChoice === 'rock') {
    setTimeout(() => {displayResults.innerHTML = 'You win!'}, 500 + delay);
    cash += cost * 2;
    wins++;
  } else {
    setTimeout(() => {displayResults.innerHTML = 'You lose!'}, 500 + delay);
    displayResults.innerHTML = ''
    loss++;
  }
  displayCash.innerHTML = 'Cash =' + cash;
  cost = 100;
  console.log(cost,cash)
}

////
displayCash.innerHTML = 'Cash:' + cash;
displayCost.innerHTML = 'Cost:' + cost;
displayWins.innerHTML = 'Wins:' + wins;
displayLoss.innerHTML = 'Loss:' + loss;
displayDraw.innerHTML = 'Draw:' + draw;
////////