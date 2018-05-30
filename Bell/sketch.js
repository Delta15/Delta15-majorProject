let testBell;
let grow = 0;
let bellPosX = 0;
let bellPosY = 0;
let nBell = [];
let wait;
let bONE,bTWO,bTHREE,bFOUR,bFIVE,bSIX,bSEVEN,bEIGHT;

function preload(){
  testBell = loadSound("Music&Sounds/mask_ Bell and String.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  testBell.loop();
  wait = new Timer(723);
  bellPosX = random(200,windowWidth - 200);
  bellPosY = random(200,windowHeight - 200);
}

function draw() {
  background(0);
  if (wait.isDone()) {
    bell();
  }
}

function bell(){
  grow = grow + 3;
  if (grow > 200) {
    grow = 0;
    bellPosX = random(200,windowWidth - 200);
    bellPosY = random(200,windowHeight - 200);
  }
  strokeWeight(5);
  stroke(255,0,0);
  noFill();
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
