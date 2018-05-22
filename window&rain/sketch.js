//McRavenTuazon
//Cs30
//15-May-2018

//Reference
// https://genius.com/Lyn-inaizumi-beneath-the-mask-annotated
//https://www.youtube.com/watch?v=h012heXDB7o

//rain sound effect and music
let rainSfx, maskInt;
let y = 0;
let y2 = 100;
let x = 150;

function preload() {
  //A looping sound of rain
  rainSfx = loadSound("Music&Sounds/rain.wav");
  //music
  maskInt = loadSound("Music&Sounds/Mask-Instrumental.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.3);
  maskInt.loop();
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
  y = y + 100;
  y2 = y2 + 100;
  if (y > windowHeight) {
    y = -200;
    y2 = -100;
    x = random(windowWidth/2 - 590, windowWidth/2 - 110);
  }
  push();
  strokeWeight(2);
  stroke(255,0,0);
  line(x,y,x,y2);
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
