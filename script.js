let score = 0;
let playerName = "";

const playerNameInput = document.getElementById("player-name");
const submitNameButton = document.getElementById("submit-name-btn");
const gameSection = document.getElementById("game-section");
const scoreElement = document.getElementById("score");
const playerDisplayName = document.getElementById("player-display-name");
const resultsSection = document.getElementById("results-section");
const finalScoreElement = document.getElementById("final-score");
const clickButton = document.getElementById("click-btn");
const nameSection = document.getElementById("name-section");

submitNameButton.addEventListener("click", function() {
  // Log to check if the button click is detected
  console.log("Submit button clicked!");

  // Get player's name from input field
  playerName = playerNameInput.value.trim();

  if (playerName === "") {
    alert("Please enter your name to start the game!");
  } else {
    // Hide the name input and show the game section
    nameSection.style.display = "none";
    gameSection.style.display = "block";
    
    // Display player's name in the game section
    playerDisplayName.textContent = playerName;
  }
});

clickButton.addEventListener("click", function() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
});

// Function to end the game
function endGame() {
  // Hide the game section and show the results section
  gameSection.style.display = "none";
  resultsSection.style.display = "block";
  
  // Display the final score
  finalScoreElement.textContent = score;
}

// Example of when to end the game (after 30 seconds or a certain score)
setTimeout(endGame, 30000); // Game ends after 30 seconds
