//main music and rain sound effect
let rainSfx, BGmusic;
//text that change when timer is done
let lyricsText = " ";
//Verse1
let Vone, Vtwo, Vthree, Vfour, Vfive, Vsix, Vseven, Veight;

//Chorus
let Cone, Ctwo, Cthree, Cfour, Csix, Cseven, Ceight;

//Verse 2
let V2one, V2two, V2three, V2four, V2five, V2six, V2seven, 

function preload() {
  rainSfx = loadSound("Music&Sounds/rain.wav");
  BGmusic = loadSound("Music&Sounds/mask.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.2);
  BGmusic.setVolume(1.0);
  BGmusic.play();

  //Verse 1//
  Vone = new Timer(25500);
  Vtwo = new Timer(29000);
  Vthree = new Timer(32500);
  Vfour = new Timer(36000);
  Vfive = new Timer(39000);
  Vsix = new Timer(42000);
  Vseven = new Timer(45000);
  Veight = new Timer(48000);

  // Chorus //

}

function draw() {
  background(0);
  windowM();
  lyrics();
}

function lyrics(){
  // settings of lyrics
  fill(255,0,0);
  textSize(40);
  text(lyricsText,width / 2 + 400, height / 2);

  // Verse 1 //
  if (Vone.isDone()) {
    lyricsText = "Where have you been?";
  }
  if (Vtwo.isDone()) {
    lyricsText = "Been searching all along";
  }
  if (Vthree.isDone()) {
    lyricsText = "Came facing twilight on and on";
  }
  if (Vfour.isDone()) {
    lyricsText = "Without a clue";
  }
  if (Vfive.isDone()) {
    lyricsText = "Without a sign";
  }
  if (Vsix.isDone()) {
    lyricsText = "Without grasping yet";
  }
  if (Vseven.isDone()) {
    lyricsText = "The real question to be asked";
  }
  if (Veight.isDone()) {
    lyricsText = "Where have I been?";
  }
  // Chorus //
}

function windowM(){
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
