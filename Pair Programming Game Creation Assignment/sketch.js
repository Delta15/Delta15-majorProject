//-------------------------------------
// [MINI]
// McRaven Tuazon and William Ahiahonu
// Computer Science 30
// Pair Programming Assignment
// May 3rd, 2018
//-------------------------------------

// General global variables.
let nameIntro, classIntro;
let mainMusic;
let gameOn, Gmusic, startT, breathingSpace;
let programState;
let introSound, introSET, introGO, introSTART;
let game1Timer, game2Timer, overallTimer;
let textDisplay = " ";
let fadeAnimation;

// Game one global variables.
let rects = [];
let numRects = 50;
let cir;

// #################################################################################################
// Stickman game global variables - William.
let stickman, collisionDetector;
let stickmanGameImage, stickmanStandState, stickmanJumpState, stickmanRunState1, stickmanRunState2,
  stickmanRunState3, stickmanRunState4;
let obstacleX, obstacleSpeed, obstacleState, obstacleStateArray = [1, 2, 3, 4], lavaImage;
let gameState, score, highScore;
// #################################################################################################

function preload() {
  mainMusic = loadSound("music/Ryo.mp3");
  introSound = loadSound("music/countDown.mp3");
  Gmusic = loadSound("music/powerCore.mp3");

  // ###############################################################################################
  // Stickman game assets - William.
  stickmanGameImage = loadImage("assets/backgroundimage.png");
  stickmanStandState = loadImage("assets/stickman_stand.png");
  stickmanJumpState = loadImage("assets/stickman_jump.png");
  stickmanRunState1 = loadImage("assets/stickman_run1.png");
  stickmanRunState2 = loadImage("assets/stickman_run2.png");
  stickmanRunState3 = loadImage("assets/stickman_run3.png");
  stickmanRunState4 = loadImage("assets/stickman_run4.png");
  lavaImage = loadImage("assets/lavaimage.png");
  // ###############################################################################################
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  programState = 1;
  nameIntro = new Timer(3900);
  fadeAnimation = createGraphics(windowWidth, windowHeight);
  game1Timer = 30;
  game2Timer = 30;
  overallTimer = 123;

  // ###############################################################################################
  // Game 1 setup.
  for (let i = 0; i < numRects; i++) {
    let r = new rectObj(random(width), random(height), random(10, 80), random(10, 50));// generate a rectObj
    rects.push(r); //add it to the array.
  }
  cir = new circleObj(20); // create a new circle object
  window.console.log(rects);

  // ###############################################################################################
  // Stickman game setup tools - William.
  // Stickman display and behaviour class - William.
  stickman = new StickmanCharacter(150);
  // Collision Detection class, which includes the appearance and behaviour of the obstacles.
  //- William.
  collisionDetector = new CollisionDetection(150);
  // Obstacle movement and appearance changes - William.
  obstacleX = windowWidth/2;
  obstacleSpeed = 15;
  obstacleState = 1;
  // Controls for gameover screen and actual game - William.
  gameState = 1;
  // game and highscore control - William.
  score = 0;
  highScore = 0;
  // #################################################################################################

  // Checking for a local storage value from the last time played, else
  // the value is set beginning with the first game played - William.
  if (!localStorage.getItem("highscore")) {
    // Set the highscore.
    setHighScore();
  }
  else {
    // Retrieve the highscore if it already exists - William.
    getHighScore();
  }
}
function draw() {
  if (programState === 1) {
    // Programmer names displayed.
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("McRavenTuazon", width / 2 - 200, height / 2 - 50);
    push();
    rectMode(CENTER);
    rect(width / 2, height / 2 + 50, windowWidth, 100);
    pop();
    fill(0);
    text("WilliamAhiahonu", width / 2 + 200, height / 2 + 50);
    if (nameIntro.isDone()) {
      programState = 2;
      classIntro = new Timer(3900);
    }
  }
  else if (programState === 2) {
    // Class is displayed.
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("CS30", width / 2, height / 2);
    if (classIntro.isDone()) {
      programState = 3;
    }
  }
  // Main menu displayed.
  else if (programState === 3) {
    mainMenu();
  }
  // Instructions displayed.
  else if (programState === 4) {
    instract();
  }
  else if (programState === 5) {
    // Beginning of countdown.
    introBG();
    textDisplay = "3";
    if (introSET.isDone()) {
      textDisplay = "2";
      introGO = new Timer(1000);
      introSTART = new Timer(1300);
      programState = 6;
    }
  }
  else if (programState === 6) {
    // Last part of countdown.
    introBG();
    if (introGO.isDone()) {
      textDisplay = "1";
    }
    // Game begins once this timer is done.
    if (introSTART.isDone()) {
      programState = 7;
      gameOn = new Timer(1000);
      // Timer to allow the player to prepare for game one.
      breathingSpace = new Timer(2000);
      Gmusic.play();
    }
  }
  // If program state is 7, game 1 is set up.
  else if (gameOn.isDone() && programState === 7) {
    background(0);
    cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.
    // Give player time to prepare for game one.
    if (breathingSpace.isDone()) {
      game1();
      noCursor();
    }
    // Tracking the score, time of game one, and overall time left - William.
    scoreTracker();
    overallGameTimer();
    gameOneTimer();
  }
  // If state is 8, game 2 is set up.
  else if (programState === 8) {
    noStroke();
    if (gameState === 1) {
    // Stickman game function, containing all of the components of it - William.
      stickManGame();
      // Tracking the score, time of game two, and overall time left. - William.
      scoreTracker();
      gameTwoTimer();
      overallGameTimer();
    }
    else if (gameState === 2) {
      programState = 7;
      // Once again, timer to allow the player to prepare for game one.
      breathingSpace = new Timer(1000);
      // Obstacles are pushed to the end of the screen opposite of the stickman
      // before the game is rerun - William.
      obstacleX = windowWidth;
      // Game state switched back to 1 - William.
      gameState = 1;
    }
  }
  // If state is 9, game over - William.
  else if (programState === 9) {
    gameOverConditionals();
  }
}

