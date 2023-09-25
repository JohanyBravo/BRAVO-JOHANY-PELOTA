function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(153, 50, 204);
  fill(mouseX);
  strokeWeight(mouseY);
  triangle(0, 75, 58, 20, 86, 75);
  textSize(20);
  text(mouseX, 50, 50);
  text(int(mouseY), 50, 100);
 }