let state = 1;
let timerONE, timerTWO, timerTHREE, timerFOUR;

function setup() {
  createCanvas(windowWidth, windowHeight);
  timerONE = new Timer(300);
}

function draw() {
  if (state === 1) {
    display();
    if (timerONE.isDone()) {
      state = 2;
      timerTWO = new Timer(300);
    }
  }
  else if (state === 2) {
    display2();
    if (timerTWO.isDone()) {
      state = 3;
      timerTHREE = new Timer(300);
    }
  }
  else if (state === 3) {
    display3();
    if (timerTHREE.isDone()) {
      state = 4;
      timerFOUR = new Timer(300);
    }
  }
  else if (state === 4) {
    display4();
    if (timerFOUR.isDone()) {
      state = 1;
      timerONE.reset(0);
    }
  }
}

function display(){
  background(0);
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(100);
  text("SAMPLE",width/2,height/2);
}
function display2(){
  background(255,0,0);
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(100);
  text("SAMPLE",width/2,height/2);
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
