//McRavenTuazon
//Cs30
//15-May-2018

//Reference
// https://genius.com/Lyn-inaizumi-beneath-the-mask-annotated
//https://www.youtube.com/watch?v=h012heXDB7o
//https://www.youtube.com/watch?v=VL3mPTaFFak


// global variables
let state;

//mainMenu() settings
let button;
let backColor = 0;
let maskColor = 0;
let glideColor = 255;
let showTitleM = false;
let showTitleG = false;
let preV_glide,preV_mask;

//rainAni() settings
let y = 0;
let y2 = 100;
let x = 150;

//ball() settings
let grow = 0;
let cPosX = 0;
let cPosY = 0;

//mainMenu animation
let Rani = false;
let Cani = false;

//main music & beach sound effect for glide()
let beachSfx, glideMainM, glideENDS;
let Gone;

//gNameAndclass()
let tGrow = 0;

//gTitleAndProducer()
let nameSlide = 0;
let titleSlide = 0;

//gAlbum()
let gAl_down = 0;
let gAl_up = 0;

//Glide time
let gT,gT2,gT3;

//main music & rain sound effect for mask()
let rainSfx, maskMainM, maskENDS;

let timerONE, timerTWO, timerTHREE, timerFOUR, timerFIVE;

//text that change when timer is done
let lyricsText = " ";

//Verse1
let Vone, Vtwo, Vthree, Vfour, Vfive, Vsix, Vseven, Veight;

//Chorus
let Cone, Ctwo, Cthree, Cfour, Cfive, Csix, Cseven, Ceight;

//hid text
let hidetext, hidetext2, hidetext3, hidetext4;

//Verse 2
let V2one, V2two, V2three, V2four, V2five, V2six, V2seven, V2eight;

//Chorus2
let C2one, C2two, C2three, C2four, C2five, C2six, C2seven, C2eight;

//Bridge
let bOne, bTwo, bThree, bFour, bFive, bSix, bSeven, bEight;

//Chorus3
let C3one, C3two, C3three, C3four, C3five, C3six, C3seven, C3eight;

//end credits
let credits;

function preload() {
  button = loadSound("Music&Sounds/button.mp3");
  preV_glide = loadSound("Music&Sounds/Preview_Glide.mp3");
  preV_mask = loadSound("Music&Sounds/Preview_mask.mp3");
  //A looping sound of rain
  rainSfx = loadSound("Music&Sounds/rain.wav");
  //music 4 minute 39 seconds or 279000 millisecond
  maskMainM = loadSound("Music&Sounds/mask.mp3");

  //a looping sound of the beach
  beachSfx = loadSound("Music&Sounds/beach.mp3");
  //music 3 minute 16 seconds + extra space 5 seconds or 201000 millisecond
  glideMainM = loadSound("Music&Sounds/Glide.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  rainSfx.setVolume(0.4);
  beachSfx.setVolume(0.5);
  button.setVolume(0.5);
  preV_mask.setVolume(1.0);
  preV_glide.setVolume(1.0);
  maskMainM.setVolume(1.0);
  glideMainM.setVolume(1.0);
  cPosX = random(windowWidth / 2 + 200, windowWidth);
  cPosY = random(200, windowHeight - 200);
  nameSlide = width / 2 - 300;
  titleSlide = width / 2 + 300;
  gAl_down = height / 2 - 200;
  gAl_up =  height / 2 + 200;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === 1) {
    background(255);
    maskMenu();
    glideMenu();
    if (Rani === true) {
      MenuRainAni();
    }
    if (Cani === true) {
      ball();
    }
    if (showTitleG === true) {
      push();
      fill(255, 255, 0);
      textAlign(CENTER, CENTER);
      text("Stephen Walking", windowWidth / 2 + 600, windowHeight / 2 - 100);
      pop();
    }
    if (showTitleM === true) {
      push();
      fill(255, 0, 0);
      textAlign(RIGHT, CENTER);
      text("Lyn Inaizumi", windowWidth / 2 - 600, windowHeight / 2 - 100);
      pop();
    }
    fill(0);
    textAlign(CENTER, CENTER);
    text("M\nE\nN\nU", 50, 250);
  }
  if (state === 2) {
    background(0);
    rainAni();
    windowM();
    back();
    if (timerONE.isDone()) {
      state = 3;
      timerTWO = new Timer(3000);
    }
  }
  else if (state === 3) {
    background(0);
    rainAni();
    windowM();
    mask();
    back();
  }
  else if (state === 4) {
    background(0);
    rainAni();
    windowM();
    nameAndclass();
    back();
    if (timerTHREE.isDone()) {
      state = 5;
      timerFOUR = new Timer(12500);
    }
  }
  else if (state === 5) {
    background(0);
    rainAni();
    windowM();
    nameSongAndsinger();
    back();
    if (timerFOUR.isDone()) {
      state = 6;
    }
  }
  else if (state === 6) {
    background(0);
    rainAni();
    windowM();
    lyrics();
    back();
    if (maskENDS.isDone()) {
      state = 2;
    }
  }
  else if (state === 7) {
    background(0, 191, 255);
    beach();
    back();
    if (Gone.isDone()) {
      state = 8;
    }
  }
  else if (state === 8) {
    background(0, 191, 255);
    glide();
    beach();
    back();
  }
  else if (state === 9) {
    background(0, 191, 255);
    beach();
    gNameAndclass();
    back();
    if (gT.isDone()) {
      state = 10;
    }
  }
  else if (state === 10) {
    background(0, 191, 255);
    beach();
    gTitleAndProducer();
    back();
    if (gT2.isDone()) {
      state = 11;
    }
  }
  else if (state === 11) {
    background(0, 191, 255);
    beach();
    gAlbum();
    back();
    if (gT3.isDone()) {
      state = 12;
    }
  }
  else if (state === 12) {
    background(0, 191, 255);
    beach();
    back();
    if (glideENDS.isDone()) {
      state = 7;
      tGrow = 0;
      nameSlide = width / 2 - 300;
      titleSlide = width / 2 + 300;
      gAl_down = height / 2 - 200;
      gAl_up =  height / 2 + 200;
    }
  }
}

