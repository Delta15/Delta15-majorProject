//McRavenTuazon
//Cs30
//15-May-2018

//main music and rain sound effect
let rainSfx, BGmusic;
//text that change when timer is done
let lyricsText = "Beneath the Mask\nLyn Inaizumi";

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
  BGmusic = loadSound("Music&Sounds/mask.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainSfx.loop();
  rainSfx.setVolume(0.4);
  BGmusic.setVolume(1.0);
  BGmusic.play();

  //Verse 1//
  Vone = new Timer(25500);
  Vtwo = new Timer(29000);
  Vthree = new Timer(32000);
  Vfour = new Timer(35000);
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

}

function draw() {
  background(0);
  lyrics();
}

function lyrics(){
  // settings of lyrics
  textLeading(40);
  textAlign(LEFT, CENTER);
  fill(255,0,0);
  textSize(50);
  text(lyricsText,width / 2 + 200, height / 2);

  // Verse 1 //
  if (Vone.isDone()) {
    lyricsText = "Verse\nWhere have you been?";
  }
  if (Vtwo.isDone()) {
    lyricsText = "Verse\nBeen searching all along";
  }
  if (Vthree.isDone()) {
    lyricsText = "Verse\nCame facing twilight on and on";
  }
  if (Vfour.isDone()) {
    lyricsText = "Verse\nWithout a clue";
  }
  if (Vfive.isDone()) {
    lyricsText = "Verse\nWithout a sign";
  }
  if (Vsix.isDone()) {
    lyricsText = "Verse\nWithout grasping yet";
  }
  if (Vseven.isDone()) {
    lyricsText = "Verse\nThe real question to be asked";
  }
  if (Veight.isDone()) {
    lyricsText = "Verse\nWhere have I been?";
  }

  // Chorus //
  if (Cone.isDone()) {
    lyricsText = "Chorus\nI'm a shapeshifter";
  }
  if (Ctwo.isDone()) {
    lyricsText = "Chorus\nAt Poe's masquerade";
  }
  if (Cthree.isDone()) {
    lyricsText = "Chorus\nHiding both face and mind";
  }
  if (Cfour.isDone()) {
    lyricsText = "Chorus\nAll free for you to draw";
  }
  if (Cfive.isDone()) {
    lyricsText = "Chorus\nI'm a shapeshifter";
  }
  if (Csix.isDone()) {
    lyricsText = "Chorus\nWhat else should I be?";
  }
  if (Cseven.isDone()) {
    lyricsText = "Chorus\nPlease don't take off my mask";
  }
  if (Ceight.isDone()) {
    lyricsText = "Chorus\nRevealing dark";
  }

  // hide lyricsText //
  if (hidetext.isDone()) {
    lyricsText = " ";
  }

  // Verse 2 //
  if (V2one.isDone()) {
    lyricsText = "Verse 2\nMoments of calm";
  }
  if (V2two.isDone()) {
    lyricsText = "Verse 2\nNothing left to be found";
  }
  if (V2three.isDone()) {
    lyricsText = "Verse 2\nA mirror right in front of me";
  }
  if (V2four.isDone()) {
    lyricsText = "Verse 2\nThat's where I find";
  }
  if (V2five.isDone()) {
    lyricsText = "Verse 2\nAn empty glass";
  }
  if (V2six.isDone()) {
    lyricsText = "Verse 2\nReflecting the sad truth";
  }
  if (V2seven.isDone()) {
    lyricsText = "Verse 2\nIt's telling words not to be told";
  }
  if (V2eight.isDone()) {
    lyricsText = "Verse 2\nI need the mask";
  }

  // Chorus2 //
  if (C2one.isDone()) {
    lyricsText = "Chorus2\nI'm a shapeshifter";
  }
  if (C2two.isDone()) {
    lyricsText = "Chorus2\nAt Poe's masquerade";
  }
  if (C2three.isDone()) {
    lyricsText = "Chorus2\nHiding both face and mind";
  }
  if (C2four.isDone()) {
    lyricsText = "Chorus2\nAll free for you to draw";
  }
  if (C2five.isDone()) {
    lyricsText = "Chorus2\nI'm a shapeshifter";
  }
  if (C2six.isDone()) {
    lyricsText = "Chorus2\nChained down to my core";
  }
  if (C2seven.isDone()) {
    lyricsText = "Chorus2\nPlease don't take off my mask";
  }
  if (C2eight.isDone()) {
    lyricsText = "Chorus2\nMy place to hide";
  }

  // hidetext2 //
  if (hidetext2.isDone()) {
    lyricsText = " ";
  }

  // Bridge //
  if (bOne.isDone()) {
    lyricsText = "Bridge\nI can't tell you";
  }
  if (bTwo.isDone()) {
    lyricsText = "Bridge\nHow to see me";
  }
  if (bThree.isDone()) {
    lyricsText = "Bridge\nJust a cage of bones";
  }
  if (bFour.isDone()) {
    lyricsText = "Bridge\nThere's nothing inside";
  }
  if (bFive.isDone()) {
    lyricsText = "Bridge\nWill it unleash me?";
  }
  if (bSix.isDone()) {
    lyricsText = "Bridge\nBurning down the walls";
  }
  if (bSeven.isDone()) {
    lyricsText = "Bridge\nIs there a way";
  }
  if (bEight.isDone()) {
    lyricsText = "Bridge\nFor me to break?";
  }

  // Chorus3 //
  if (C3one.isDone()) {
    lyricsText = "Chorus3\nI'm a shapeshifter";
  }
  if (C3two.isDone()) {
    lyricsText = "Chorus3\nAt Poe's masquerade";
  }
  if (C3three.isDone()) {
    lyricsText = "Chorus3\nHiding both face and mind";
  }
  if (C3four.isDone()) {
    lyricsText = "Chorus3\nAll free for you to draw";
  }
  if (C3five.isDone()) {
    lyricsText = "Chorus3\nI'm a shapeshifter";
  }
  if (C3six.isDone()) {
    lyricsText = "Chorus3\nHave no face to show";
  }
  if (C3seven.isDone()) {
    lyricsText = "Chorus3\nPlease don't take off my mask";
  }
  if (C3eight.isDone()) {
    lyricsText = "Chorus3\nMy disguise";
  }

  // hidetext3 //
  if (hidetext3.isDone()) {
    lyricsText = " ";
  }
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
