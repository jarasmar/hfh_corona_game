let keyWorker;
let virus = [];

// let input;

let score = 0;
let level = 0;

let timer = 300;
let timeWas = 0;

let keyworkerImg;
let virusImg;
let backgroundImg;
let femaleDoctor;

function preload(){
  virusImg = loadImage('./images/virus-green.png');
  // backgroundImg = loadImage()
  maleDoctor = loadImage('./images/doctor-male-1.png');
  femaleDoctor = loadImage('./images/doctor-female-1.png');
}

function setup() {
  createCanvas(1000, 500);
  keyWorker = new KeyWorker();
  // input = createInput(' ')
  dropdown = createSelect();
    // Position the dropdown menu
    dropdown.position(350,90);
    // Set options
    dropdown.option("Male Doctor");
    dropdown.option("Female Doctor");
    button = createButton('Choose');
    button.position(380,120);
    button.mousePressed(()=>{
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
  text(dropdown.value(), 340, 10, 70, 80);

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
      text("Game Over", 240, 500, 100, 80);
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
