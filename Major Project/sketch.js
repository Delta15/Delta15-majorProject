//McRavenTuazon
//Cs30
//15-May-2018

//Reference
// https://genius.com/Lyn-inaizumi-beneath-the-mask-annotated
//https://www.youtube.com/watch?v=h012heXDB7o

let state = 1;
//main music and rain sound effect
let rainSfx, BGmusic, musicENDS;

let timerONE, timerTWO, timerTHREE, timerFOUR, timerFIVE;

//text that change when timer is done
let lyricsText = " ";

//Verse1
let Vone, Vtwo, Vthree, Vfour, Vfive, Vsix, Vseven, Veight;

//Chorus
let Cone, Ctwo, Cthree, Cfour, Cfive, Csix, Cseven, Ceight;

//hid text
let hidetext, hidetext2, hidetext3;

//Verse 2
let V2one, V2two, V2three, V2four, V2five, V2six, V2seven, V2eight;

//Chorus2
let C2one, C2two, C2three, C2four, C2five, C2six, C2seven, C2eight;

//Bridge
let bOne,bTwo,bThree,bFour,bFive,bSix,bSeven,bEight;

//Chorus3
let C3one, C3two, C3three, C3four, C3five, C3six, C3seven, C3eight;

function preload() {
  rainSfx = loadSound("Music&Sounds/rain.wav");
  //A looping sound of rain
  BGmusic = loadSound("Music&Sounds/mask.mp3");
  //music length 4 minute 39 second or 279000 millisecond
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.3);
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
    nameAndclass();
    windowM();
    if (timerTHREE.isDone()) {
      state = 4;
      timerFOUR = new Timer(12500);
    }
  }
  else if (state === 4) {
    nameSongAndsinger();
    windowM();
    if (timerFOUR.isDone()) {
      state = 5;
    }
  }
  else if (state === 5) {
    DisPlaylyrics();
    windowM();
    lyrics();
    if (musicENDS.isDone()) {
      state = 2;
    }
  }
}

function windowM() {
  fill(255);
  rectMode(CENTER, CENTER);
  rect(width/2 - 350,height/2,500,800);
  fill(0);
  rect(width/2 - 350,height/2,485,785);
}

function intro() {
  background(0);
}

function mainMenu() {
  background(0);
  textAlign(LEFT, CENTER);
  fill(255,0,0);
  textSize(50);
  text("CLICK TO PLAY", width / 2 + 200, height / 2);
  if (mouseIsPressed) {
    state = 3;
    timerTHREE = new Timer(12500);
    musicENDS = new Timer (279000);
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
    Cone = new Timer (51000);
    Ctwo = new Timer (55000);
    Cthree = new Timer (58000);
    Cfour = new Timer (61000);
    Cfive = new Timer (64000);
    Csix = new Timer (68000);
    Cseven = new Timer (71000);
    Ceight = new Timer (74000);

    // hidetext //
    hidetext = new Timer(80000);

    //Verse2
    V2one = new Timer(103000);
    V2two = new Timer(107000);
    V2three = new Timer(110000);
    V2four = new Timer(113000);
    V2five = new Timer(116000);
    V2six = new Timer(119000);
    V2seven = new Timer(123000);
    V2eight = new Timer(126000);

    //Chorus2
    C2one = new Timer(130000);
    C2two = new Timer(133000);
    C2three = new Timer(136000);
    C2four = new Timer(139000);
    C2five = new Timer(142000);
    C2six = new Timer(145000);
    C2seven = new Timer(149000);
    C2eight = new Timer(152000);

    //hidetext
    hidetext2 = new Timer(155000);

    //Bridge
    bOne = new Timer(182000);
    bTwo = new Timer(184000);
    bThree = new Timer(187000);
    bFour = new Timer(191000);
    bFive = new Timer(194000);
    bSix = new Timer(197000);
    bSeven = new Timer(201000);
    bEight = new Timer(204000);

    //Chorus3
    C3one = new Timer(207000);
    C3two = new Timer(210000);
    C3three = new Timer(213000);
    C3four = new Timer(217000);
    C3five = new Timer(220000);
    C3six = new Timer(223000);
    C3seven = new Timer(226000);
    C3eight = new Timer(230000);

    //hidetext
    hidetext3 = new Timer(235000);
    BGmusic.play();
  }
}
//Name and Class
function nameAndclass() {
  background(0);
  textAlign(LEFT, CENTER);
  textLeading(20);
  fill(255,0,0);
  textSize(50);
  text("McRaven Tuazon\nCS30", width / 2 + 200, height / 2);
}
//Name of song and singer
function nameSongAndsinger() {
  background(0);
  textAlign(LEFT, CENTER);
  textLeading(20);
  fill(255,0,0);
  textSize(50);
  text("Beneath the Mask\nLyn Inaizumi", width / 2 + 200, height / 2);
}

