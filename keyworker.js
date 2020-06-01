class KeyWorker {
  constructor() {
    this.x = 50;
    this.y = height - 50;
    this.yVelocity = 0;
  }

  jump() {
    this.yVelocity = -5;
  }

  move() {
    this.y += this.yVelocity;
  }

  draw() {
    rect(this.x, this.y, 50, 50);
  }
}