// global variables
let state;
let button;
let backColor = 0;
let maskColor = 0;
let glideColor = 255;
let showTitleM = false;
let showTitleG = false;
let preV_glide,preV_mask;

function preload(){
  button = loadSound("sound/button.mp3");
  preV_glide = loadSound("sound/Preview_Glide.mp3");
  preV_mask = loadSound("sound/Preview_mask.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  button.setVolume(0.5);
  preV_mask.setVolume(1.0);
  preV_glide.setVolume(1.0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  if (state === 1) {
    maskMenu();
    glideMenu();
    if (showTitleG === true) {
      push();
      fill(255,255,0);
      textAlign(CENTER,CENTER);
      text("Stephen Walking",windowWidth/2 + 600,windowHeight/2 - 100);
      pop();
    }
    if (showTitleM === true) {
      push();
      fill(255,0,0);
      textAlign(RIGHT,CENTER);
      text("Lyn Inaizumi",windowWidth/2 - 600,windowHeight/2 - 100);
      pop();
    }
    fill(0);
    textAlign(CENTER,CENTER);
    text("M\nE\nN\nU",50,250);
  }
  if (state === 2) {
    background(0);
    back();
  }
  if (state === 3) {
    background(0,191,255);
    back();
  }
}

function maskMenu(){
  let buttonWidth = windowWidth/2;
  let buttonHeight = windowHeight;
  let leftSide = 100;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  maskColor = 0;
  showTitleM = false;

  fill(255,0,0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    if (!preV_mask.isLooping()) {
      preV_mask.loop();
    }
    showTitleM = true;
    maskColor = 255;
    if (mouseIsPressed) {
      button.play();
      state = 2;
    }
  }
  else {
    preV_mask.stop();
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(maskColor);
  textSize(100);
  textAlign(CENTER,CENTER);
  text("Beneath the Mask",windowWidth/2 - 600,windowHeight/2);
}

function glideMenu(){
  let buttonWidth = windowWidth/2;
  let buttonHeight = windowHeight;
  let leftSide = windowWidth/2;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  glideColor = 0;
  showTitleG = false;

  fill(255,255,0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0,191,255);
    if (!preV_glide.isLooping()) {
      preV_glide.loop();
    }
    showTitleG = true;
    glideColor = 255,255,224;
    if (mouseIsPressed) {
      button.play();
      state = 3;
    }
  }
  else {
    preV_glide.stop();
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(glideColor);
  textSize(100);
  textAlign(CENTER,CENTER);
  text("Glide",windowWidth/2 + 700,windowHeight/2);
}

function back(){
  let buttonWidth = 100;
  let buttonHeight = 100;
  let leftSide = 0;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  backColor = 0;

  fill(255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    backColor = 255;
    if (mouseIsPressed) {
      button.play();
      state = 1;
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(backColor);
  textSize(25);
  textAlign(CENTER,CENTER);
  text("Back",50,50);
}
