// McRavenTuazon
// 4/9/2018

//launchpad
//Imitate a launchpad for example https://www.youtube.com/watch?v=qAeybdD5UoQ
//Each grid plays a sample voice

//source
//https://www.youtube.com/watch?v=hbV5Uv_L8xM
//https://www.youtube.com/watch?v=GDpmVUEjagg
//https://www.youtube.com/watch?v=WSttUkU015s

//CONTROLS
//1 to 8
//Q to I
//A to K
//Z to <
//ESC to stop punk/instrumental and clear displayText
// O to play with voice & P to play without voice
//Click any grid to play sample voice as well

let rows = 4;
let cols = 8;
let grid;
let cellS;
let instrumental;
let punk;
let one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirten, fourten, fifteen, sixten;
let after, better, doit, ever, faster, harder, hour, makeit, makeus, morethan, never, our, over, stronger, workis, workit;
let textPOP = " ";
let lever = 1;

//preload the most important voice pack while the rest are put into the setup function
function preload() {
  one = loadSound("music/1.wav");
  two = loadSound("music/2.wav");
  three = loadSound("music/3.wav");
  four = loadSound("music/4.wav");
  five = loadSound("music/5.wav");
  six = loadSound("music/6.wav");
  seven = loadSound("music/7.wav");
  eight = loadSound("music/8.wav");
  nine = loadSound("music/9.wav");
  ten = loadSound("music/10.wav");
  eleven = loadSound("music/11.wav");
  twelve = loadSound("music/12.wav");
  thirten = loadSound("music/13.wav");
  fourten = loadSound("music/14.wav");
  fifteen = loadSound("music/15.wav");
  sixten = loadSound("music/16.wav");
  instrumental = loadSound("music/instrumental.mp3");
  punk = loadSound("music/daftPunk.mp3");
}

function setup() {
  createCanvas(700, 600);
  cellS = width / cols;
  grid = Random2dArray(cols, rows);
  after = loadSound("music/after.wav");
  better = loadSound("music/better.wav");
  doit = loadSound("music/do it.wav");
  ever = loadSound("music/ever.wav");
  faster = loadSound("music/faster.wav");
  harder = loadSound("music/harder.wav");
  hour = loadSound("music/hour.wav");
  makeit = loadSound("music/make it.wav");
  makeus = loadSound("music/makes us.wav");
  morethan = loadSound("music/more than.wav");
  never = loadSound("music/never.wav");
  our = loadSound("music/our.wav");
  over = loadSound("music/over.wav");
  stronger = loadSound("music/stronger.wav");
  workis = loadSound("music/work is.wav");
  workit = loadSound("music/work it.wav");
}

function draw() {
  background(0);
  display();
}

//switch between control to grid
function display(){
  if (lever === 1) {
    fill(255);
    textFont("Impact");
    textSize(100);
    textAlign(CENTER,CENTER);
    text("|CONTROLS|",width/2,height/2 - 150);
    textSize(40);
    text("1, 2, 3, 4, 5, 6, 7, 8",width/2,height/2);
    text("Q, W, E, R, T, Y, U, I",width/2,height/2 + 40);
    text("A, S, D, F, G, H, J, K",width/2,height/2 + 80);
    text("Z, X, C, V, B, N, M, ,",width/2,height/2 + 120);
    text("P to play & O to practice & Esc to stop",width/2,height/2 + 160);
    textSize(50);
    text("Press any key to continue", width/2, height/2 + 210);
    if (keyIsPressed) {
      lever = 2;
    }
  }
  else if (lever === 2) {
    drawGrid();
    displayText();
  }
}

//display a text at the bottom of the grid when click or press any grid
function displayText(){
  fill(255);
  textFont("Impact");
  textSize(90);
  textAlign(CENTER,CENTER);
  text(textPOP,width/2,height/2 +160);
}


function drawGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(255, 0, 0);
      }
      rect(x * cellS, y * cellS, cellS, cellS);
    }
  }
}

