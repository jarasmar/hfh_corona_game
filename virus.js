class Virus {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }

  move() {
    this.x -= 5;
  }

  draw() {
    rect(this.x, this.y, this.size, this.size);
  } 
}