let x = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  string();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function string(){
  x = random(50, windowWidth - 50);
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
