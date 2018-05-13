function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0);
  // rect(random(width), random(height), random(50, 200), random(50, 200));

  stroke(255,0,0);
  strokeWeight(2);
  line(windowWidth/2, windowHeight, windowWidth/2, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
