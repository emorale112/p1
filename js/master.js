console.log('Im working');

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;

var snake;
var snakeSize = 10;

var food;
var score = 0;

var direction;


function snakeBody(x, y) {
  ctx.beginPath();
  ctx.rect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.fillStyle = "#42590C";
  ctx.fill();
  ctx.closePath();
}


function drawSnake() {
  var length = 4;
  snake = [];
  for (var i = length-1; i >= 0; i--) {
    snake.push({x:i, y:0});
  }
}


function crumb(x,y){
  ctx.beginPath();
  ctx.rect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.fillStyle = "#42590C";
  ctx.fill();
  ctx.closePath();
}

function scoreText() {
  var score_text = "Score: " + score;
  // ctx.fillStyle = 'blue';
  ctx.font = '30 px Press Start 2P';
  ctx.fillText(score_text, 2, 15);
}

var createFood = function() {
  food = {
    x: Math.floor((Math.random() * 30) + 1),
    y: Math.floor((Math.random() * 30) + 1)
}

  for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

       if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 30) + 1);
          food.y = Math.floor((Math.random() * 30) + 1);
        }
    }
}


function checkCollision(x, y, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
    }
    return false;
}


function init() {
  score = 0;
  direction = 'down';

  drawSnake();
  console.log(snake);

  createFood();
  gameloop = setInterval(paint, 100);
}


init();

function paint() {

  ctx.fillStyle = '#95c205';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, w, h);

  var snakeX = snake[0].x;
  var snakeY = snake[0].y;

  if (direction == 'right') {
        snakeX++;
    } else if (direction == 'left') {
        snakeX--;
    } else if (direction == 'up') {
        snakeY--;
    } else if (direction == 'down') {
        snakeY++;
    }


    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || checkCollision(snakeX, snakeY, snake)) {

        ctx.clearRect(0, 0, w, h);
        gameloop = clearInterval(gameloop);
        // var restart = window.confirm('your score was ' + score + '. Play again??')
        // if (restart){
        //   init();
        // } else{
        //   window.close();
        // }
        return;
    }

  if (snakeX == food.x && snakeY == food.y) {
        var tail = {
            x: snakeX,
            y: snakeY
        };
        score++;

        //Create new food.
        createFood();
    } else {
        var tail = snake.pop();
        console.log(tail);
        tail.x = snakeX;
        tail.y = snakeY;
    }

    snake.unshift(tail);


  for (var i = 0; i < snake.length; i++) {
        snakeBody(snake[i].x, snake[i].y);
    }

  crumb(food.x,food.y);
  scoreText();

}

document.onkeydown = function (event) {

      keyCode = window.event.keyCode;
      keyCode = event.keyCode;

      switch (keyCode) {

      case 37:
          if (direction != 'right') {
              direction = 'left';
          }
          console.log('left');
          break;

      case 39:
          if (direction != 'left') {
              direction = 'right';
              console.log('right');
          }
          break;

      case 38:
          if (direction != 'down') {
              direction = 'up';
              console.log('up');
          }
          break;

      case 40:
          if (direction != 'up') {
              direction = 'down';
              console.log('down');
          }
          break;
      }
    };
