//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject;
let score = 0;
let backgroungImg, catcherImg, fallingObjectImg;

/* PRELOAD LOADS FILES */
function preload(){
  backgroungImg = loadImage("assets/orchard.png");
  catcherImg = loadImage("assets/basket.png");
  fallingObjectImg = loadImage("assets/apple.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  
  //resize images
  backgroungImg.resize(600,0);
  catcherImg.resize(200,0);
  fallingObjectImg.resize(60,0);
  
  //Create catcher 
  catcher = new Sprite(catcherImg, 200,350,100,20, "k");
  catcher.color = color(95,158,160);
  
  
  //Create falling object
  fallingObject = new Sprite(fallingObjectImg,100,0);
  fallingObject.color = color(0,128,128);
  fallingObject.vel.y = 2;
  fallingObject.rotationLock = true;

}

/* DRAW LOOP REPEATS */
function draw() {
    background(224,224,224);
  //draw background image
    image(backgroungImg, 0, 0);
  

  // Draw directions to screen
  fill("pink");
  stroke(0);
  strokeWeight(2);
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", width-100, 20);

  //If fallingObject reaches bottom, move back to random position at top
  if (fallingObject.y >=height) {
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    score = score - 1;
  }

  //If fallingObject collides with catcher, move back to random position at top
  if (fallingObject.collides(catcher)) {
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    fallingObject.direction = "down";
    score = score + 1;
  }  

  //Move catcher
  if (kb.pressing("left")){
    catcher.vel.x = -3;
  }
    else if (kb.pressing("right")){
    catcher.vel.x = 3;
    }
      else
      catcher.vel.x = 0;
  //Stop catcher at edges of screen
  if (catcher.x < 50){
      catcher.x=50;
  }
  else if (catcher.x > 350){
    catcher.x=350;
  }
//shows the score
  textSize(25);
  text("score = " + score,10,30);

  if (score<0){
    catcher.x = 1000;
    fallingObject.x = 1000;
    text("you lost!",150,height/2);
  }
  
  if (score>9){
    catcher.x=1000;
    fallingObject.x = 1000;
    text("you win, great job!",100,height/2);
    textSize(15);
    text("click your mouse anywhere to play again!",70,230)
    if(mouseIsPressed){
      score = 0;
      catcher.x = 200;
      catcher.y = 380;
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = random(1,5);
      fallingObject.direction = "down";
    }    
  }  
  //allSprites.debug = mouse.pressing();
  }
  
  
  
