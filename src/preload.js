let trashImage;
let waveImage;
let oceanImage;
let algaeAnimation;
let seabedImage;
let fishImage;
let fishDeadImage;
let submarineImage;
let submarineAnimation;
let missileSpriteLoad;
let missileAnimation;

function preload() {
  trashImage = loadImage("assets/soda-bottle.png");
  waveImage = loadImage("assets/waves.png");
  oceanImage = loadImage("assets/ocean.png");
  seabedImage=loadImage("assets/seabed.png")
  fishImage = loadImage("assets/clown-fish-alive.png");
  fishDeadImage = loadImage("assets/clown-fish-dead.png");
  submarineImage = loadImage("assets/submarine.png");
  // submarineAnimation = loadAnimation("assets/submarine.png");
  algaeAnimation = loadAnimation(
    "assets/algae/algae1.png",
    "assets/algae/algae2.png",
    "assets/algae/algae1.png",
    "assets/algae/algae3.png",
    "assets/algae/algae4.png",
    "assets/algae/algae5.png",
    "assets/algae/algae6.png"
  );
  missileSpriteLoad = loadSpriteSheet("assets/explosion.png", 16, 16, 5);
  missileAnimation = loadAnimation(missileSpriteLoad);
}
