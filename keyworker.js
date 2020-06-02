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
    if (dropdown1.value() === "Female" && dropdown2.value() === "White Doctor") {
      this.keyworker = femaleDoctor1;
    }
    if (dropdown1.value() === "Male" && dropdown2.value() === "White Doctor") {
      this.keyworker = maleDoctor1;
    }
    if (dropdown1.value() === "Female" && dropdown2.value() === "Asian Doctor") {
      this.keyworker = femaleDoctor2;
    }
    if (dropdown1.value() === "Male" && dropdown2.value() === "Asian Doctor") {
      this.keyworker = maleDoctor2;
    }
    if (dropdown1.value() === "Female" && dropdown2.value() === "African Doctor") {
      this.keyworker = femaleDoctor3;
    }
    if (dropdown1.value() === "Male" && dropdown2.value() === "African Doctor") {
      this.keyworker = maleDoctor3;
    }
    console.log("ChangeCharacter works")
    console.log(this.keyworker)

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
    return collideRectRect(this.x+40, this.y, this.size-40, this.size, virus.x, virus.y, virus.size, virus.size);
  }

  draw() {
    image(this.keyworker, this.x, this.y, this.size, this.size);
  }
}