// Function to set local storage value to highscore in the game - William.
function setHighScore() {
  localStorage.setItem("highscore", score);
}
// Function to get local storage value if possible - William.
function getHighScore() {
  highScore = localStorage.getItem("highscore");
}
function scoreTracker() {
  // Display for score and highscore within the game - William.
  push();
  // Based on the game, the colour of the display changes.
  if (programState === 7) {
    fill(0);
  }
  else if (programState === 8) {
    fill(255);
  }
  // Making score dsplay nicer.
  rect(0, 0, windowWidth, 120);
  textSize(30);
  if (programState === 7) {
    fill(255);
  }
  else if (programState === 8) {
    fill(0);
  }
  push();
  textFont("impact");
  textAlign(CENTER);
  text("Score: " + score + " points", windowWidth/2+480, 30);
  text("High Score: " + highScore + " points", windowWidth/2+480, 80);
  pop();
  push();
  textSize(90);
  // MINI logo in the middle.
  text("MINI", windowWidth/2, 60);
  pop();
}
//McRaven/William
function mainMenu() {
  background(255);
  push();
  // Main menu fades in.
  fadeAnimation.noStroke();
  fadeAnimation.rectMode(CENTER, CENTER);
  fadeAnimation.fill(0, 8);
  fadeAnimation.rect(width / 2, height / 2, windowWidth, windowHeight / 1.1);
  image(fadeAnimation, 0, 0, windowWidth, windowHeight / 1.1);
  // Main menu text.
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(200);
  text("MINI", width / 2, height / 2 + 110);
  text("[MINI]", width / 2, height / 2);
  text("MINI", width / 2, height / 2 - 110);
  pop();
  push();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  textFont("impact");
  text("Press any key to continue", width / 2, height / 2 + 200);
  pop();
  // Music is stopped and changed.
  if (keyIsPressed) {
    programState = 4;
    mainMusic.stop();
  }
}
//McRaven
//Display instract
function instract(){
  background(255);
  textAlign(CENTER,CENTER);
  fill(0);
  rect(0, 0, windowWidth, windowHeight/2 - 250);
  fill(255);
  textSize(50);
  text("GAME I", width/2, height/2 - 300);
  fill(0);
  text("Use mouse to control white circle", width/2, height/2 - 200);
  text("Avoid red rectangles", width/2, height/2 - 100);
  rect(0, windowHeight/2-50, windowWidth, 100);
  fill(255);
  text("GAME II", width/2, height/2);
  fill(0);
  text("Up Arrow (small jump), X (big jump), Right Arrow (Run)", width/2, height/2 + 100);
  text("Avoid incoming obstacles", width/2, height/2 + 200);
  rect(0, windowHeight/2 + 250, windowWidth, 105);
  fill(255);
  text("CLICK TO CONTINUE", width/2, height/2 + 300);
  if (mouseIsPressed) {
    programState = 5;
    introSET = new Timer(1000);
    introSound.play();
  }
}
//McRaven
//display a white background for the intro
function introBG() {
  background(255);
  noStroke();
  push();
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 500, windowHeight);
  fill(255);
  rect(width / 2, height / 2, 480, windowHeight);
  pop();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(textDisplay, width / 2, height / 2);
}
// ###################################################################################################
//McRaven
//display game 1
function game1() {
  background(0);
  for (let i = 0; i < numRects; i++) {
    rects[i].disp();
    rects[i].collide(cir); //collide against the circle object
  }
  cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.
  // Display score and highscore - William.
  scoreTracker();
}

