let keyWorker;
let virus = [];
let score = 0;
let level = 0;

let timer = 120;
let timeWas = 0;

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
  // Display Background features
  // background(backgroundImg);
  background(166);
  text(`Score: ${score}`, 10, 10, 70, 80);
  text(`Level: ${level}`, 740, 10, 70, 80);

  // Display KeyWorker
  keyWorker.draw();
  keyWorker.move();

  // Display Virus
  if (frameCount > timeWas + timer && timer != 0) {
    timeWas = frameCount;
    timer = random(100, 400);
    virus.push(new Virus());
  }

  for(let v of virus) {
    v.move();
    v.draw();
    
    // Game Over if Collision
    if(keyWorker.hits(v)){
      console.log("Game Over");
      noLoop(); 
    }

    // Update Score and Level
    if (v.x == 0) {
      score += 1;
      if (score % 6 == 0) {
        level += 1;
      }
    }
  } 
}
