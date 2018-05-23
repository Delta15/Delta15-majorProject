let x = 0;
let testString;
let wait;

function preload(){
  testString = loadSound("Music&Sounds/mask_ Bell and String.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  testString.loop();
  wait = new Timer(1290);
}

function draw() {
  background(0);
  if (wait.isDone()) {
    string();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//random display strings 4 times
function string(){
  x = random(50, 1000);
  stroke(255,0,0);
  strokeWeight(1);
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
