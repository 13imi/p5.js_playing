var radius = 150;
var z;
var r;
var theta;
var lastX, lastY, lastZ = 0;

function setup() {
  //最初に一回だけ
  createCanvas(640, 360, WEBGL);
  //pixelDensity(displayDensity());
}

function draw() {
  background(255);
  //translate(width/5, height/5, 0);
  rotateY(frameCount * 0.02);

  for(var dTheta = 0, dPhi = 0; dTheta <= 180; dTheta++, dPhi += 10) {
    theta = radians(dTheta);
    z = radius * cos(theta);
    var Phi = radians(dPhi),
        x = radius * sin(theta) * cos(Phi),
        y = radius * sin(theta) * sin(Phi);
    //r = radius * sin(theta);

    push();
    stroke(0);
    strokeWeight(4);
    translate(x, y, z);
    //line(lastX, lastY, lastZ, x, y ,z);
    //fill(0, x, y)
    fill(0);
    box(1);
    pop();

    lastX = x;
    lastY = y;
    lastZ = z;

  }

  /*
  for(var dTheta = 0; dTheta <= 180; dTheta += 10) {
    theta = radians(dTheta);
    z = radius * cos(theta);
    r = radius * sin(theta);
    drawCircle(z, r);
  }
  */
}

function drawCircle(z, r) {
  for (var dPhi = 0; dPhi < 360; dPhi += 10) {
    var Phi = radians(dPhi),
        x = r * cos(Phi),
        y = r * sin(Phi);

    push();
    stroke(0);
    strokeWeight(4);
    translate(x, y, z);
    fill(0);
    box(1);
    pop();
  }
}
