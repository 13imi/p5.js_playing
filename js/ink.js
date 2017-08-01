var devise = {};
devise.width = window.innerWidth;
devise.height = window.innerHeight;

var x, y, cy, cx;
var lastx = -999,
    lasty = -999,
    radius = 30;
var centx = 250,
    centy = 150;
var cplx = devise.width / 2, cply = devise.height / 2;
var cpx = 150, cpy = 150;
var c, c2;


function setup() {
    createCanvas(devise.width, devise.height);
    c = color(255, 31, 150);
    c2 = color(90, 254, 48);

    background(255);
    smooth();
}

function draw() {
    splatoon();
}

function mouseMoved() {
    drawCircle(mouseX, mouseY, c);
}

function keyTyped() {
    if (key === "g") {
        c = color(90, 254, 48);
    } else if (key === "p"){
        c = color(255, 31, 150);
    } else {
        background(255);
    }
}

function splatoon() {
    spNoiseX = random(100);
    spNoiseY = random(100);

    spNoiseX += 0.05;
    spNoiseY += 0.05;
    cpx = cplx + (noise(spNoiseX) * 200) - 100;
    cpy = cply + (noise(spNoiseY) * 200) - 100;
    if (cpx < -100 || cpy < -100 || cpx > devise.width + 100 || cpy > devise.height + 100) {
        cpx = devise.width / random(3);
        cpy = devise.height / random(3);
    }
    drawCircle(cpx, cpy, c2);

    cplx = cpx;
    cply = cpy;
}

function drawCircle(centx, centy, color) {
    var radiusNoise = random(100);

    beginShape();
    stroke(color);
    fill(color);

    for (var ang = 0; ang <= 360; ang += 10) {
        strokeWeight(5);

        radiusNoise += 0.05;
        var thisRadius = radius + (noise(radiusNoise) * 100) - 50;
        var rad = radians(ang);

        x = centx + (thisRadius * cos(rad));
        y = centy + (thisRadius * sin(rad));

        // inkSplash(thisRadius, rad);
        if (1 > random(10)) {
            var inkRadius = thisRadius + random(50);
            strokeWeight(random(10));
            inkx = centx + (inkRadius * cos(rad));
            inky = centy + (inkRadius * sin(rad));
            point(inkx, inky);
        }

        curveVertex(x, y);
    }
    endShape();
}

function inkSplash(thisRadius, rad) {

}

function inkCircle() {
    // strokeWeight(5);
    // stroke(255, 31, 150);
    // fill(255, 31, 150);
    // ellipse(centx, centy, radius * 2, radius * 2);

    var radiusNoise = random(100);

    for (var ang = 0; ang <=  360; ang += 30) {
        strokeWeight(5);

        var thisRadius = radius + random(30);
        var rad = radians(ang);

        cx = centx + (radius * cos(rad));
        cy = centy + (radius * sin(rad));

        if(ang >=  60 && ang <=  120) {
            x = cx;
            y = centy + (thisRadius * sin(rad));
        }
        else {
            x = centx + (thisRadius * cos(rad));
            y = centy + (thisRadius * sin(rad));
        }

        point(x, y);
        // line(cx, cy, x, y);
    }
}
