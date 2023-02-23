'use strict';

let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = luckyNumber;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No Number...';
  } else if (guessNumber === luckyNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = luckyNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== luckyNumber) {
    if (score > 0) {
      displayMessage(
        guessNumber > luckyNumber ? 'Too High Number...' : 'Too Low Number...'
      );

      --score;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose The Game...');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start Guessing...');
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
