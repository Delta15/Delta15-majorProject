// global variables
let state;
let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  x = width / 2;
  y = height / 2;
  radius = 50;
}

function draw() {
  background(255);
  maskMenu();
}

function maskMenu(){
  let buttonWidth = windowWidth/2;
  let buttonHeight = windowHeight;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(255,0,0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}
