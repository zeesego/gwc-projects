/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 37;
let pupilHeight = 40;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(255,230,238); 

}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Shirt
  fill(173,235,235);
  arc(200,400,200,300,180,0);
  
  //Hijab
  fill(0,0,0);
  ellipse(200,220,200,290);
  
  //Face
  fill(140,112,90);
  ellipse(width/2,height/2,175,200);
  
  //Blush
  fill(255,153,194);
  ellipse(145,220,35,15);
  
  fill(255,153,194);
  ellipse(260,220,35,15);
  
  //Eyes
  if (toggle == true) {
    //One eye closed
    fill(255,255,255);
    ellipse(170,170,eyeWidth,eyeHeight);
    
    fill(0);
    ellipse(230,170,eyeWidth,eyeHeight/8);
    ellipse(230,170,pupilWidth,pupilHeight/8);
    ellipse(170,170,pupilWidth,pupilHeight);
    }
    
  else if (toggle == false) {
      //Eyes open
      fill(255,255,255);
      ellipse(170,170,eyeWidth,eyeHeight);
      ellipse(230,170,eyeWidth,eyeHeight);
      fill(0,0,0);
      ellipse(170,170,pupilWidth,pupilHeight);
      ellipse(230,170,pupilWidth,pupilHeight);
    }
  
  //Mouth
  if (toggle == true) {
  //Smile
  fill(255,255,255);
  arc(200,230,50,50,0,180);
  }
  
  else if (toggle == false) {
  fill(255,77,136);
  arc(200,230,50,50,0,180);
  }
  //Text
  textSize(30);
  fill(255,102,153);
  text("♡ Zakiyyah's Kewl Avatar! ♡",10,40);
  
//Directions for mouse press
  textSize(12);
text("Click to see me \nwink & smile. \nClick again to \nopen my eyes!",310,340)
}


/* FUNCTIONS */
function mousePressed() {
toggle = !toggle;  
}