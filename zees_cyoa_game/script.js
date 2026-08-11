// Press a button to choose your path
// See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let tealColor = "#c8f1eaff";

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  
  fill("#57ac9dff");
  textAlign(CENTER);
  textSize(18);
  noStroke();

  // Set up the home screen
  background(tealColor);
  text("An H2O Adventure", width / 2, height / 2-150);
  text("It’s the first day of summer and you and your \nfriends, Nikki and Gemma, decide to celebrate \nthe warm weather by taking a ride in Nikki’s \ndad's new motor boat!",width/2,height/2-70)

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2+100);
  a1Button = new Sprite (-200,-200);
  a2Button = new Sprite(-50,-50);
  b1Button = new Sprite(-100,-100);
  b2Button = new Sprite(-150,-150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "#f78ab9";
  enterButton.text = "Set Sail!";

  // Check enter button
  if (enterButton.mouse.presses()){
    print("pressed");
    showScreen1();
  screen = 1;
  }
  if (screen==0){
    showShapes();
  }
  if (screen == 1){
    if (a1Button.mouse.presses()){
      print("Display screen 2");
      showScreen2();
      screen =2;
    } else if (a2Button.mouse.presses()){
      print("Display screen 5");
      showScreen5();
      screen=5;
    }
    
  } else if(screen==2){
    if (b1Button.mouse.presses()){
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
  } 
    print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
     background("#ffe3f1ff");
    text("Its been a fun couple hours riding the waves with \nyour friends. You cant help but notice, however, an unusual \nisland in the near distance. The three of you decide to \nsteer its way and check it out.",width/2,height/2-150);
    enterButton.pos={x:-100,y:-100};
  text("Upon your arrival, you realize this island is not inhabited. \nAwesome! An island all to yourself! There is so much to explore, \nyou can't decide where to go first! The soft white sand \nof the islands shore intrigues you, but so does a cave \ntucked away past the palm trees.", width/2, height/2 -45)

      // Add A1 button
    a1Button.pos={x:width/2-100,y:height/2+100};
    a1Button.w=150;
    a1Button.h=50;
    a1Button.collider="k";
    a1Button.color="#fce688ff";
    a1Button.text="go to the cave";

      // Add A2 button
    a2Button.pos={x:width/2+100,y:height/2+100}
    a2Button.w=150;
    a2Button.h=50;
    a2Button.collider="k";
    a2Button.color="#f6b26bff";
    a2Button.text="stay on the shore"; 
}
function showScreen2(){
    background("#fff2ccff");
      text("After scavenging through brush and hiking up hills, \nyou make it to the entrance of the cave. Upon entering, \nyou are met with a luminescent pool of water, but there also seems \nto be an enticing path that leads deeper into the cave.",width/2,height/2-150);

  text("Nikki wants to take a dip in the pool to relax after \nall that hiking, while Gemma wants to explore deeper in the \ncave, hoping to find treasure! They go back and forth before \nasking who you agree with.",width/2,height/2-40);
  
      a1Button.pos={x:-200,y:-200};
      a2Button.pos={x:-50,y:-50};
      //b1Button
        b1Button.pos={x:width/2-100,y:height/2+100};
        b1Button.w = 150;
        b1Button.h = 50;
        b1Button.collider = "k";
        b1Button.color = "#d9d2e9ff";
        b1Button.text = "Gemma";
      //b2Button
        b2Button.pos={x:width/2+100,y:height/2+100};
        b2Button.w = 150;
        b2Button.h = 50;
        b2Button.collider = "k";
        b2Button.color = "#a9eddfff";
        b2Button.text = "Nikki";
}

function showScreen3(){
  background("#d9d2e9ff");
    text("Picking Gemma's choice, you all advance further \ninto the cave. Despite being devoid of sunlight, \nthe cave remains softly lit by a mysterious glow.",width/2,height/2-130);

    text("Lost in admiration by the crystals and engravings on \nthe cave’s walls, you trip over what seems to be a tree branch. \nBut wait, how would a tree branch get in here? Upon further \ninspection, you realize it looks just like a human bone. Gemma \nand Nikki point in shock towards where the bone came from.",width/2,height/2-40);

    text("You look over to see a heaping pile of human skeletons! \nThe three of you immediately scream and run out of the \ncave, off the island, and vow never to return again.",width/2,height/2+100);
  
  b1Button.pos={x:-100,y:-100};
  b2Button.pos={x:-150,y:-150};
}

function showScreen4(){
  background(tealColor);
  text("You pick Nikkis idea, and the two of you playfully push \nGemma into the sparkling water before jumping in right after. \nYou come up for air and try to move your legs, but instead \nit feels like one big mass.",width/2,height/2-130);

    text("Nikki and Gemma have also come up by now, and beneath \nthe clear water you are shocked to see their legs \nhave turned into tails! You look down at yourself \nand realize you have one two.",width/2,height/2-10);

    text("“Did we just turn into… mermaids?” Gemma exclaims. \nThis feels like the beginning of a rather interesting summer…",width/2,height/2+110);
  
    b1Button.pos={x:-100,y:-100};
  b2Button.pos={x:-150,y:-150};
}

  function showScreen5(){
      background("#fce5cdff");
      text("You and your friends remain along the shore of the \nisland. You spend the afternoon collecting seashells, \nbuilding sandcastles, and splashing in the oceans water.",width/2,height/2-120);

    text("Evening approaches before you know it, and the three \nof you rush back on the motorboat to make it home in time \nfor dinner. As the motor boat takes off into the darkening \nsea, you look back at your secret island to reminisce the \nwonderful day you had.",width/2,height/2-20);

    text("There is something so mysterious about that place, \ntoo bad its time to go home.",width/2,height/2+120);
    
      a1Button.pos={x:-200,y:-200};
      a2Button.pos={x:-50,y:-50};
    }
function showShapes(){
  triangle(380,220,300,220,300,260);
  triangle(220,220,300,220,300,260);
}

