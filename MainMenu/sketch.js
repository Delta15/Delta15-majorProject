// global variables
let state;
let button;
let backColor = 0;
let maskColor = 0;
let glideColor = 255;

function preload(){
  button = loadSound("sound/button.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  if (state === 1) {
    maskMenu();
    glideMenu();
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
  let leftSide = 0;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  maskColor = 0;

  fill(255,0,0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    maskColor = 255;
    if (mouseIsPressed) {
      button.play();
      state = 2;
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(maskColor);
  textSize(100);
  textAlign(CENTER,CENTER);
  text("Mask",windowWidth/2 - 700,windowHeight/2);
}

function glideMenu(){
  let buttonWidth = windowWidth/2;
  let buttonHeight = windowHeight;
  let leftSide = windowWidth/2;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  glideColor = 0;

  fill(255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0,191,255);
    glideColor = 255,255,224;
    if (mouseIsPressed) {
      button.play();
      state = 3;
    }
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
