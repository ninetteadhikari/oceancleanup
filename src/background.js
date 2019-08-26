class Background {
  constructor() {
    this.xWaves = 0;
    this.xOcean = 0;    
  }


  setup() {
    // this.algaeSprite = createSprite(500, 700, algaeAnimation.width/10,algaeAnimation.height/10);
    // this.algaeSprite.addAnimation("algaeAnimation", algaeAnimation);
    // this.algaeSprite.animation.frameDelay = 10
    // this.algaeSprite.scale=0.5;
  }

  draw() {
    this.xWaves += 3;
    if (this.xWaves >= -WIDTH) {
      this.xWaves = 0;
    }
    image(waveImage, this.xWaves, 0, WIDTH, 150);

    image(waveImage, this.xWaves-WIDTH*2, 0, WIDTH, 150);

    image(oceanImage, this.xOcean, 150, WIDTH);
  }
}
