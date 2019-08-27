class Background {
  constructor() {
    this.xWaves = 0;
    this.xOcean = 0; 
    this.xSeabed=0;   
  }


  setup() {
    this.algaeSprite = createSprite(150, 630, algaeAnimation.width/10,algaeAnimation.height/10);
    this.algaeSprite.addAnimation("algaeAnimation", algaeAnimation);
    this.algaeSprite.animation.frameDelay = 10
    this.algaeSprite.scale=0.2;
  }

  draw() {
    this.xWaves += 2;
    if (this.xWaves >= WIDTH) {
      this.xWaves = 0;
    }
    image(waveImage, this.xWaves, 0, WIDTH, 150);

    image(waveImage, this.xWaves-WIDTH, 0, WIDTH, 150);

    image(oceanImage, this.xOcean, 149, WIDTH);
    image(seabedImage,this.xSeabed,830,WIDTH,70)
  }
}
