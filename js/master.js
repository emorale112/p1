console.log('Im working');

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;
// define the starting point of the snake
// var snakeX = canvas.width/2;
// var snakeY = canvas.height/2;

var snake;
var snakeSize = 10;
// var dir = 'right';
var food;
var score = 0;

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
  for (var i = length-1; i >= 0; i--) {
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

  ctx.fillStyle = 'lightgrey';
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
        //Stop the game.

        //Make the start button enabled again.
        //Clean up the canvas.
        ctx.clearRect(0, 0, w, h);
        gameloop = clearInterval(gameloop);
        var restart = window.confirm('your score was ' + score + '. Play again??')
        if (restart){
          init();
        } else{
          window.close();
        }
        return;
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
  if (snakeX == food.x && snakeY == food.y) {
        //Create a new square instead of moving the tail.
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
