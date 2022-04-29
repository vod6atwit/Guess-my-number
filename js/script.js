// make javaScript secure
'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const checkGuessValue = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // when there is no input
    if (!guess) {
      displayMessage('⛔️ No Number');
      changeColor('#541b21');
      //when player win
    } else if (guess === secretNumber) {
      document.querySelector('h1').textContent = '🥳 Congratulation!';
      displayMessage('🎉 Correct Number!');
      displayNumber(secretNumber);
      changeColor('#60b347');
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // when guess number is too high or low
    } else if (guess !== secretNumber) {
      changeColor('#541b21');
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    }
  } else {
    displayScore(0);
    displayMessage('💥 You lost the game!');
  }
};

// check guess value when Check Button is clicked
document.querySelector('.check').addEventListener('click', checkGuessValue);

// check guess value when Enter Key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkGuessValue();
  }
});

// back to main display
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