//McRaven
function rectObj(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color(255, 0, 0);
  this.hit = false;

  this.collide = function(obj) {

    this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

    if (this.hit) {
      programState = 8;
      game1Timer = 30;
    }
  };

  this.disp = function() {
    noStroke();
    fill(this.color);
    this.y += 5; //move down!;
    if (this.y > height) { //loop downwards!
      this.y = -this.h;
    }
    rect(this.x, this.y, this.w, this.h);

  };
}
//McRaven
function circleObj(dia) {
  this.dia = dia;
  this.color = color(255);
  this.x;
  this.y;

  this.disp = function(x, y) {
    this.x = x;
    this.y = y;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.dia, this.dia);
  };
}
// Game one timer.
function gameOneTimer() {
  push();
  textSize(30);
  fill(255);
  push();
  textFont("impact");
  textAlign(CENTER);
  text("Time left in Game One: " + game1Timer + " s", windowWidth/2-450, 80);
  pop();
  // Game one timer decreases by seconds when appropriate.
  if (programState === 7) {
    if (frameCount % 60 === 0) {
      game1Timer --;
      score ++;
      // Highscore set to score if the score is bigger.
      if (score > highScore) {
        setHighScore();
        highScore = score;
      }
    }
    // Game timer is reset once a certain game is done.
    if (game1Timer === 0) {
      programState = 8;
      game1Timer = 30;
    }
  }
}
// ###################################################################################################
function stickManGame() {
  // Background Image - William.
  push();
  imageMode(CORNER);
  image(stickmanGameImage, 0, 0, windowWidth, windowHeight+150);
  pop();
  // Collision Detector (Hitbox) also containing the obstacles - William.
  // Set to follow the stickman's movements. Hitbox is hidden. - William.
  collisionDetector.newPositionAndSurfaceDetection();
  collisionDetector.jump(-7.8);
  // Reveal the obstacles at the approriate times - William.
  collisionDetector.obstacles();
  // Surface of the game - William.
  push();
  fill(0);
  rect(0, 696, windowWidth, windowHeight);
  pop();
  // Stickman Character appearance, movement and behaviour - William.
  stickman.updateDisplay();
  stickman.newPositionAndSurfaceDetection();
  stickman.jump(-7.8);
  // Disabling spacebar functionality so the window does not scroll up or down
  // when the spacebar is pressed - William.
  window.onkeydown = function killSpaceBar() {
    return !(keyCode === 32);
  };
  // Function to disable the ability to scroll - William.
  function disableScrolling() {
    window.scrollTo(0, 0);
  }
  // Adding listener to disable scrolling - - William.
  window.addEventListener("scroll", disableScrolling);
}
// Game two timer.
function gameTwoTimer() {
  push();
  textSize(30);
  fill(0);
  push();
  textFont("impact");
  textAlign(CENTER);
  text("Time left in Game Two: " + game2Timer + " s", windowWidth/2-450, 80);
  pop();
  // Game two timer decreases by seconds when appropriate.
  if (programState === 8) {
    if (frameCount % 60 === 0) {
      game2Timer --;
    }
    // Game timer is reset once a certain game is done.
    if (game2Timer === 0) {
      programState = 7;
      game2Timer = 30;
      breathingSpace = new Timer(1000);
    }
  }
}
// Specific class for the stick man and its behaviour - William.
// Gravity is used for the stickman's jump and return to the surface.
class StickmanCharacter {
  constructor(objectX) {
    // Variables.
    this.width = width;
    this.height = height;
    this.objectX = objectX;
    this.objectY = 654;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.gravitySpeed = 0;
    this.stickmanStanding = true;
    this.runningState = 1, this.frameDuration1 = 60 , this.frameDuration2 = 60,
    this.frameDuration3 = 60, this.frameDuration4 = 60;
    this.lastTimeFrameChanged = millis();
  }
  updateDisplay() {
    noStroke();
    imageMode(CENTER);
    // If stickman is off surface, image is changed to jumping.
    if (this.objectY < 654) {
      image(stickmanJumpState, this.objectX+30, this.objectY, 480, 380);
    }
    // If stickman is on surface, image changed to standing.
    else if (!this.objectY < 654 && this.stickmanStanding === true) {
      image(stickmanStandState, this.objectX, this.objectY-25, 70, 150);
    }
    // If right arrow is pressed, stickman image is change to running.
    if (keyIsDown(39) && !keyIsDown(38) && this.gravitySpeed === 0) { //39 - right arrow
      this.stickmanStanding = false;
      // Running frames are looped to create a real time animation effect.
      if (this.runningState === 1) {
        image(stickmanRunState1, this.objectX-20, this.objectY-10, 120, 125);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration1) {
          this.runningState = 2;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 2) {
        image(stickmanRunState2, this.objectX-20, this.objectY-10, 100, 125);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration2) {
          this.runningState = 3;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 3) {
        image(stickmanRunState3, this.objectX-20, this.objectY-16, 80, 135);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration3) {
          this.runningState = 4;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 4) {
        image(stickmanRunState4, this.objectX-30, this.objectY-10, 120, 125);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration4) {
          this.runningState = 1;
          this.lastTimeFrameChanged = millis();
        }
      }
    }
    else {
      this.stickmanStanding = true;
    }
  }
  newPositionAndSurfaceDetection() {
    // Gravity is implemented to the stickman.
    this.gravitySpeed += this.gravity;
    this.objectY += this.velocityY + this.gravitySpeed;
    if (this.objectY > 654) {
      this.objectY = 654;
      this.gravitySpeed = 0;
    }
  }
  jump(negativeNumericalValue) {
    // If up arrow pressed, stickman accelerates up at a lower rate.
    if (keyIsDown(38) && this.objectY > 639) { //up arrow
      stickman.gravity = negativeNumericalValue;
    }
    // If up arrow pressed, stickman accelerates up at a higher rate.
    else if (keyIsDown(88) && this.objectY > 639) { //key x
      stickman.gravity = negativeNumericalValue-2;
    }
    else {
      // Rate at which stickman comes back down to surface.
      stickman.gravity = 0.8;
    }
  }
}
// Specific class for the collision detector (hitbox)
// that follows the movements of the stickman. The class also holds the
// obstacles. - William.
// Collision detector has the same behaviour as stickman.
class CollisionDetection {
  constructor(objectX) {
    this.width = width;
    this.height = height;
    this.objectX = objectX;
    this.objectY = 654;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.gravitySpeed = 0;
  }
  updateDisplay() {
    // Hitbox.
    rect(this.objectX-36, this.objectY-92, 60, 150);
  }
  newPositionAndSurfaceDetection() {
    this.gravitySpeed += this.gravity;
    this.objectY += this.velocityY + this.gravitySpeed;
    if (this.objectY > 654) {
      this.objectY = 654;
      this.gravitySpeed = 0;
    }
  }
  jump(negativeNumericalValue) {
    if (keyIsDown(38) && this.objectY > 639) { //up arrow
      collisionDetector.gravity = negativeNumericalValue;
    }
    else if (keyIsDown(88) && this.objectY > 639) { //key x
      collisionDetector.gravity = negativeNumericalValue-2;
    }
    else {
      collisionDetector.gravity = 0.8;
    }
  }
  obstacles() {
    //Obstacle 1.
    if (obstacleState === 1) {
      // Variable for colliding with obstacle.
      this.obstacleOccurance =
      collideRectCircle(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 590, 240);
      fill("grey");
      ellipse(obstacleX, 580, 240);
    }
    //Obstacle 2.
    else if (obstacleState === 2) {
      // Variable for colliding with obstacle.
      this.obstacleOccurance =
      collideRectCircle(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 580, 230, 50);
      fill("grey");
      triangle(obstacleX-60, 570, obstacleX-88, 470, obstacleX-116, 570);
      triangle(obstacleX+27, 570, obstacleX-1, 460, obstacleX-29, 570);
      triangle(obstacleX+117, 570, obstacleX+89, 470, obstacleX+61, 570);
      push();
      fill("black");
      rectMode(CENTER);
      rect(obstacleX, 580, 240, 50);
      pop();
      fill(0);
      rect(obstacleX-120, 605, 40, 100);
      rect(obstacleX-20, 605, 40, 100);
      rect(obstacleX+80, 605, 40, 100);
    }
    //Obstacle 3.
    else if (obstacleState === 3) {
      // Variable for colliding with obstacle.
      this.obstacleOccurance =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX-150, 655, 300, 100);
      // Variable for colliding with obstacle.
      this.obstacleOccurance3 =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX-200, 290, 400, 100);
      fill(0);
      rect(obstacleX-200, 315, 400, 100);
      fill("red");
      rect(obstacleX-150, 655, 300, 100);
      image(lavaImage, obstacleX, 700, 300, 90);
      fill(0);
      rect(obstacleX-200, 655, 50, 90);
      rect(obstacleX+150, 655, 50, 90);
    }
    // Obstacle 4.
    else if (obstacleState === 4) {
      // Variable for colliding with obstacle.
      this.obstacleOccurance =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 500, 500, 20);
      push();
      translate(obstacleX, 400);
      rotate(millis() / 100);
      fill(0);
      rectMode(CENTER);
      rect(0, 0, 300, 20);
      pop();
      push();
      fill(0);
      rect(obstacleX-20, 400, 40, 700);
      fill("red");
      ellipseMode(CENTER);
      ellipse(obstacleX, 400, 40);
      pop();
    }
    // Highscore is set to go up if score is higher.
    if (keyIsDown(39)) {
      obstacleX -= obstacleSpeed;
      if (score > highScore) {
        setHighScore();
        highScore = score;
      }
      // Score goes up with the stickman's running.
      if (frameCount % 5 === 0) {
        score ++;
      }
    }
    // Obstacle goes to the opposite side everytime is reaches the stickman's side.
    if (obstacleX <= -120) {
      obstacleX = windowWidth;
      obstacleState = obstacleStateArray[Math.floor(Math.random() * obstacleStateArray.length)];
    }
    // If hitbox hits obstacle, game changes to first game and timer reset.
    if (this.obstacleOccurance || this.obstacleOccurance3) {
      gameState = 2;
      game2Timer = 30;
    }
  }
}
// ###################################################################################################

