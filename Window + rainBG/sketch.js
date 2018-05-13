let rainSfx, BGmusic;
let lyricsText = " Where have you been?";

function preload() {
  rainSfx = loadSound("Music&Sounds/rain.wav");
  BGmusic = loadSound("Music&Sounds/mask.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.2);
  BGmusic.setVolume(1.0);
  BGmusic.loop();
}

function draw() {
  background(0);
  fill(255);
  rectMode(CENTER);
  rect(width/2 - 200,height/2 - 30,500,300);
  fill(0);
  rect(width/2 - 200,height/2 - 30,485,285);
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
