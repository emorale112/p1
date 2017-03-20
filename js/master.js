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
// var dir = 'right';
var food;

// var upPressed = false;
// var rightPressed = false;
// var leftPressed = false;
// var downPressed = false;
var direction;

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
//
// function keyDownHandler(e) {
//     if(e.keyCode === 37) {
//       leftPressed = true;
//     }
//     else if(e.keyCode === 38) {
//       upPressed = true;
//     }
//     else if (e.keyCode === 39) {
//       rightPressed = true;
//     }
//     else if (e.keyCode === 40) {
//       downPressed = true;
//     }
// }
//
// function keyUpHandler(e) {
//     if(e.keyCode === 37) {
//       leftPressed = false;
//     }
//     else if(e.keyCode === 38) {
//       upPressed = false;
//     }
//     else if (e.keyCode === 39) {
//       rightPressed = false;
//     }
//     else if (e.keyCode === 40) {
//       downPressed = false;
//     }
// }

function snakeBody(x, y) {
  ctx.beginPath();
  ctx.rect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.fillStyle = "#42590C";
  ctx.fill();
  ctx.closePath();
}

// var bodySnake = function(x, y) {
//         // This is the single square
//         ctx.fillStyle = 'green';
//         ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
//         // This is the border of the square
//         ctx.strokeStyle = 'darkgreen';
//         ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
//     }

function drawSnake() {
  var length = 4;
  snake = [];
  for (var i = length; i >= 0; i--) {
    snake.push({x:i, y:0});
  }
}

// function food() {
//   var foodX = Math.floor(Math.random());
//   var foodY = Math.floor(Math.random());
  // ctx.beginPath();
  // ctx.rect(foodX, foodY, snakeSize, snakeSize);
  // ctx.fillStyle = "red";
  // ctx.fill();
  // ctx.closePath();
// }

function pizza(x,y){
  ctx.beginPath();
  ctx.rect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

var createFood = function() {
          food = {
            //Generate random numbers.
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }

        //Look at the position of the snake’s body.
        for (var i=0; i>snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;

             if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }


function init() {
  direction = 'down';

  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // snakeBody();
  drawSnake();
  console.log(snake);

  createFood();
  gameloop = setInterval(paint, 80);



  // snakeX += dx;
  // snakeY += dy;
}

// setInterval(draw, 10);

init();

function paint() {

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

  // if(leftPressed) {
  //   snakeX--;
  // }
  // else if(upPressed) {
  //   snakeY--;
  // }
  // else if (rightPressed) {
  //   snakeX++;
  // }
  // else if (downPressed) {
  //   snakeY++;
  // }


  var tail = snake.pop();
  tail.x = snakeX;
  tail.y = snakeY;

  snake.unshift(tail);


  for (var i = 0; i < snake.length; i++) {
        snakeBody(snake[i].x, snake[i].y);
    }

  pizza(food.x,food.y);




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
