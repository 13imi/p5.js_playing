// rect(x, y, w, h)
// rectMode(CORNER, CORNERS, CENTER, RADIUS)
// point, arc, triangle

var x = 0;
var r = 50;
var angle = 0;
var button;

function setup() {
  //最初に一回だけ
  createCanvas(480, 240);
  noStroke();
  background('skyblue');

  button = createButton("clear");
  button.position(10, 40);
  button.mousePressed(function() {
      background(random(255), random(255), random(255), random(30, 250));
  });
}

function sinTest(){
  //background('skyblue');
  push();
  translate(width /2, height/2);
  x = sin(radians(angle)) * r;
  y = cos(radians(angle)) * r;
  ellipse(x, y, 10, 10);
  pop();
  r += 0.1;
  angle += 3;
}

function draw() {
  x = random(width);
  y = random(height);
  if (random() > 0.9) {
    r = random(50, 80);
  } else {
    r = random(10, 30);
  }
  fill(255, 255, 255, random(30, 250));
  ellipse(x,y,r,r);
}

function initTest() {
  noStroke();
  background('skyblue');

  if (mouseIsPressed === true) {
    fill('white');
  }

  if (keyIsPressed === true) {
    fill('blue');
  }

  ellipse(mouseX, mouseY, r, r);

  var c = color('orange');
  fill(c);
  rect(width/2, 40, 50, 50);

  push();
  rotate(PI/4);
  fill(c);
  rect(width/2, 40, 50, 50);
  pop();

  fill('pink');
  stroke(c);
  ellipse(50, 50, x, 100);
  line(100, 110, 200, 230);
  x++;

  fill(c);
  stroke('gray');
  textSize(32);
  text(x, 100, 100);
}

function keyTyped() {
    if (key === 'u') {
      r += 10;
    }
    return false;
}
