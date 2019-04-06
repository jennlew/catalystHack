let x = 100;
let y = 100;
let bg;


function setup() {
createCanvas(windowWidth, windowHeight);
bg = loadImage('galaxy2.jpg');
//alienImg = loadImage('../alien.jpg');
alienImg = loadImage('alien.jpg');

frameRate(30);
//pickLocation();
}
 

function draw() {
  background (225);
  stroke(220);

  fill(60);
  ellipse(300, 300, 80, 80);
  fill(0, 0, 225);
  rect(x, y, 50, 50);

  image(bg, 0, 0);
  image(alienImg, 10, 10);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  fill(61);
  ellipse(5, 5, 80, 80);
  fill(62);
  ellipse(100, 300, 80, 80);
  fill(63);
  ellipse(600, 500, 80, 80);
  fill(64);
  ellipse(500, 600, 80, 80);
  fill(65);
  ellipse(250, 100, 80, 80);
  quad(28, 21, 56, 10, 39, 33, 20, 36);
  quad(58, 51, 86, 40, 69, 63, 50, 66);
  quad(128, 121, 156, 110, 139, 133, 120, 136);
  quad(328, 321, 356, 310, 339, 333, 320, 336);
  quad(28, 21, 56, 10, 39, 33, 20, 36);
  quad(28, 21, 56, 10, 39, 33, 20, 36);
  quad(28, 21, 56, 10, 39, 33, 20, 36);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
