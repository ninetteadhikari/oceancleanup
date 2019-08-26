const game = new Game();

// function preload() {
//   game.background.preload();
//   game.fish.preload();
//   game.trash.preload();
// }

function setup() {
  console.log("p5 setup");
  createCanvas(1500, 900);
  game.setup();
  angleMode(DEGREES)
}

function draw() {
  game.draw();
  drawSprites();
}
