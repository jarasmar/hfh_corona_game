 class KeyWorker {
  
  constructor () {
    this.size = 50;
    this.x = 50;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.gravity = 2;
    this.score = 0;
    this.level = 0;
    this.keyworker = keyworkerImg
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

  changeCharacter(){
    this.keyworker = dropdown.value();
    console.log("Button is pressed");
    console.log("Chosen Keyworker", this.keyworker)
  }

  hits(virus){
    return collideRectRect(this.x, this.y, this.size, this.size, 
                          virus.x, virus.y ,virus.size, virus.size);
  }

  move() {
    this.y += this.yVelocity;
    this.yVelocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  draw() {
    image(this.keyworker, this.x, this.y, this.size, this.size);
  }
}