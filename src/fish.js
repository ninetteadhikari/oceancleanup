class Fish {
  constructor() {
    this.x = Math.random() * WIDTH;
    this.y = Math.random() * HEIGHT;
    this.gravity = 0.05;
    this.velocity = 0;
  }

  setup() {
}

draw() {

    image(fishImage, this.x, this.y, fishImage.width/10, fishImage.height/10);
    // this.move();
  }

  move() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}
