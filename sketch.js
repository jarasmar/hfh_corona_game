let keyWorker;
let virus = [];

function setup() {
  createCanvas(800, 450);
  keyWorker = new KeyWorker();
}

function keyPressed() {
  if (keyIsDown(32) || keyIsDown(38)) {
    keyWorker.jump();
  }
}

function draw() {
  if(random(1) < 0.01) {
    virus.push(new Virus());
  }

  background(168);
  keyWorker.draw();
  keyWorker.move();

  for(let v of virus) {
    v.move();
    v.draw();
  }
}
