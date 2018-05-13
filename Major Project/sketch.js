let state = 1;
let rainSfx, BGmusic;
let timerONE, timerTWO, timerTHREE, timerFOUR, timerFIVE;

function preload() {
  rainSfx = loadSound("Music&Sounds/rain.wav");
  BGmusic = loadSound("Music&Sounds/mask.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.2);
  BGmusic.setVolume(1.0);
  timerONE = new Timer(5000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === 1) {
    intro();
    windowM();
    if (timerONE.isDone()) {
      state = 2;
      timerTWO = new Timer(3000);
    }
  }
  else if (state === 2) {
    mainMenu();
    windowM();
  }
  else if (state === 3) {
    display3();
    windowM();
    if (timerTHREE.isDone()) {
      state = 4;
      timerFOUR = new Timer(12500);
    }
  }
  else if (state === 4) {
    display4();
    windowM();
    if (timerFOUR.isDone()) {
      state = 5;
      timerFIVE = new Timer(3000);
    }
  }
  else if (state === 5) {
    display5();
    windowM();
    if (timerFIVE.isDone()) {
      // state = 6;
    }
  }
}

function windowM() {
  fill(255);
  rectMode(CENTER, CENTER);
  rect(width/2 - 200,height/2 - 30,500,300);
  fill(0);
  rect(width/2 - 200,height/2 - 30,485,285);
}

function intro() {
  background(0);
}

function mainMenu() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255,0,0);
  textSize(40);
  text("CLICK TO PLAY", width / 2 + 400, height / 2);
  if (mouseIsPressed) {
    state = 3;
    timerTHREE = new Timer(12500);
    BGmusic.play();
  }
}

function display3() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255,0,0);
  textSize(40);
  text("McRaven Tuazon", width / 2 + 400, height / 2 - 50);
  text("CS30", width / 2 + 400, height / 2 + 50);
}

function display4() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255,0,0);
  textSize(40);
  text("Beneath the Mask", width / 2 + 400, height / 2 - 80);
  text("Lyn Inaizumi", width / 2 + 400, height / 2) + 80;
}

function display5() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255,0,0);
  textSize(40);
  text("D5", width / 2 + 400, height / 2);
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
