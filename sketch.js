let keyWorker;
let virus = [];

let input;

let score = 0;
let level = 0;

let timer = 300;
let timeWas = 0;

let keyworkerImg; 
let virusImg;
let backgroundImg;
let femaleDoctor;
let maleDoctor;


function preload(){
  blueVirus = loadImage('./images/virus-blue.png');
  greenVirus = loadImage('./images/virus-green.png');
  redVirus = loadImage('./images/virus-red.png');

  // backgroundImg = loadImage()
  maleDoctor1 = loadImage('./images/doctor-male-1.png');
  maleDoctor2 = loadImage('./images/doctor-male-2.png');
  maleDoctor3 = loadImage('./images/doctor-male-3.png');

  femaleDoctor1 = loadImage('./images/doctor-female-1.png');
  femaleDoctor2 = loadImage('./images/doctor-female-2.png');
  femaleDoctor3 = loadImage('./images/doctor-female-3.png');

}

function setup() {
  createCanvas(800, 450);    
  keyWorker = new KeyWorker();

  dropdown1 = createSelect(); 
  dropdown2 = createSelect(); 

  dropdown1.position(300, 90); 
    dropdown1.option("Male"); 
    dropdown1.option("Female");

  dropdown2.position(400, 90); 
    dropdown2.option("White Doctor"); 
    dropdown2.option("Asian Doctor");
    dropdown2.option("African Doctor"); 
      
    button = createButton('Choose');
    button.position(380,120); 
    button.mousePressed(()=> {
      keyWorker.changeCharacter()
    })
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
  text(dropdown2.value(), 200, 10, 70, 80);

  // Display KeyWorker
  keyWorker.draw();
  keyWorker.move();

  // Display Virus
  if (frameCount > timeWas + timer && timer != 0) {
    timeWas = frameCount;
    timer = random(100, timer);
    virus.push(new Virus());
  }

  for(let v of virus) {
    v.move();
    v.draw();
    
    // Game Over if Collision
    if(keyWorker.hits(v)){
      console.log("Game Over");
      text("Game Over", 240, 200, 100, 80);
      noLoop(); 
    }

    // Update Score and Level
    if (v.x == 0) {
      score += 1;
      if (score % 5 == 0) {
        level += 1;
        timer -= 50;
      }
    }
  } 
}