function DisPlaylyrics() {
  background(0);
}

function lyrics(){
  // settings of lyrics
  textAlign(LEFT, CENTER);
  fill(255,0,0);
  textSize(50);
  text(lyricsText,width / 2 + 200, height / 2);

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
  if (Cone.isDone()) {
    lyricsText = "I'm a shapeshifter";
  }
  if (Ctwo.isDone()) {
    lyricsText = "At Poe's masquerade";
  }
  if (Cthree.isDone()) {
    lyricsText = "Hiding both face and mind";
  }
  if (Cfour.isDone()) {
    lyricsText = "All free for you to draw";
  }
  if (Cfive.isDone()) {
    lyricsText = "I'm a shapeshifter";
  }
  if (Csix.isDone()) {
    lyricsText = "What else should I be?";
  }
  if (Cseven.isDone()) {
    lyricsText = "Please don't take off my mask";
  }
  if (Ceight.isDone()) {
    lyricsText = "Revealing dark";
  }

  // hide lyricsText //
  if (hidetext.isDone()) {
    lyricsText = " ";
  }

  // Verse 2 //
  if (V2one.isDone()) {
    lyricsText = "Moments of calm";
  }
  if (V2two.isDone()) {
    lyricsText = "Nothing left to be found";
  }
  if (V2three.isDone()) {
    lyricsText = "A mirror right in front of me";
  }
  if (V2four.isDone()) {
    lyricsText = "That's where I find";
  }
  if (V2five.isDone()) {
    lyricsText = "An empty glass";
  }
  if (V2six.isDone()) {
    lyricsText = "Reflecting the sad truth";
  }
  if (V2seven.isDone()) {
    lyricsText = "It's telling words not to be told";
  }
  if (V2eight.isDone()) {
    lyricsText = "I need the mask";
  }

  // Chorus2 //
  if (C2one.isDone()) {
    lyricsText = "I'm a shapeshifter";
  }
  if (C2two.isDone()) {
    lyricsText = "At Poe's masquerade";
  }
  if (C2three.isDone()) {
    lyricsText = "Hiding both face and mind";
  }
  if (C2four.isDone()) {
    lyricsText = "All free for you to draw";
  }
  if (C2five.isDone()) {
    lyricsText = "I'm a shapeshifter";
  }
  if (C2six.isDone()) {
    lyricsText = "Chained down to my core";
  }
  if (C2seven.isDone()) {
    lyricsText = "Please don't take off my mask";
  }
  if (C2eight.isDone()) {
    lyricsText = "My place to hide";
  }

  // hidetext2 //
  if (hidetext2.isDone()) {
    lyricsText = " ";
  }

  // Bridge //
  if (bOne.isDone()) {
    lyricsText = "I can't tell you";
  }
  if (bTwo.isDone()) {
    lyricsText = "How to see me";
  }
  if (bThree.isDone()) {
    lyricsText = "Just a cage of bones";
  }
  if (bFour.isDone()) {
    lyricsText = "There's nothing inside";
  }
  if (bFive.isDone()) {
    lyricsText = "Will it unleash me?";
  }
  if (bSix.isDone()) {
    lyricsText = "Burning down the walls";
  }
  if (bSeven.isDone()) {
    lyricsText = "Is there a way";
  }
  if (bEight.isDone()) {
    lyricsText = "For me to break?";
  }

  // Chorus3 //
  if (C3one.isDone()) {
    lyricsText = "I'm a shapeshifter";
  }
  if (C3two.isDone()) {
    lyricsText = "At Poe's masquerade";
  }
  if (C3three.isDone()) {
    lyricsText = "Hiding both face and mind";
  }
  if (C3four.isDone()) {
    lyricsText = "All free for you to draw";
  }
  if (C3five.isDone()) {
    lyricsText = "I'm a shapeshifter";
  }
  if (C3six.isDone()) {
    lyricsText = "Have no face to show";
  }
  if (C3seven.isDone()) {
    lyricsText = "Please don't take off my mask";
  }
  if (C3eight.isDone()) {
    lyricsText = "My disguise";
  }

  // hidetext3 //
  if (hidetext3.isDone()) {
    lyricsText = " ";
  }
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
