 class KeyWorker {
  constructor () {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.gravity = 2;
  }

  jump() {
    if(this.y == height - this.size){
    this.yVelocity = -35; 
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
    rect(this.x, this.y, this.size, this.size);
  }
}