'use strict';

// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secret = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};
const changeColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displaySecret = function (secret) {
  document.querySelector('.number').textContent = secret;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secret) {
    displayMessage('🎉Correct Number!');
    displaySecret(secret);
    changeColor('#60b347');
    changeWidth('30rem');
    if (currentScore > highScore) {
      displayHighScore(currentScore);
      highScore = currentScore;
    } else {
      displayHighScore(highScore);
    }
  } else if (guess !== secret) {
    if (currentScore > 0) {
      displayMessage(guess > secret ? '📈 Too High!' : '📉 Too Low!');
      currentScore--;
      displayScore(currentScore);
    } else {
      displayMessage('💥 You lost the game!');
    }
  }
});
//Coding Challenge
document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displaySecret('?');
  displayScore(currentScore);
  changeColor('#222');
  changeWidth('15rem');
  document.querySelector('.guess').value = '';
});
