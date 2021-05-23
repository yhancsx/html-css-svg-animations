import animationStates from "./animationStates.js";
import { currentMovement } from "./currentMovement.js";

const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;
const stagger = 5;

let gameFrame = 0;

const spriteAnimations = {};

animationStates.forEach(({ name, frames }, index) => {
  const frame = {
    loc: new Array(frames).fill(0).map((_, idx) => ({ x: idx * spriteWidth, y: index * spriteHeight })),
  };
  spriteAnimations[name] = frame;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const currentAnimation = spriteAnimations[currentMovement].loc;
  const position = Math.floor(gameFrame / stagger) % currentAnimation.length;
  const { x, y } = currentAnimation[position];

  ctx.drawImage(playerImage, x, y, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
