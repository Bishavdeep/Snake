let blockSize = 30;
let rows = 20;
let columns = 20;
let snakeCanvas;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;
let speedY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function() {
    snakeCanvas = document.getElementById("snakeCanvas");
    snakeCanvas.height = rows * blockSize;
    snakeCanvas.width = columns * blockSize;
    context = snakeCanvas.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 10);
}

function update() {
    if(gameOver) {
        return;
    }
}