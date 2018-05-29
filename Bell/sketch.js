let testBell;
let grow = 0;
let bellPosX = 500;
let bellPosY = 500;
let wait;

function preload(){
  testBell = loadSound("Music&Sounds/mask_ Bell and String.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  testBell.loop();
  wait = new Timer(723);
}

function draw() {
  background(0);
  if (wait.isDone()) {
    bell();
  }
}

function bell(){
  grow = grow + 4;
  if (grow > 150) {
    grow = 0;
    bellPosX = random(50,windowWidth - 50);
    bellPosY = random(50,windowHeight - 50);
  }
  noStroke();
  fill(255,0,0);
  ellipse(bellPosX,bellPosY,grow,grow);
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
