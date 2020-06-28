class KeyWorker {

  constructor () {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.gravity = 2;
    this.keyworker = maleDoctor1;
  }

  changeCharacter() {
    if (selectGender.value() === "female" && selectSkin.value() === "fair") {
      this.keyworker = femaleDoctor1;
    }
    if (selectGender.value() === "male" && selectSkin.value() === "fair") {
      this.keyworker = maleDoctor1;
    }
    if (selectGender.value() === "female" && selectSkin.value() === "medium") {
      this.keyworker = femaleDoctor2;
    }
    if (selectGender.value() === "male" && selectSkin.value() === "medium") {
      this.keyworker = maleDoctor2;
    }
    if (selectGender.value() === "female" && selectSkin.value() === "dark") {
      this.keyworker = femaleDoctor3;
    }
    if (selectGender.value() === "male" && selectSkin.value() === "dark") {
      this.keyworker = maleDoctor3;
    } 
  }

  jump() {
   if (this.y == height - this.size) {
     this.yVelocity = -35;
    }
  }

  move() {
    this.y += this.yVelocity;
    this.yVelocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  hits(virus){
    return collideRectRect(this.x+40, this.y, this.size-40, this.size, 
                          virus.x, virus.y, virus.size, virus.size);
  }

  draw() {
    image(this.keyworker, this.x, this.y, this.size, this.size);
  }
}
