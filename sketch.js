let keyWorker;
let virus = [];

let keyworkerImage;
let virusImage;
let backgroundImg;

function preload(){
    keyworkerImage = loadImage('mariodoctor.jpeg');
    virusImage = loadImage('coronavirus.jpeg');
     backgroundImg = loadImage("London.jpeg")
}

function setup() {
  createCanvas(800, 850);
    // loadImage("London.jpeg")    

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
//   text("Score : ", 10,10,70,80)
  text(keyWorker.score , 10,10,70,80)

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
