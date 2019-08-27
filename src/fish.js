class Fish {
  constructor() {
    this.x = Math.random() * WIDTH;
    this.y = Math.random() * HEIGHT;
    this.gravity = 0.05;
    this.velocity = 0;
  }

  setup() {
    this.fishSprite = createSprite(this.x, this.y);
    this.fishSprite.addImage(fishImage, 30, 30);
    this.fishSprite.scale = 0.1;
  }

  draw() {
    this.move();
  }

  move() {
    if (frameCount > 120 && frameCount % 240 === 0) {
      this.fishSprite.rotation = random(360);
    }
    this.fishSprite.setSpeed(3, this.fishSprite.rotation);

    if (
      this.fishSprite.position.x === 0 ||
      this.fishSprite.position.x === WIDTH ||
      this.fishSprite.position.y === 0 ||
      this.fishSprite.position.y === HEIGHT
    ) {
      this.fishSprite.rotation += 180;
    }
  }
}
