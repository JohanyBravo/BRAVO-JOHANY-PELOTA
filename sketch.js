let posX;
let posY;
let diametro;
let radio;
let fondo;
let vel;
let bolita;
function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 30;
  radio = diametro / 2;
  fondo = color(255, 200, 50);
  bolita = color(30, 40, 255, 90);

  // frameRate(4);
  // print(posX);
  // posX = 234;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2;
  // print(posX);
  // print(posX) = posX / 5;
  // print(posX);
  // posX *= 8;
  // print(posX);
  // postX += 1;
  // print(posX);
  
}

function draw() {
  background(fondo);

  posX -= 10;
  if (posX < -radio) {
    diametro = random(10, 100);
    radio = diametro / 2;
    fondo = color(255, random(100, 255), 50);
    fill(255, random(0,255), 80);
    
    posX = windowWidth + radio;
  }
  noStroke();
  circle(posX, posY, diametro);
  print(posX);

}
