let userScore = 0;
let computerScore = 0;
let userName = 'Fighter';
const userNameEl = document.getElementById('user-name');
const userScoreEl = document.getElementById('user-score');
const userNumberEl = document.getElementById('user-number');
const computerScoreEl = document.getElementById('computer-score');
const computerNumberEl = document.getElementById('computer-number');
const generateBtn = document.getElementById('generate-btn');
const rockModalEl = document.getElementById('rock-victory-modal');
const rockRetryBtn = document.getElementById('retry-btn');
const playerModalEl = document.getElementById('player-victory-modal');
const playerRetryBtn = document.getElementById('player-retry-btn');
window.addEventListener('load', function() {
  let inputName = prompt("Enter your name to challenge The Rock:", "");
  if (inputName && inputName.trim() !== "") {
    userName = inputName.trim();
  }
  userNameEl.textContent = userName ;
});
generateBtn.addEventListener('click', function() {
  userNumberEl.classList.remove('hit');
  computerNumberEl.classList.remove('hit');
  setTimeout(() => {
    userNumberEl.classList.add('hit');
    computerNumberEl.classList.add('hit');
    let userNum = Math.floor(Math.random() * 100) + 1;
    let compNum = Math.floor(Math.random() * 100) + 1;
    userNumberEl.textContent = userNum;
    computerNumberEl.textContent = compNum;
    if (userNum > compNum) {
      userScore++;
      userScoreEl.textContent = userScore;
    } else if (compNum > userNum) {
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
    if (userScore === 3 || computerScore === 3) {
      setTimeout(function() {
        if (userScore === 3) {
          playerModalEl.classList.add('active');
        } else {
          rockModalEl.classList.add('active');
        }
      }, 250);
    }
  }, 50);
});
function resetGame() {
  userScore = 0; 
  computerScore = 0;
  userScoreEl.textContent = "0"; 
  computerScoreEl.textContent = "0";
  userNumberEl.textContent = "0"; 
  computerNumberEl.textContent = "0";
}
rockRetryBtn.addEventListener('click', function() {
  rockModalEl.classList.remove('active');
  resetGame();
});
playerRetryBtn.addEventListener('click', function() {
  playerModalEl.classList.remove('active');
  resetGame();
});