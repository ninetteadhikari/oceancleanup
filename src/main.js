const game = new Game();

// function preload() {
//   game.background.preload();
//   game.fish.preload();
//   game.trash.preload();
// }

function setup() {
  console.log("p5 setup");
  createCanvas(1500, 900);
  angleMode(DEGREES);
  game.setup();
}

function draw() {
  clear()
  if (game.fishAlive===true){
  game.draw();
  }
  drawSprites();
}

function keyPressed() {
  game.submarine.keyPressed();
}
