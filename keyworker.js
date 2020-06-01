class KeyWorker {
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
    this.yVelocity = 0;
    this.gravity = 2;
  }

  jump() {
    this.yVelocity = -25;
  }

  move() {
    this.y += this.yVelocity;
    this.yVelocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  draw() {
    rect(this.x, this.y, this.r, this.r);
  }
}