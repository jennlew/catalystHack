let x = 100;
let y = 100;
let bg;

function setup() {
createCanvas(1000, 661);
bg = loadImage('assets/galaxy2.jpg');
}

function draw() {
  background (bg);
  stroke(220);

  fill(60);
  ellipse(300, 300, 80, 80);
  fill(0, 0, 225);
  rect(x, y, 50, 50);

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