function maskMenu() {
  let buttonWidth = windowWidth / 2 - 100;
  let buttonHeight = windowHeight;
  let leftSide = 100;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  maskColor = 0;
  Rani = false;
  showTitleM = false;

  fill(255, 0, 0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    if (!preV_mask.isLooping()) {
      preV_mask.loop();
    }
    Rani = true;
    showTitleM = true;
    maskColor = 255;
    if (mouseIsPressed) {
      timerONE = new Timer(5000);
      button.play();
      preV_mask.stop();
      state = 2;
      rainSfx.loop();
    }
  }
  else {
    preV_mask.stop();
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(maskColor);
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Beneath the Mask", windowWidth / 2 - 600, windowHeight / 2);
}

function glideMenu() {
  let buttonWidth = windowWidth / 2;
  let buttonHeight = windowHeight;
  let leftSide = windowWidth / 2;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  glideColor = 0;
  Cani = false;
  showTitleG = false;

  fill(255, 255, 0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0, 191, 255);
    if (!preV_glide.isLooping()) {
      preV_glide.loop();
    }
    glideColor = 255, 255, 224;
    showTitleG = true;
    Cani = true;
    if (mouseIsPressed) {
      Gone = new Timer(5000);
      button.play();
      beachSfx.loop();
      preV_glide.stop();
      state = 7;
    }
  }
  else {
    preV_glide.stop();
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(glideColor);
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Glide", windowWidth / 2 + 700, windowHeight / 2);
}

function back() {
  let buttonWidth = 100;
  let buttonHeight = 100;
  let leftSide = 0;
  let topSide = 0;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  backColor = 0;

  fill(255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
    backColor = 255;
    if (mouseIsPressed) {
      state = 1;
      tGrow = 0;
      nameSlide = width / 2 - 300;
      titleSlide = width / 2 + 300;
      gAl_down = height / 2 - 200;
      gAl_up =  height / 2 + 200;
      button.play();
      maskMainM.stop();
      rainSfx.stop();
      beachSfx.stop();
      glideMainM.stop();
    }
  }
  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(backColor);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Back", 50, 50);
}

function beach() {
  push();
  rectMode(LEFT);
  fill(237, 201, 175);
  rect(0, windowHeight / 2 + 300, windowWidth, windowHeight);
  pop();
}

function ball() {
  grow = grow + 4;
  if (grow > 200) {
    grow = 0;
    cPosX = random(windowWidth / 2 + 200, windowWidth);
    cPosY = random(200, windowHeight - 200);
  }
  push();
  strokeWeight(5);
  stroke(255, 255, 0);
  noFill();
  ellipse(cPosX, cPosY, grow, grow);
  pop();
}

function glide() {
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  textSize(100);
  text("CLICK TO PLAY", width / 2, height / 2);
  if (mouseIsPressed) {
    state = 9;
    glideMainM.play();
    gT = new Timer(7222);
    gT2 = new Timer(14600);
    gT3 = new Timer(21561);
    glideENDS = new Timer(201000);
  }
}

function rainAni() {
  y = y + random(50, 400);
  y2 = y2 + random(50, 400);
  if (y > windowHeight) {
    y = -200;
    y2 = -100;
    x = random(windowWidth / 2 - 590, windowWidth / 2 - 110);
  }
  push();
  strokeWeight(2);
  stroke(255, 0, 0);
  line(x, y, x, y2);
  pop();
}

function MenuRainAni() {
  y = y + random(50, 400);
  y2 = y2 + random(50, 400);
  if (y > windowHeight) {
    y = -200;
    y2 = -100;
    x = random(100, windowWidth / 2);
  }
  push();
  strokeWeight(5);
  stroke(255, 0, 0);
  line(x, y, x, y2);
  pop();
}

function windowM() {
  push();
  fill(255);
  rectMode(CORNER);
  rect(0, 0, windowWidth, windowHeight / 2 - 390); //TOP side
  rect(0, 0, windowWidth / 2 - 590, windowHeight); //LEFT side
  rect(0, windowHeight / 2 + 390, windowWidth, windowHeight); //BOTTOM side
  rect(windowWidth / 2 - 110, 0, windowWidth, windowHeight); //RIGHT side
  pop();
  fill(0);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, windowWidth, windowHeight / 2 - 400); //TOP side
  rect(0, 0, windowWidth / 2 - 600, windowHeight); //LEFT side
  rect(0, windowHeight / 2 + 400, windowWidth, windowHeight); //BOTTOM side
  rect(windowWidth / 2 - 100, 0, windowWidth, windowHeight); //RIGHT side
}

