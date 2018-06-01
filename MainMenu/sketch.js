// global variables
let state;
let x, y, radius;
let button,rButton;

function preload(){
  button = loadSound("sound/button.mp3");
  rButton = loadSound("sound/Rbutton.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  x = width / 2;
  y = height / 2;
  radius = 50;
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

  fill(255,0,0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    if (mouseIsPressed) {
      button.play();
      state = 2;
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function glideMenu(){
  let buttonWidth = windowWidth/2;
  let buttonHeight = windowHeight;
  let leftSide = windowWidth/2;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0,191,255);
    if (mouseIsPressed) {
      button.play();
      state = 3;
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function back(){
  let buttonWidth = 100;
  let buttonHeight = 100;
  let leftSide = 0;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    if (mouseIsPressed) {
      rButton.play();
      state = 1;
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}
