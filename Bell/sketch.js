let testBell;
let grow = 0;
let bellPosYandX = 0;
let wait;

function preload(){
  testBell = loadSound("Music&Sounds/mask_ Bell and String.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // testBell.loop();
  wait = new Timer(723);
}

function draw() {
  background(0);
  if (wait.isDone()) {
    bell();
  }
}

function bell(){
  grow = grow + 1;
  bellPosYandX = random(50, 500);
  if (grow === 100) {
    bellPosYandX = random(50, 500);
    grow = 0;
  }
  noStroke();
  fill(255,0,0);
  ellipse(bellPosYandX,bellPosYandX,grow,grow);
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
