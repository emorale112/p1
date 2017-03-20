console.log('Im working');

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');


var w = canvas.width;
var h = canvas.height;
// define the starting point of the snake
var snakeX = canvas.width/2;
var snakeY = canvas.height/2;

var snake;
var snakeSize = 10;
var food;
var score;

function snakeBody(x, y) {
  ctx.beginPath();
  ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
  ctx.fillStyle = "#42590C";
  ctx.fill();
  // ctx.fillStyle = 'green';
  // ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.strokeStyle = 'darkgreen';
  ctx.strokeRect(snakeX, snakeY, snakeSize, snakeSize);
  ctx.closePath();
}

function drawSnake() {
  var length = 4;
  snake = [];
  for (var i = length-1; i >= 0; i--) {
    snake.push({x:0, y:i});
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snakeBody();
  drawSnake();

}

draw();
setInterval(draw, 10);
