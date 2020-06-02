class Virus {

  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
    this.virusTypes = [virusGreenImg, virusRedImg, virusBlueImg]
  }

  move() {
    this.x -= 5;
  }

  draw() {
    let v = random(this.virusTypes);
    image(v, this.x, this.y, this.size, this.size);
  }
}
