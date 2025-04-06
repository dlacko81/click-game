let score = 0;
const scoreElement = document.getElementById("score");
const button = document.getElementById("click-btn");

button.addEventListener("click", function() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
});
