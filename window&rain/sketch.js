//McRavenTuazon
//Cs30
//15-May-2018

//Reference
// https://genius.com/Lyn-inaizumi-beneath-the-mask-annotated
//https://www.youtube.com/watch?v=h012heXDB7o

//rain sound effect
let rainSfx, maskInt;

function preload() {
  rainSfx = loadSound("Music&Sounds/rain.wav");
  //A looping sound of rain
  maskInt = loadSound("Music&Sounds/Mask-Instrumental.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.3);
  maskInt.play();
  maskInt.setVolume(1.0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  windowM();
}

function windowM() {
  background(0);
  fill(255);
  rectMode(CENTER, CENTER);
  rect(width/2 - 350,height/2,500,800);
  fill(0);
  rect(width/2 - 350,height/2,485,785);
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
