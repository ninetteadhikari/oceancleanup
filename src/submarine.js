class Submarine {
  constructor() {
    this.x = 700;
    this.y = 750;
    this.velocity = 4;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y);
    // this.sprite.addAnimation = ("submarine", submarineAnimation);
    this.sprite.addImage(submarineImage,30,30)
    this.sprite.scale=0.035  
}

  draw() {
    // image(submarineImage,this.x,this.y,submarineImage.width/25,submarineImage.height/25);
    this.keyIsDown();
  }

  keyIsDown() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.sprite.rotation += 3;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.sprite.rotation -= 3;
    } else if (keyIsDown(UP_ARROW)) {
      this.sprite.position.y -= cos(this.sprite.rotation) * this.velocity;
      this.sprite.position.x += sin(this.sprite.rotation) * this.velocity;
    }
  }
}
