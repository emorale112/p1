console.log('Im working');

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

// define the staring point of the snake
var snakeX = canvas.width/2;
var snakeY = canvas.height/2;

// var dx = -1;
// var dy = 0;

var snake;
var snakeSize = 10;
var snakeWidth = 350;
var snakeHeight = 350;
var food;

var upPressed = false;
var rightPressed = false;
var leftPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 37) {
      leftPressed = true;
    }
    else if(e.keyCode === 38) {
      upPressed = true;
    }
    else if (e.keyCode === 39) {
      rightPressed = true;
    }
    else if (e.keyCode === 40) {
      downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode === 37) {
      leftPressed = false;
    }
    else if(e.keyCode === 38) {
      upPressed = false;
    }
    else if (e.keyCode === 39) {
      rightPressed = false;
    }
    else if (e.keyCode === 40) {
      downPressed = false;
    }
}

function snakeBody(x, y) {
  ctx.fillStyle = "#42590C";
  ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
  ctx.fill();
}

function drawSnake() {
  // ctx.beginPath();
  // ctx.rect(snakeX, snakeY, 10, 10);
  // ctx.fillStyle = "#42590C";
  // ctx.fill();
  // ctx.closePath();
  snake = [];
  for (var i = 4; i > 0; i--) {
    snake.push({snakeX:i, snakeY:0});
  }
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snakeBody();
  drawSnake();

  if(leftPressed) {
    snakeX--;
  }
  else if(upPressed) {
    snakeY--;
  }
  else if (rightPressed) {
    snakeX++;
  }
  else if (downPressed) {
    snakeY++;
  }
  // snakeX += dx;
  // snakeY += dy;
}

setInterval(draw, 50);
