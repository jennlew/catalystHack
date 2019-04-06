let x = 100;
let y = 100;
let bg;
rect(x, y, 50, 50);


function setup() {
createCanvas(1260, 690);
bg = loadImage('galaxy2.jpg');
alienImg = loadImage('alien.jpg');

frameRate(30);
//pickLocation();
}


function draw() {
  background (225);
  image(bg, 0, 0);
  stroke(220);


  quad(28, 21, 56, 10, 39, 33, 20, 36);
  quad(58, 51, 86, 40, 69, 63, 50, 66);
  quad(128, 121, 156, 110, 139, 133, 120, 136);
  quad(328, 321, 356, 310, 339, 333, 320, 336);
  quad(528, 521, 556, 510, 539, 533, 520, 536);
  quad(728, 721, 756, 710, 739, 733, 720, 736);
  quad(28, 21, 56, 10, 39, 33, 20, 36);
  image(alienImg, 10, 10, alienImg.height / 2, alienImg.width / 2);

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
}

function keyPressed(){

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
