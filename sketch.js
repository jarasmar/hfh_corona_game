let yVelocity;


function setup() {
  createCanvas(600, 200);
  yVelocity = 0;
}

function draw() {
  background(168);

  fill('#FF00FF')
  ellipse(20, 20, 40);

  handleKey();
}



function handleKey() {
  if (keyIsDown(UP_ARROW) || keyIsDown(32) || mouseIsPressed) {

    if (onGround) {
      yVelocity += 5;
      console.log('onGround');
    }

  }

}
