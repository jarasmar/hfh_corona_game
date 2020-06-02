let keyWorker;
let virus = [];
let score = 0;
let level = 0;

let keyworkerImg;
let virusImg;
let backgroundImg;

function preload(){
  keyworkerImg = loadImage('mariodoctor.jpeg');
  virusImg = loadImage('coronavirus.jpeg');
  backgroundImg = loadImage("London.jpeg")
}

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
  if(random(1) < 0.005) {
    virus.push(new Virus());
  }

  // background(backgroundImg);
  background(166);
  text(`Score: ${score}`, 10, 10, 70, 80);
  text(`Level: ${level}`, 740, 10, 70, 80);

  for(let v of virus) {
    v.move();
    v.draw();
    
    if(keyWorker.hits(v)){
      console.log("Game Over");
      noLoop(); 
    }

    // add one point for every virus gone
    if (v.x == 0) {
      score += 1;
    }
  } 
  
  keyWorker.draw();
  keyWorker.move();
 
}

