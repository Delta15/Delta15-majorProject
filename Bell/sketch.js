function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  beat();
}

function beat(){
  let bellONE, bellTWO, bellTHREE;
  let state = 1;
  bellONE = new Timer(0);
  if (state === 1) {
    background(0);
    fill(255,0,0);
    ellipse(random(width), random(height), 100, 100);
    noLoop();
    if (bellONE.isDone()) {
      bellTWO = new Timer(500);
      state = 2;
      loop();
    }
  }
  else if (state === 2) {
    background(0);
    fill(255,0,0);
    ellipse(random(width), random(height), 100, 100);
    noLoop();
    if (bellTWO.isDone()) {
      bellTHREE = new Timer(500);
      state = 3;
      loop();
    }
  }
  else if (state === 3) {
    background(0);
    fill(255,0,0);
    ellipse(random(width), random(height), 100, 100);
    noLoop();
    if (bellTHREE.isDone()) {
      bellTHREE = new Timer(500);
      // state = 4;
    }
  }
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
