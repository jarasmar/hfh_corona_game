class Virus {
  constructor() {
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 5;
  }

  draw() {
    rect(this.x, this.y, this.r, this.r);
  }
}