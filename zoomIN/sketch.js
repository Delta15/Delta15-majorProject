//zoomIn settings
let zGrow = 0;
let zGrowV2 = 0;
let zHeight = 0;
let zWidth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  zGrow = windowWidth + 1500;
  zGrowV2 = windowHeight + 1500;
}

function draw() {
  background(0);
  zoomIn();
}

function zoomIn(){
  zGrow = zGrow - 3;
  zGrowV2 = zGrowV2 - 3;
  if (zGrow > 0) {
    zGrow = 0;
    zGrowV2 = 0;
  }
  fill(255,0,0);
  noStroke();
  ellipse(width / 2 + 200, height / 2, zGrow, zGrowV2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

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
