'use strict'



const randomNumber = Math.floor(Math.random() * 25) + 1;


function startGame() {
  const guess = parseInt(prompt('Guess a number between 1 and 25:'));

  if (isNaN(guess)) {
    alert('Please enter a valid number.');
    startGame();
  } else {
    checkGuess(guess);
  }
}


function checkGuess(guess) {
  if (guess === randomNumber) {
    alert('Congratulations! You guessed the correct number!');
  } else if (guess < randomNumber) {
    alert('Too low! Try again.');
    startGame();
  } else {
    alert('Too high! Try again.');
    startGame();
  }
}


startGame();
