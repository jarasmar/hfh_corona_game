let keyWorker;

function setup() {
  createCanvas(600, 450);
  keyWorker = new KeyWorker();
}

function draw() {
  background(168);
  keyWorker.draw();
}
