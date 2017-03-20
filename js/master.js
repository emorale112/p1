console.log('Im working');

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

// define the staring point of the snake
var x = canvas.width/2;
var y = canvas.height/2;

var dx = -1;
var dy = 0;

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
    else if(e.keyCode == 38) {
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
      leftPressed = true;
    }
    else if(e.keyCode == 38) {
      upPressed = true;
    }
    else if (e.keyCode === 39) {
      rightPressed = true;
    }
    else if (e.keyCode === 40) {
      downPressed = true;
    }
}


function drawSnake() {
  ctx.beginPath();
  ctx.rect(x, y, 10, 10);
  ctx.fillStyle = "#42590C";
  ctx.fill();
  ctx.closePath();
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  x += dx;
  y += dy;
}

setInterval(draw, 10);
