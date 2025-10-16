const player = document.getElementById("player");

let position = { x: 375, y: 0 };
let velocity = { x: 0, y: 0 };
const gravity = 0.6;  // strength of gravity
const jumpForce = -12;
const speed = 5;
const floorY = 550; // ground level (600px height - 50px player)
let keys = { w: false, a: false, s: false, d: false };

// Handle key input
document.addEventListener("keydown", (e) => {
  if (e.key === "w" && position.y >= floorY) velocity.y = jumpForce; // jump
  if (e.key === "a") keys.a = true;
  if (e.key === "d") keys.d = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "a") keys.a = false;
  if (e.key === "d") keys.d = false;
});

function gameLoop() {
  // Horizontal movement
  if (keys.a) position.x -= speed;
  if (keys.d) position.x += speed;

  // Apply gravity
  velocity.y += gravity;
  position.y += velocity.y;

  // Floor collision
  if (position.y >= floorY) {
    position.y = floorY;
    velocity.y = 0;
  }

  // Keep player in bounds
  position.x = Math.max(0, Math.min(750, position.x));

  // Update position
  player.style.left = position.x + "px";
  player.style.top = position.y + "px";

  requestAnimationFrame(gameLoop);
}

gameLoop();