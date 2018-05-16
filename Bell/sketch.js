let testBell;
let grow = 0;
let wait;

function preload(){
  testBell = loadSound("Music&Sounds/mask_ Bell and String.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  testBell.loop();
  wait = new Timer(723);
}

function draw() {
  background(0);
  if (wait.isDone()) {
    background(255);
    bell();
  }
}

function bell(){
  grow = grow + 2;
  if (grow > 500) {
    grow = 0;
    // noLoop();
  }
  noStroke();
  fill(255,0,0);
  ellipse(windowWidth/2,windowHeight/2,grow,grow);
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
