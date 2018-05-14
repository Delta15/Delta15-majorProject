
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0);
  // rect(random(width), random(height), random(50, 200), random(50, 200));
  string();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function string(){
  background(0);
  stroke(255,0,0);
  strokeWeight(3);
  line(windowWidth/2, windowHeight, windowWidth/2, 0);
}
