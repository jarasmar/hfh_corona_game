let started = false;

let keyWorker;
let virus = [];

let score = 0;
let level = 1;

let timer = 300;
let timeWas = 0;

function preload(){

  // jumpSound = loadSound('./sounds/jump.mp3');
  // pointSound = loadSound('./sounds/point.mp3');
  // gameOverSound = loadSound('./sounds/game-over.mp3');
  // europeSound = loadSound('./sounds/europe.mp3');
  // asiaSound = loadSound('./sounds/asia.mp3');
  // africaSound = loadSound('./sounds/africa.mp3');
  // americaSound = loadSound('./sounds/america.mp3');

  virusGreenImg = loadImage('./images/virus-green.png');
  virusRedImg = loadImage('./images/virus-red.png');
  virusBlueImg = loadImage('./images/virus-blue.png');

  maleDoctor1 = loadImage('./images/doctor-male-1.png');
  maleDoctor2 = loadImage('./images/doctor-male-2.png');
  maleDoctor3 = loadImage('./images/doctor-male-3.png');

  femaleDoctor1 = loadImage('./images/doctor-female-1.png');
  femaleDoctor2 = loadImage('./images/doctor-female-2.png');
  femaleDoctor3 = loadImage('./images/doctor-female-3.png');

  europeImg = loadImage('./images/europe.png');
  asiaImg = loadImage('./images/asia.png');
  africaImg = loadImage('./images/africa.png');
  americaImg = loadImage('./images/america.png');
}

function setup() {
  createCanvas(1000, 500);
  textSize(30);
  textFont("Courier New");
  textStyle(BOLD);
  
  resetGame();
}

function resetGame() {
  // clean previous game
  clear();

  // Hide game over div
  gameOver = select('#gameOver');
  gameOver.hide();
 
  // show choose character
  menu = select('#chooseCharacter');
  menu.show();

  keyWorker = new KeyWorker();

  // access the dropdown menu
  selectGender = select('#gender');
  selectSkin = select('#skin');
  button = select('#startGame');
  
  // onclick function to select character and start game
  button.mousePressed(()=> {
    keyWorker.changeCharacter();
    menu = select('#chooseCharacter');
    menu.hide();
    start();
  })
}

function start(){
  virus = [];
  score = 0;
  level = 1;
  started = true;
  loop();


function keyPressed() {
  if (keyIsDown(32) || keyIsDown(38)) {
    keyWorker.jump();
  }
}

function loadBackground() {
  if ((level == 1) || (level == 5)) {
    return asiaImg;
  }

  if ((level == 2) || (level == 6)) {
    return europeImg;
  }

  if ((level == 3) || (level == 7)) {
    return africaImg;
  }

  if ((level == 4) || (level == 8)) {
    return americaImg;
  }
}

function draw() {

  if (started) {
    // Display Background features
    background(166);
    background(loadBackground());
    
    text(`Score: ${score}`, 10, 10, 200, 100);
    text(`Level: ${level}`, 820, 10, 200, 100);
  
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
      // gameOverSound.play();
      noLoop();
      gameOver = select('#gameOver');
      gameOver.show();
      button = select('#playAgain');
  
      button.mousePressed(()=> {
        started = false;
        resetGame();
      }) 
    }

    // Update Score and Level
    if (v.x == 0) {
      // pointSound.play();
      score += 1;
      if (score % 2 == 0) {
        level += 1;

        // if (level === 2) {
        //   if (!europeSound.isPlaying()) {
        //     europeSound.play();
        //     europeSound.setVolume(0.1);
        //   }
        // }
        
        // if (level === 3) {
        //   if (!africaSound.isPlaying()) {
        //     africaSound.play();
        //     africaSound.setVolume(0.1);
        //   }
        // }

        // if (level === 4) {
        //   if (!americaSound.isPlaying()) {
        //     americaSound.play();
        //     americaSound.setVolume(0.1);
        //   }
        // }

        // timer -= 50;
      }
    }
    // Display KeyWorker
    keyWorker.draw();
    keyWorker.move();
  }
}
