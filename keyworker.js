 class KeyWorker {
  
  constructor () {
    this.size = 150;
    this.x = 50;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.gravity = 2;
    this.score = 0;
    this.level = 0;
    this.keyworker = maleDoctor
  }

// function preload(){
// }

changeCharacter(){
    if(dropdown.value() === "Female Doctor"){
      this.keyworker = femaleDoctor;
    }
    if(dropdown.value === "Male Doctor"){
      this.keyworker = maleDoctor
    }
    draw()
    console.log("Chosen KeywWorker", this.keyworker)

  }

  jump() {
    if (this.y == height - this.size) {
        this.yVelocity = -35; 
      if (this.score < 6) {
        this.score += 1;
      } else {
        this.score = 0;
      }
      if (this.score >= 6) {
        this.level += 1;
      }
    }
  }

  move() {
    this.y += this.yVelocity;
    this.yVelocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  hits(virus){
    return collideRectRect(this.x, this.y, this.size, this.size, 
                          virus.x, virus.y ,virus.size, virus.size);
  }

  draw() {
    image(this.keyworker, this.x, this.y, this.size, this.size);
    console.log("Keyworker Draw Run")
  }
}