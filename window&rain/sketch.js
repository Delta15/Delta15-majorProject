//McRavenTuazon
//Cs30
//15-May-2018

//Reference
// https://genius.com/Lyn-inaizumi-beneath-the-mask-annotated
//https://www.youtube.com/watch?v=h012heXDB7o

//rain sound effect
let rainSfx, maskInt;
let y = 0;
let y2 = 100;
let z = 0;

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
  background(0);
  rainAni();
  windowM();
}

function windowM() {
  push();
  fill(255);
  rectMode(CORNER);
  rect(0,0,windowWidth,windowHeight/2 - 390);//TOP side
  rect(0,0,windowWidth/2 - 590,windowHeight);//LEFT side
  rect(0,windowHeight/2 + 390,windowWidth,windowHeight);//BOTTOM side
  rect(windowWidth/2 - 110,0,windowWidth,windowHeight);//RIGHT side
  pop();
  fill(0);
  noStroke();
  rectMode(CORNER);
  rect(0,0,windowWidth,windowHeight/2 - 400);//TOP side
  rect(0,0,windowWidth/2 - 600,windowHeight);//LEFT side
  rect(0,windowHeight/2 + 400,windowWidth,windowHeight);//BOTTOM side
  rect(windowWidth/2 - 100,0,windowWidth,windowHeight);//RIGHT side
}

function rainAni(){
  y = y + 50;
  y2 = y2 + 50;
  if (y > windowHeight + 1000) {
    y = -200;
    y2 = -100;
  }
  push();
  strokeWeight(2);
  stroke(255,0,0);
  line(windowWidth/2 - 250,y,windowWidth/2 -250,y2);
  pop();
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
