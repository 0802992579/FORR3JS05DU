var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var bricks = [];   
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
//level - which level you are on and how many bricks to next level
var level = 1; 
var bricks_to_next_level = brickRowCount * brickColumnCount

//array to create diffent colored rows
var color = ["#0095DD","#800080","#FF0000","#FFA500","#FFFF00","#2E8B57"];

// I converted a lot into functions/Objects
// the original tutorial had no Objects


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
  this.x = canvas.width/2;     	//byrjunar x
  this.y = canvas.height-30;	//byrjunar y
  this.ballRadius = 10;		//stærð boltans
  this.status = 1; 		//status 1 visible, status 0 invisible and not in the game
  this.dx = 2;  //hvað boltinn hreyfist í hverjum ramma
  this.dy = -2; //hvað boltinn hreyfist í hverjum ramma
  this.color = "#000000";
  this.restart = function() { //setja boltann inn aftur
    if (this.status==1){
  	this.x = canvas.width/2;     	//byrjunar x
  	this.y = canvas.height-30;	//byrjunar y
  	this.ballRadius = 10;		//stærð boltans
    }
  };
  this.draw = function() { //teikna boltann
    if (this.status==1){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();
    }
  };
}

//a Paddle function so that there can be many balls
function Paddle () {
  this.Height = 10;   //hæð paddle
  this.Width = 75;    //vídd paddle
  this.X = (canvas.width-this.Width)/2;  //start staðsetning paddle
  this.draw = function() { //teikna paddle
    ctx.beginPath();
    ctx.rect(this.X, canvas.height-this.Height, this.Width, this.Height);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    };
}



//a Screen function that handles bricks and different levels
function Screen (level) {
  this.init = function(level) { //init level
    //level1 init
    if (level == 1){
	for(c=0; c<brickColumnCount; c++) {
  	  bricks[c] = [];
  	  for(r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 }; //status = 1 visible
  	  }
	}
	bricks_to_next_level = brickRowCount * brickColumnCount //how many bricks to next level
    }
    //level 2 init
    if (level == 2){
        for(c=0; c<brickColumnCount; c++) {
    	  bricks[c] = [];
          for(r=0; r<brickRowCount; r++) {
            if(c == 4 & r ==5){	
              bricks[c][r] = { x: 0, y: 0, status: 0 }; //make space for ball
            }
            else{
              bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
          }
        }
        extra_ball.x = 520;
	extra_ball.y = 160;
	extra_ball.status = 1;
	bricks_to_next_level = (brickRowCount * brickColumnCount) - 1 //how many bricks to next level
    }
    //level 3 init
    if (level == 3){
        for(c=0; c<brickColumnCount; c++) {
    	  bricks[c] = [];
          for(r=0; r<brickRowCount; r++) {
            if(c == 4 & r ==5){	
              bricks[c][r] = { x: 0, y: 0, status: 0 }; //make space for ball
            }
            else{
              bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
          }
        }
        extra_ball.x = 520;
	extra_ball.y = 160;
	extra_ball.dx = 4; //faster than normal
	extra_ball.dy = 4;
        ball.dx = 4;
	ball.dy = 4;
	extra_ball.status = 1;
	bricks_to_next_level = (brickRowCount * brickColumnCount) - 1 //how many bricks to next level
    }
  };
   
  this.drawBricks = function() { //teikna bricks
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
  };
}



//create text
var text = new Text(ctx);

//create a ball
var ball = new Ball();
var balls = [];
balls.push(ball);
//extra ball sometimes used
var extra_ball = new Ball();
extra_ball.status = 0; //inivisible and inactive
balls.push(extra_ball);

//create bricks
var screen = new Screen(level);
screen.init(level);

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
             ball_item.dy = -ball_item.dy;  //skipta um stefnu
             b.status = 0;		    //remove brick in drawing	
             score++;			    //add score
             if(score == bricks_to_next_level) {
                level++;
                if (level == 4){ //only 3 levels a the moment
                	alert("YOU WIN, CONGRATS!");
                	document.location.reload();
		}
		else {
			ball.restart();			
			screen.init(level);
		}
             }
          }
      }
    }
  }
}

//       
//Main game function
//
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  //clear screen
  screen.drawBricks();				     //draw bricks

  for (let item of balls){			    //for each ball
    if (item.status==1){ 	  //athuga bara ef ball er sýnilegur í leik
        item.draw();	 	  //draw ball
        
        collisionDetection(item); //check if ball hit a brick

	//if ball hits the left or right end of the screen reverse its direction
        if(item.x + item.dx > canvas.width-item.ballRadius || item.x + item.dx < item.ballRadius) {
            item.dx = -item.dx;
        }
	//if ball hits the top of the screen reverse its direction
        if(item.y + item.dy < item.ballRadius) {
            item.dy = -item.dy;
        }
        else if(item.y + item.dy > canvas.height-item.ballRadius) {        //if almost out of the screen
            if(item.x > paddle.X && item.x < paddle.X + paddle.Width) {    //if hit by the paddle
                item.dy = -item.dy;					   //reverse directio
            }
            else {							  //else
                lives--;						  //lose live
                if(!lives) {						  //if no live left end
                    alert("GAME OVER");
                    document.location.reload();
                }
                else {							 //if live left
		    ball.restart();					 //restart ball and paddle	
		    if (item.dx<4){	
                      item.dx++;					 //increase speed slightly from 2 to 3
                      item.dy++;
		    }
                    paddle.X = (canvas.width-paddle.Width)/2;
                }
            }
        }
	//move ball
    	item.x += item.dx; 
        item.y += item.dy;
    }	
  }

  //draw paddle
  paddle.draw();
  //if not out of right screen move right
  if(rightPressed && paddle.X < canvas.width-paddle.Width) {
    paddle.X += 7;
  }
  //if not out of left screen move left
  else if(leftPressed && paddle.X > 0) {
    paddle.X -= 7;
  }
  
  //draw Score  
  text.drawScore(ctx);
  text.drawLives(ctx);

  requestAnimationFrame(draw);
}

draw();