function mask() {
  textAlign(LEFT, CENTER);
  fill(255, 0, 0);
  textSize(50);
  text("CLICK TO PLAY", width / 2 + 200, height / 2);
  if (mouseIsPressed) {
    state = 4;
    timerTHREE = new Timer(12500);
    maskENDS = new Timer(279000);
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
    Cone = new Timer(51000);
    Ctwo = new Timer(55000);
    Cthree = new Timer(58000);
    Cfour = new Timer(61000);
    Cfive = new Timer(64000);
    Csix = new Timer(68000);
    Cseven = new Timer(71000);
    Ceight = new Timer(74000);

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

    //end credits
    credits = new Timer(245000);

    //hidetext
    hidetext4 = new Timer(255000);

    maskMainM.play();
  }
}
//Name and Class for mask()
function nameAndclass() {
  textAlign(LEFT, CENTER);
  textLeading(20);
  fill(255, 0, 0);
  textSize(50);
  text("McRaven Tuazon\nCS30", width / 2 + 200, height / 2);
}

//name of the programmer and class for glide()
function gNameAndclass() {
  tGrow = tGrow + 0.4;
  push();
  textAlign(CENTER, CENTER);
  textLeading(20);
  fill(255, 255, 0);
  textSize(tGrow);
  text("McRaven Tuazon\nCS30", width / 2, height / 2);
  pop();
}

//name of song and producer's name for glide()
function gTitleAndProducer(){
  nameSlide = nameSlide + 0.3;
  titleSlide = titleSlide - 0.4;
  push();
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(100);
  text("Stephen Walking", nameSlide, height / 2 - 100);
  pop();
  push();
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  textSize(100);
  text("Glide", titleSlide, height / 2);
  pop();
}
//the name of the Album for glide()
function gAlbum(){
  gAl_down = gAl_down + 0.6;
  gAl_up = gAl_up - 0.6;
  push();
  textAlign(CENTER, LEFT);
  fill(255);
  textSize(100);
  text("Rocket League", windowWidth/2 - 400, gAl_down);
  pop();
  push();
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(100);
  text("X",windowWidth/2,windowHeight/2);
  pop();
  push();
  textAlign(CENTER, RIGHT);
  textLeading(5);
  fill(255, 255, 0);
  textSize(100);
  text("Monstercat\nVol.3", windowWidth/2 + 350, gAl_up);
  pop();
}

//Name of song and singer for mask()
function nameSongAndsinger() {
  textAlign(LEFT, CENTER);
  textLeading(20);
  fill(255, 0, 0);
  textSize(50);
  text("Beneath the Mask\nLyn Inaizumi", width / 2 + 200, height / 2);
}

function lyrics() {
  // settings of lyrics
  textAlign(LEFT, CENTER);
  fill(255, 0, 0);
  textSize(50);
  text(lyricsText, width / 2 + 200, height / 2);

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

  //end credits
  if (credits.isDone()) {
    textLeading(20);
    lyricsText = "Beneath the Mask\nLyn Inaizumi\nMcRaven Tuazon\nCS30";
  }

  // hidetext 4 //
  if (hidetext4.isDone()) {
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
