var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 10;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 60;
var score = 0;
var lives = 3;

//
//MY ADDITIONS TO THE CODE
//
//level - which level you are on
var level = 0; 

//array to create diffent colored rows
var color = ["#0095DD","#800080","#FF0000","#FFA500","#FFFF00","#2E8B57"];

// I converted a lot into functions

//a text function so all text can be changed in the same place
function Text (ctx_on) {
   ctx_on.font = "16px Arial";
   ctx_on.fillStyle = "#0095DD";
   //Draws Score
   this.drawScore = function(ctx_on) {
   	ctx_on.fillText("Score: "+score, 8, 20);
   };
   //Draws Lives
   this.drawLives = function(ctx_on) {
   	ctx_on.fillText("Lives: "+lives, canvas.width-65, 20);
   };
}


//a Ball function so that there can be many balls
function Ball () {
      this.x = canvas.width/2;
      this.y = canvas.height-30;
      this.ballRadius = 10;
      this.dx = 2;  //hvað boltinn hreyfist í hverjum ramma
      this.dy = -2; //hvað boltinn hreyfist í hverjum ramma
      this.color = "#000000";
      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    	};
}

//a Paddle function so that there can be many balls
function Paddle () {
	this.Height = 10;
	this.Width = 75;
	this.X = (canvas.width-this.Width)/2;
       	this.draw = function() {
  		ctx.beginPath();
  		ctx.rect(this.X, canvas.height-this.Height, this.Width, this.Height);
  		ctx.fillStyle = "#000000";
  		ctx.fill();
  		ctx.closePath();
    	};
}




//create text
var text = new Text(ctx);

//create a ball
var ball = new Ball();
var balls = [];
balls.push(ball);


//create bricks
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }; //status = 1 visible
    }
}

//create a paddle
var paddle = new Paddle();


//add listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//if arrow keys pressed 
function keyDownHandler(e) {
     if(e.keyCode == 39) { 
          rightPressed = true
     }
     else if(e.keyCode == 37) { 
          leftPressed = true;
    }
}

//if arrow keys relaesed
function keyUpHandler(e) {
     if(e.keyCode == 39) {
          rightPressed = false;
     }
     else if(e.keyCode == 37) {
          leftPressed = false;
     }
}
//mouse or mouse padd event
function mouseMoveHandler(e) {
   var relativeX = e.clientX - canvas.offsetLeft;
      if(relativeX > 0 && relativeX < canvas.width) {
          paddle.X = relativeX - paddle.Width/2;
      }
}


//detect if ball has hit a brick
function collisionDetection(ball_item) {
  for(c=0; c<brickColumnCount; c++) {
    for(r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
        if(b.status == 1) {    
          if(ball_item.x > b.x && ball_item.x < b.x+brickWidth && ball_item.y > b.y && ball_item.y < b.y+brickHeight) {
             ball_item.dy = -ball_item.dy;
             b.status = 0;
             score++;
             if(score == brickRowCount*brickColumnCount) {
                alert("YOU WIN, CONGRATS!");
                document.location.reload();
             }
          }
      }
    }
  }
}

    


    function drawBricks() {
	for(c=0; c<brickColumnCount; c++) {
            for(r=0; r<brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = color[c]; //"#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }


//start level
level2();
var ball1 = new Ball();
ball1.x = 520;
ball1.y = 160;
//ball1.draw();
balls.push(ball1);

//draws level2
function level2() {
  for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
      if(c == 4 & r ==5){	
        bricks[c][r] = { x: 0, y: 0, status: 0 }; //make space for ball
      }
      else
        {bricks[c][r] = { x: 0, y: 0, status: 1 };
     }
   }

}


    }
        
   

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();

  for (let item of balls){
        item.draw();
        
        collisionDetection(item);

        if(item.x + item.dx > canvas.width-item.ballRadius || item.x + item.dx < item.ballRadius) {
            item.dx = -item.dx;
        }

        if(item.y + item.dy < item.ballRadius) {
            item.dy = -item.dy;
        }
        else if(item.y + item.dy > canvas.height-item.ballRadius) {
            if(item.x > paddle.X && item.x < paddle.X + paddle.Width) {
                item.dy = -item.dy;
            }
            else {
                lives--;
                if(!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                }
                else {
                    item.x = canvas.width/2;
                    item.y = canvas.height-30;
                    item.dx = 3;
                    item.dy = -3;
                    paddle.X = (canvas.width-paddle.Width)/2;
                }
            }
        }

    	item.x += item.dx;
        item.y += item.dy;	
  }


  paddle.draw();

  if(rightPressed && paddle.X < canvas.width-paddle.Width) {
    paddle.X += 7;
  }
  else if(leftPressed && paddle.X > 0) {
    paddle.X -= 7;
  }
    
  text.drawScore(ctx);
  text.drawLives(ctx);

  requestAnimationFrame(draw);
}

draw();


