class KeyWorker {
 constructor () {
   this.size = 100;
   this.x = 50;
   this.y = height - this.size;
   this.yVelocity = 0;
   this.gravity = 2;
   this.keyworker = maleDoctor;
 }
changeCharacter() {
   if (dropdown.value() === "Female Doctor") {
     this.keyworker = femaleDoctor;
   }
   if (dropdown.value() === "Male Doctor") {
     this.keyworker = maleDoctor;
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
   return collideRectRect(this.x+30, this.y, this.size-30, this.size, virus.x, virus.y, virus.size, virus.size);
 }
 draw() {
   fill(22);
   rect(this.x+30, this.y-10, this.size-30, this.size);
   image(this.keyworker, this.x, this.y, this.size, this.size);
 }
}
