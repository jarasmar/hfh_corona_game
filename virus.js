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
    image(virusImg, this.x, this.y, this.size, this.size);
  }
}
