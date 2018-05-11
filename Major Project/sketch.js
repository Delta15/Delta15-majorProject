let state = 1;
let rainSfx;
let timerONE, timerTWO, timerTHREE, timerFOUR, timerFIVE;

function preload() {
  rainSfx = loadSound("Music&Sounds/rain.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  timerONE = new Timer(2000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === 1) {
    intro();
    if (timerONE.isDone()) {
      state = 2;
      timerTWO = new Timer(3000);
    }
  }
  else if (state === 2) {
    mainMenu();
  }
  else if (state === 3) {
    display3();
    if (timerTHREE.isDone()) {
      state = 4;
      timerFOUR = new Timer(3000);
    }
  }
  else if (state === 4) {
    display4();
    if (timerFOUR.isDone()) {
      state = 5;
      timerFIVE = new Timer(3000);
    }
  }
  else if (state === 5) {
    display5();
    if (timerFIVE.isDone()) {
      // state = 6;
    }
  }
}

function intro() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(100);
  text("McRaven Tuazon", width / 2, height / 2 - 50);
  text("CS30", width / 2, height / 2 + 50);
}

function mainMenu() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(50);
  text("CLICK TO PLAY", width / 2, height / 2);
  if (mouseIsPressed) {
    state = 3;
    timerTHREE = new Timer(3000);
  }
}

function display3() {
  background(0, 255, 0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(100);
  text("D3", width / 2, height / 2);
}

function display4() {
  background(255);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(100);
  text("D4", width / 2, height / 2);
}

function display5() {
  background(0, 255, 0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(100);
  text("D5", width / 2, height / 2);
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