//each grid plays a voice pack and display a text when played
function mousePressed() {
  let xcoord = floor(mouseX / cellS);
  let ycoord = floor(mouseY / cellS);

  if (xcoord === 0 && ycoord === 0) {
    textPOP = "WORK IT";
    one.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 1 && ycoord === 0) {
    textPOP = "MAKE IT";
    two.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 2 && ycoord === 0) {
    textPOP = "DO IT";
    three.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 3 && ycoord === 0) {
    textPOP = "MAKE US";
    four.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 4 && ycoord === 0) {
    textPOP = "AFTER";
    after.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 5 && ycoord === 0) {
    textPOP = "BETTER";
    better.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 6 && ycoord === 0) {
    textPOP = "DO IT";
    doit.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 7 && ycoord === 0) {
    textPOP = "EVER";
    ever.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 0 && ycoord === 1) {
    textPOP = "HARDER";
    five.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 1 && ycoord === 1) {
    textPOP = "BETTER";
    six.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 2 && ycoord === 1) {
    textPOP = "FASTER";
    seven.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 3 && ycoord === 1) {
    textPOP = "STRONGER";
    eight.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 4 && ycoord === 1) {
    textPOP = "FASTER";
    faster.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 5 && ycoord === 1) {
    textPOP = "HARDER";
    harder.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 6 && ycoord === 1) {
    textPOP = "HOUR";
    hour.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 7 && ycoord === 1) {
    textPOP = "MAKE IT";
    makeit.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 0 && ycoord === 2) {
    textPOP = "MORE THAN";
    nine.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 1 && ycoord === 2) {
    textPOP = "HOUR";
    ten.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 2 && ycoord === 2) {
    textPOP = "OUR";
    eleven.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 3 && ycoord === 2) {
    textPOP = "NEVER";
    twelve.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 4 && ycoord === 2) {
    textPOP = "MAKE US";
    makeus.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 5 && ycoord === 2) {
    textPOP = "MORE THAN";
    morethan.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 6 && ycoord === 2) {
    textPOP = "NEVER";
    never.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 7 && ycoord === 2) {
    textPOP = "OUR";
    our.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 0 && ycoord === 3) {
    textPOP = "EVER";
    thirten.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 1 && ycoord === 3) {
    textPOP = "AFTER";
    fourten.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 2 && ycoord === 3) {
    textPOP = "WORK IS";
    fifteen.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 3 && ycoord === 3) {
    textPOP = "OVER";
    sixten.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 4 && ycoord === 3) {
    textPOP = "OVER";
    over.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 5 && ycoord === 3) {
    textPOP = "STRONGER";
    stronger.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 6 && ycoord === 3) {
    textPOP = "WORK IS";
    workis.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  else if (xcoord === 7 && ycoord === 3) {
    textPOP = "WORK IT";
    workit.play();
    if (grid[xcoord][ycoord] === 1) {
      grid[xcoord][ycoord] = 0;
    }
    else {
      grid[xcoord][ycoord] = 1;
    }
  }
  // if (grid[xcoord][ycoord] === 1) {
  //   grid[xcoord][ycoord] = 0;
  //   ten.play();
  // }
  // else {
  //   grid[xcoord][ycoord] = 1;
  // }

}

// function keyPressed() {
//   grid = Random2dArray(cols, rows);
// }

function Random2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}
//The botton layout
function keyTyped() {
  let xcoord;
  let ycoord;
  if (key === "1" || key === "1") {
    textPOP = "WORK IT";
    one.play();
    if (grid[0][0] === 1) {
      grid[0][0] = 0;
    }
    else {
      grid[0][0] = 1;
    }
  }
  else if (key === "2" || key === "2") {
    textPOP = "MAKE IT";
    two.play();
    if (grid[1][0] === 1) {
      grid[1][0] = 0;
    }
    else {
      grid[1][0] = 1;
    }
  }
  else if (key === "3" || key === "3") {
    textPOP = "DO IT";
    three.play();
    if (grid[2][0] === 1) {
      grid[2][0] = 0;
    }
    else {
      grid[2][0] = 1;
    }
  }
  else if (key === "4" || key === "4") {
    textPOP = "MAKE US";
    four.play();
    if (grid[3][0] === 1) {
      grid[3][0] = 0;
    }
    else {
      grid[3][0] = 1;
    }
  }
  else if (key === "5" || key === "5") {
    textPOP = "HARDER";
    five.play();
    if (grid[0][1] === 1) {
      grid[0][1] = 0;
    }
    else {
      grid[0][1] = 1;
    }
  }
  else if (key === "6" || key === "6") {
    textPOP = "BETTER";
    six.play();
    if (grid[1][1] === 1) {
      grid[1][1] = 0;
    }
    else {
      grid[1][1] = 1;
    }
  }
  else if (key === "7" || key === "7") {
    textPOP = "FASTER";
    seven.play();
    if (grid[2][1] === 1) {
      grid[2][1] = 0;
    }
    else {
      grid[2][1] = 1;
    }
  }
  else if (key === "8" || key === "8") {
    textPOP = "STRONGER";
    eight.play();
    if (grid[3][1] === 1) {
      grid[3][1] = 0;
    }
    else {
      grid[3][1] = 1;
    }
  }
  else if (key === "q" || key === "Q") {
    textPOP = "MORE THAN";
    nine.play();
    if (grid[0][2] === 1) {
      grid[0][2] = 0;
    }
    else {
      grid[0][2] = 1;
    }
  }
  else if (key === "w" || key === "W") {
    textPOP = "HOUR";
    ten.play();
    if (grid[1][2] === 1) {
      grid[1][2] = 0;
    }
    else {
      grid[1][2] = 1;
    }
  }
  else if (key === "e" || key === "E") {
    textPOP = "OUR";
    eleven.play();
    if (grid[2][2] === 1) {
      grid[2][2] = 0;
    }
    else {
      grid[2][2] = 1;
    }
  }
  else if (key === "r" || key === "R") {
    textPOP = "NEVER";
    twelve.play();
    if (grid[3][2] === 1) {
      grid[3][2] = 0;
    }
    else {
      grid[3][2] = 1;
    }
  }
  else if (key === "t" || key === "T") {
    textPOP = "EVER";
    thirten.play();
    if (grid[0][3] === 1) {
      grid[0][3] = 0;
    }
    else {
      grid[0][3] = 1;
    }
  }
  else if (key === "y" || key === "Y") {
    textPOP = "AFTER";
    fourten.play();
    if (grid[1][3] === 1) {
      grid[1][3] = 0;
    }
    else {
      grid[1][3] = 1;
    }
  }
  else if (key === "u" || key === "U") {
    textPOP = "WORK IS";
    fifteen.play();
    if (grid[2][3] === 1) {
      grid[2][3] = 0;
    }
    else {
      grid[2][3] = 1;
    }
  }
  else if (key === "i" || key === "I") {
    textPOP = "OVER";
    sixten.play();
    if (grid[3][3] === 1) {
      grid[3][3] = 0;
    }
    else {
      grid[3][3] = 1;
    }
  }
  else if (key === "p" || key === "P") {
    textPOP = " ";
    punk.stop();
    instrumental.stop();
    instrumental.play();
  }
  else if (key === "o" || key === "O") {
    textPOP = "|PRACTICE|";
    instrumental.stop();
    punk.stop();
    punk.play();
  }
  else if (key === "a" || key === "A") {
    textPOP = "AFTER";
    after.play();
    if (grid[4][0] === 1) {
      grid[4][0] = 0;
    }
    else {
      grid[4][0] = 1;
    }
  }
  else if (key === "s" || key === "S") {
    textPOP = "BETTER";
    better.play();
    if (grid[5][0] === 1) {
      grid[5][0] = 0;
    }
    else {
      grid[5][0] = 1;
    }
  }
  else if (key === "d" || key === "D") {
    textPOP = "DO IT";
    doit.play();
    if (grid[6][0] === 1) {
      grid[6][0] = 0;
    }
    else {
      grid[6][0] = 1;
    }
  }
  else if (key === "f" || key === "F") {
    textPOP = "EVER";
    ever.play();
    if (grid[7][0] === 1) {
      grid[7][0] = 0;
    }
    else {
      grid[7][0] = 1;
    }
  }
  else if (key === "g" || key === "G") {
    textPOP = "FASTER";
    faster.play();
    if (grid[4][1] === 1) {
      grid[4][1] = 0;
    }
    else {
      grid[4][1] = 1;
    }
  }
  else if (key === "h" || key === "H") {
    textPOP = "HARDER";
    harder.play();
    if (grid[5][1] === 1) {
      grid[5][1] = 0;
    }
    else {
      grid[5][1] = 1;
    }
  }
  else if (key === "j" || key === "J") {
    textPOP = "OUR";
    hour.play();
    if (grid[6][1] === 1) {
      grid[6][1] = 0;
    }
    else {
      grid[6][1] = 1;
    }
  }
  else if (key === "k" || key === "K") {
    textPOP = "MAKE IT";
    makeit.play();
    if (grid[7][1] === 1) {
      grid[7][1] = 0;
    }
    else {
      grid[7][1] = 1;
    }
  }
  else if (key === "z" || key === "Z") {
    textPOP = "MAKE US";
    makeus.play();
    if (grid[4][2] === 1) {
      grid[4][2] = 0;
    }
    else {
      grid[4][2] = 1;
    }
  }
  else if (key === "x" || key === "X") {
    textPOP = "MORE THAN";
    morethan.play();
    if (grid[5][2] === 1) {
      grid[5][2] = 0;
    }
    else {
      grid[5][2] = 1;
    }
  }
  else if (key === "c" || key === "C") {
    textPOP = "NEVER";
    never.play();
    if (grid[6][2] === 1) {
      grid[6][2] = 0;
    }
    else {
      grid[6][2] = 1;
    }
  }
  else if (key === "v" || key === "V") {
    textPOP = "OUR";
    our.play();
    if (grid[7][2] === 1) {
      grid[7][2] = 0;
    }
    else {
      grid[7][2] = 1;
    }
  }
  else if (key === "b" || key === "B") {
    textPOP = "OVER";
    over.play();
    if (grid[4][3] === 1) {
      grid[4][3] = 0;
    }
    else {
      grid[4][3] = 1;
    }
  }
  else if (key === "n" || key === "N") {
    textPOP = "STRONGER";
    stronger.play();
    if (grid[5][3] === 1) {
      grid[5][3] = 0;
    }
    else {
      grid[5][3] = 1;
    }
  }
  else if (key === "m" || key === "M") {
    textPOP = "WORK IS";
    workis.play();
    if (grid[6][3] === 1) {
      grid[6][3] = 0;
    }
    else {
      grid[6][3] = 1;
    }
  }
  else if (key === "," || key === "<") {
    textPOP = "WORK IT";
    workit.play();
    if (grid[7][3] === 1) {
      grid[7][3] = 0;
    }
    else {
      grid[7][3] = 1;
    }
  }
}
//stop the music and clears the text at the bottom grid
function keyPressed(){
  if (keyCode === ESCAPE) {
    textPOP = " ";
    instrumental.stop();
    punk.stop();
  }
}
