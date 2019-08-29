const game = new Game();


function setup() {
  console.log("p5 setup");
  createCanvas(1500, 900);
  angleMode(DEGREES);
  game.setup();
}
let startGame = false

  function draw() {
    if(startGame){
    clear()

    game.draw();
    
    drawSprites();
    }
  }

function keyPressed() {
  game.submarine.keyPressed();
}
