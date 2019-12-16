var x = 60;
var y = 440;
var radius = 45
var neckHeight = 40;
var bodyHeight = 43;
var easing = 0.04;

function setup() {
  createCanvas(690,540);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(255);
  var targetX = mouseX;
  x = x + (targetX - x) * easing;
  
  if (mouseIsPressed) {
    neckHeight = 16;
    BodyHeight = 90;
  } else {
    neckHeight = 70;
    bodyHeight = 160;
  }
  
 var neckY = y - neckHeight - bodyHeight - radius;
  
  stroke(10);
  line(x+12,y-bodyHeight,x-12,neckY);
  
  noStroke();
  fill("red");
  ellipse(x, y - 33, 33, 33);
  fill("red");
  rect(x - 50, y - bodyHeight, 100, bodyHeight - 33);

  fill("blue");
  ellipse(x + 12, neckY, radius, radius);
  fill("black");
  ellipse(x + 24, neckY - 16, 14, 14);

  ellipse(x + 24, neckY - 6, 3, 3);

}