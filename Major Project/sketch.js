let state = 1;
let timerONE, timerTWO, timerTHREE, timerFOUR;

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  timerONE = new Timer(3000);
}

function draw() {
  if (state === 1) {
    intro();
    if (timerONE.isDone()) {
      state = 2;
      timerTWO = new Timer(500);
    }
  }
  else if (state === 2) {
    mainManu();
  }
  else if (state === 3) {
    display3();
    if (timerTHREE.isDone()) {
      state = 4;
      timerFOUR = new Timer(500);
    }
  }
  else if (state === 4) {
    display4();
    if (timerFOUR.isDone()) {
      state = 1;
      timerONE.reset(500);
    }
  }
}

function intro(){
  background(0);
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(100);
  text("SAMPLE",width/2,height/2);
}
function mainManu(){
  background(255,0,0);
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(100);
  text("SAMPLE",width/2,height/2);
  if (keyIsPressed || mouseIsPressed) {
    state = 3;
    timerTHREE = new Timer(500);
  }
}

function display3(){
  background(0,255,0);
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(100);
  text("SAMPLE",width/2,height/2);
}

function display4(){
  background(255);
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(100);
  text("SAMPLE",width/2,height/2);
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
