'use strict';
//# is used for queryselector but getelementbyid can do the same thing without a hash
const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');
const score0E = document.querySelector('#score--0');
const score1E = document.getElementById('score--1');
const diceE = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let finalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayers = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Toggle method adds class tag if it's there or remove it if it's not there
  player0E.classList.toggle('player--active');
  player1E.classList.toggle('player--active');
};

const resetScores = function (finalScores, currentScore) {
  for (let i = 0; i <= 1; i++) {
    document.getElementById(`score--${i}`).textContent = finalScores[i];
    document.getElementById(`current--${i}`).textContent = currentScore;
  }
};

score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceE.classList.remove('hidden');
    diceE.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    finalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];
    if (finalScores[activePlayer] >= 100) {
      playing = false;
      diceE.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayers();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  finalScores = [0, 0];
  currentScore = 0;
  resetScores(finalScores, currentScore);
  player0E.classList.add('player--active');
  diceE.classList.add('hidden');
});
