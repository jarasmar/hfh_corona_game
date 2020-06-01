let keyWorker;

function setup() {
  createCanvas(600, 450);
  keyWorker = new KeyWorker();
}

function keyPressed() {
  if (keyIsDown(32) || keyIsDown(38)) {
    keyWorker.jump();
  }
}

function draw() {
  background(168);
  keyWorker.draw();
  keyWorker.move();
}
