let score = 0;
let playerName = "";

const playerNameInput = document.getElementById("player-name");
const submitNameButton = document.getElementById("submit-name-btn");
const gameSection = document.getElementById("game-section");
const scoreElement = document.getElementById("score");
const playerDisplayName = document.getElementById("player-display-name");
const resultsSection = document.getElementById("results-section");
const finalScoreElement = document.getElementById("final-score");
const highScoreElement = document.getElementById("high-score");
const clickButton = document.getElementById("click-btn");
const nameSection = document.getElementById("name-section");

submitNameButton.addEventListener("click", function() {
  playerName = playerNameInput.value.trim();

  if (playerName === "") {
    alert("Please enter your name to start the game!");
  } else {
    nameSection.style.display = "none";
    gameSection.style.display = "block";
    playerDisplayName.textContent = playerName;
  }
});

clickButton.addEventListener("click", function() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
});

function endGame() {
  gameSection.style.display = "none";
  resultsSection.style.display = "block";
  finalScoreElement.textContent = score;

  // Check current high score from localStorage
  const savedHighScore = localStorage.getItem("highScore") || 0;
  const savedHighScorer = localStorage.getItem("highScorer") || "No one yet";

  // If current score is higher, update localStorage
  if (score > savedHighScore) {
    localStorage.setItem("highScore", score);
    localStorage.setItem("highScorer", playerName);
    highScoreElement.textContent = `New High Score: ${playerName} Score: ${score}`;
  } else {
    highScoreElement.textContent = `High Score: ${savedHighScorer} - ${savedHighScore}`;
  }
}

setTimeout(endGame, 30000); // Ends in 30 seconds
