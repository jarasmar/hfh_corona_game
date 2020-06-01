let keyWorker;
let virus = [];

let keyworkerImage;
let virusImage;
let backgroundImg;

function preload(){
    // keyworkerImage = loadImage('./images/mariodoctor.jpeg');
    // virusImage = loadImage('./images/coronavirus.jpeg');
     backgroundImg = loadImage('coronavirus.jpeg');
}

function setup() {
  createCanvas(800, 850);
  keyWorker = new KeyWorker();
}

function keyPressed() {
  if (keyIsDown(32) || keyIsDown(38)) {
    keyWorker.jump();
  }
}

function draw() {
  if(random(1) < 0.005) {
    virus.push(new Virus());
  }
  background(168);
  for(let v of virus) {
    v.move();
    v.draw();
    if(keyWorker.hits(v)){
        console.log("game over");
        noLoop(); 
    }

  }
  keyWorker.draw();
  keyWorker.move();

  
}
