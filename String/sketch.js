let x = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0);
  // rect(random(width), random(height), random(50, 200), random(50, 200));
  string();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function string(){
  background(0);
  x = x + random(50, windowWidth - 50);
  if (x > width) {
    x = 0;
  }
  stroke(255,0,0);
  strokeWeight(5);
  line(x, 0, x, height);
  noLoop();
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
