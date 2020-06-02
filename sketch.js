let keyWorker;
let virus = [];

let keyworkerImg;
let virusImg;
let backgroundImg;

function preload(){
  keyworkerImg = loadImage('mariodoctor.jpeg');
  virusImg = loadImage('coronavirus.jpeg');
  backgroundImg = loadImage("London.jpeg")
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

  background(backgroundImg);
  text(`Score: ${keyWorker.score}`, 10, 10, 70, 80);
  text(`Level: ${keyWorker.level}`, 740, 10, 70, 80);

  for(let v of virus) {
    v.move();
    v.draw();
    if(keyWorker.hits(v)){
      console.log("Game Over");
      noLoop(); 
    }

  }
  
  keyWorker.draw();
  keyWorker.move();
}