// Timer for the whole game. This timer is synced with the background music.
function overallGameTimer() {
  push();
  // Display of overall timer.
  textSize(30);
  if (programState === 7) {
    fill(255);
  }
  else if (programState === 8) {
    fill(0);
  }
  push();
  textFont("impact");
  textAlign(CENTER);
  text("Overall Time: " + overallTimer + " s", windowWidth/2-480, 30);
  pop();
  // Overall timer goes down by seconds.
  if (frameCount % 60 === 0) {
    overallTimer --;
  }
  // If timer is done, the whole program is down and shows the score. Overall timer reset.
  if (overallTimer === 0) {
    programState = 9;
    overallTimer = 123;
  }
}
function gameOverConditionals() {
  // Display final score after time is up - William.
  background(0);
  push();
  fill(255);
  textSize(90);
  textAlign(CENTER);
  textFont("impact");
  fill("red");
  text("TIME'S UP!", windowWidth/2, windowHeight/2);
  fill("gold");
  textSize(40);
  text("Final Score: " + score + " points", windowWidth/2, windowHeight/2+70);
  text("High Score: " + highScore + " points", windowWidth/2, windowHeight/2+140);
  pop();
  // If key 'r' is pressed, the game goes back to the instructions and the user can start again.
  if(keyIsDown(82)) { // key r
    programState = 3;
    score = 0;
  }
}
// Universal class for the overall program.
// Timer for timing events at the beginning and during the program.
class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}
