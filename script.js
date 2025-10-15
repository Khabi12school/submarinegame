const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

let square = { x: 50, y: 50, size: 30 };
let score = 0;

// Move the square to a new random spot
function moveSquare() {
  square.x = Math.random() * (canvas.width - square.size);
  square.y = Math.random() * (canvas.height - square.size);
}

// Detect clicks
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (
    x >= square.x &&
    x <= square.x + square.size &&
    y >= square.y &&
    y <= square.y + square.size
  ) {
    score++;
    scoreDisplay.textContent = score;
    moveSquare();
  }
});

// Draw the game each frame
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "cyan";
  ctx.fillRect(square.x, square.y, square.size, square.size);
  requestAnimationFrame(draw);
}

moveSquare();
draw();