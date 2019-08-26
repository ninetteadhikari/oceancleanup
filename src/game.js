class Game {
  constructor() {
    this.background = new Background();
    this.fish = new Fish();
    this.submarine = new Submarine();
    this.trashes = [];
  }

  setup() {
    this.background.setup();
    this.submarine.setup();
  }

  draw() {
    this.background.draw();
    if (frameCount >= 60 && frameCount % 60 === 0)
      this.trashes.push(new Trash());

    this.trashes.forEach(trash => trash.draw());

    this.fish.draw();
    this.submarine.draw();
  }
}
