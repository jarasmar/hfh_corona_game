 class KeyWorker {
  
  constructor () {
    this.size = 50;
    this.x = 50;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.gravity = 2;
    this.score = 0;
    this.level = 0;
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
    // fill(255,204, 0)
    // rect(this.x, this.y, this.size, this.size);
    image(keyworkerImg, this.x, this.y, this.size, this.size);
  }
}